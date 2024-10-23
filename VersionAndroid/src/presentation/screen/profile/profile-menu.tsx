import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { HamburguerSection } from '../../ui/hamburguerSection';
import { useNavigation } from '@react-navigation/native';
import { UseAuthReducer } from '../../../hooks/useAuthReducer';

export const ProfileMenu = () => {
    const navigate = useNavigation();
    const { startLogOut } = UseAuthReducer();
    const unLogg = async () => {
        await startLogOut();
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
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1 }}>
                <ButtonCreated text='Configuración de cuenta' onPress={() => { navigate.navigate('ProfileConfiguration' as never) }} />
                <View style={{ marginTop: 40 }} />
                <ButtonCreated text='Cerrar sesión' onPress={unLogg} />
            </View>
        </ImageBackground>
    )
}


interface Props {
    text: string,
    onPress: () => void;

}

const ButtonCreated = ({ text, onPress }: Props) => {
    const { width, height } = useWindowDimensions();
    return (


        <Pressable style={{ width: width * 0.8, backgroundColor: '#333', height: 50, borderRadius: 15, }}
            onPress={onPress}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 26, marginTop: 5, marginHorizontal: 10 }}>
                {text}
            </Text>
        </Pressable>
    )
}
