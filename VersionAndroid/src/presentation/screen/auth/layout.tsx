import React, { ReactNode, useState } from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { HamburguerSection } from '../../ui/hamburguerSection'
import { stylesSesion } from './auth-styles'

interface Props {
    text: string
    children: ReactNode;
    heightProp?: number
}
export const LayoutLogin = ({ text, children, heightProp }: Props) => {
    const { width, height } = useWindowDimensions();
    const [email, setEmail] = useState('');
    return (
        <ImageBackground source={{ uri: 'https://res.cloudinary.com/nachotrevisan/image/upload/v1727184480/graciasTotales/logo_dsc8e3.png' }}
            style={{ flex: 1 }} resizeMode='repeat'>


            <LinearGradient
                colors={['transparent', 'white']}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />

            <View style={stylesSesion.container}>
                <View style={[stylesSesion.childContainer, { width: width * 0.8, height: heightProp ? heightProp : width * 0.85, alignItems: 'center' }]}>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'RockSalt-Regular', marginTop: 15 }}>{text}</Text>

                    {children}

                </View>
            </View>
        </ImageBackground>
    )
}
