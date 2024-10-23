import React from 'react'
import { Alert, ImageBackground, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { GlobalStylesBox } from './box-styles';
import LinearGradient from 'react-native-linear-gradient';
import { HamburguerSection } from '../../../ui/hamburguerSection';
import { IonIcon } from '../../../ui/ionIcon';
import { PromptAdapter } from '../../../../config/adapters/prompt/prompt-adapter';
import { CreateNewCode } from '../../../../core/use-cases/codes/create-new-code';
import { graciasTotalesFetcher } from '../../../../config/adapters/graciasTotalesFetcher';

export const GenerateCodes = () => {
    const { width, height } = useWindowDimensions();
    const CodigosDisponibles = [
        { tipo: 'Solo sorteo', cantidad: 2002 },
        { tipo: '100 puntos', cantidad: 100 },
        { tipo: '80 puntos', cantidad: 80 },
        { tipo: '60 puntos', cantidad: 60 },
        { tipo: '40 puntos', cantidad: 40 }
    ]

    const generateCode = (cantidad: number) => {


        PromptAdapter({
            title: 'Correo', message: 'Ingrese un codigo de confirmacion para el cliente', buttons:
                [{ text: 'Cancelar', onPress: (value: string) => console.log('Cancelado, codigo: ' + value + ' cantidad: ' + cantidad) },
                { text: 'Confirmar', onPress: (value: string) => enviar(cantidad, value) }
                ]
        })
    }
    const enviar = async (cantidad: number, value: string) => {
        const resp = await CreateNewCode(graciasTotalesFetcher, cantidad, value);
        if (resp.ok) {
            Alert.alert('¡Puntos generados!', 'Los puntos fueron agregados correctamente y estan listos para ser canjeados.', [
                { text: 'OK' },
            ]);
        } else {
            Alert.alert('Ups...', 'Ocurrio un error generando los puntos', [
                { text: 'OK' },
            ]);
        }
    }
    return (
        <ImageBackground source={{ uri: 'https://res.cloudinary.com/nachotrevisan/image/upload/v1727184480/graciasTotales/logo_dsc8e3.png' }}
            style={{ flex: 1 }} resizeMode='repeat'>
            <LinearGradient
                colors={['transparent', 'white']}
                style={StyleSheet.absoluteFillObject} // Se asegura que el degradado cubra toda el área del ImageBackground
                start={{ x: 0.5, y: 0 }} // Inicio del degradado desde la parte superior (y = 0)
                end={{ x: 0.5, y: 1 }}   // Finaliza en la parte inferior (y = 1)
            />
            <HamburguerSection />

            <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                <View style={{ ...GlobalStylesBox.container, width: width * 0.90, height: height * 0.80, backgroundColor: '#333' }}>

                    <Text style={GlobalStylesBox.title}>
                        Generar codigo
                    </Text>
                    <View style={{ height: height * 0.60, marginTop: 30, paddingTop: 30, justifyContent: 'space-between', alignItems: 'center' }}>

                        {CodigosDisponibles.map((c, index) => (
                            <View style={{ ...GlobalStylesBox.smallBox, width: width * 0.60 }} key={index}>
                                <Pressable style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}
                                    onPress={() => generateCode(c.cantidad)}
                                >
                                    <View style={{ left: 0 }}>

                                        <IonIcon icon='qr-code-outline' color='white' />
                                    </View>
                                    <View style={{ alignSelf: 'center' }}>

                                        <Text style={{ color: 'white', marginLeft: 10 }}>{c.tipo}</Text>
                                    </View>
                                </Pressable>
                            </View>
                        ))}

                    </View>

                </View>
            </View>
        </ImageBackground>
    )
}

