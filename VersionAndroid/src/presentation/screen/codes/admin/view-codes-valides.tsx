import React from 'react'
import { ImageBackground, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { GlobalStylesBox } from './box-styles'
import { UseCodes } from '../../../../hooks/useCodes';
import LinearGradient from 'react-native-linear-gradient';
import { HamburguerSection } from '../../../ui/hamburguerSection';

export const ViewCodesValides = () => {

    const { width, height } = useWindowDimensions();
    const { codes } = UseCodes();
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
                <View style={{ ...GlobalStylesBox.container, flexDirection: 'column', width: width * 0.90, height: height * 0.80, backgroundColor: '#333' }}>

                    <Text style={GlobalStylesBox.title}>
                        Codigos disponibles
                    </Text>
                    <View style={{ marginTop: 20, width: width * 0.70, alignSelf: 'center' }}>

                        {codes.map((c) =>
                            <Text style={{ color: 'white', marginTop: 20, textAlign: 'left', fontSize: 16, fontFamily: 'Roboto-Ligth' }}>-Codigo: '{c.codigo}' con cantidad de {c.cantidad}</Text>
                        )}
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}
