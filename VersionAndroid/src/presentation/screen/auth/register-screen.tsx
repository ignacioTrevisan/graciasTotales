import React, { useState } from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { HamburguerSection } from '../../ui/hamburguerSection'
import { stylesSesion } from './auth-styles'
import { LayoutLogin } from './layout'
import { useNavigation } from '@react-navigation/native'

export const RegisterScreen = () => {
    const { width, height } = useWindowDimensions();
    const [email, setEmail] = useState('');
    const navigate = useNavigation();
    return (
        <LayoutLogin text='Registrarse' heightProp={width}>
            <View style={{ justifyContent: 'center', top: -50, height: '100%' }}>
                <View style={{ width: width * 0.6, }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', color: 'white', fontSize: 16 }}>Email</Text>
                    <TextInput

                        style={{
                            height: 40,
                            borderTopColor: 'grey',
                            borderLeftColor: 'grey',
                            borderRightColor: 'grey',
                            width: '100%',
                            borderBottomColor: 'black',
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            color: 'white',

                            marginVertical: 10, fontFamily: 'Roboto-Light'
                        }}
                        placeholder="Escribe algo..."
                        value={email}
                        onChangeText={(text) => setEmail(text)}  // Actualiza el estado con el texto ingresado
                    />
                </View>
                <View style={{ width: width * 0.6, }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', color: 'white', fontSize: 16 }}>Nombre de usuario</Text>
                    <TextInput

                        style={{
                            height: 40,
                            borderTopColor: 'grey',
                            borderLeftColor: 'grey',
                            borderRightColor: 'grey',
                            width: '100%',
                            borderBottomColor: 'black',
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            color: 'white',

                            marginVertical: 10, fontFamily: 'Roboto-Light'
                        }}
                        placeholder="Escribe algo..."
                        value={email}
                        onChangeText={(text) => setEmail(text)}  // Actualiza el estado con el texto ingresado
                    />
                </View>
                <View style={{ width: width * 0.6, }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', color: 'white', fontSize: 16 }}>Contraseña</Text>
                    <TextInput

                        style={{
                            height: 40,
                            borderTopColor: 'grey',
                            borderLeftColor: 'grey',
                            borderRightColor: 'grey',
                            width: '100%',
                            borderBottomColor: 'black',
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            color: 'white',

                            marginVertical: 10, fontFamily: 'Roboto-Light'
                        }}
                        placeholder="Escribe algo..."
                        value={email}
                        onChangeText={(text) => setEmail(text)}  // Actualiza el estado con el texto ingresado
                    />
                </View>


                <Pressable style={{ alignSelf: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 15, marginTop: 20, width: width * 0.4, height: height * 0.05 }}>
                    <View style={{ justifyContent: 'center', height: '100%' }}>

                        <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 16, }}>
                            Iniciar
                        </Text>
                    </View>
                </Pressable>

            </View>
            <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <Pressable onPress={() => navigate.navigate('Login' as never)}>
                    <Text style={{ color: 'white' }}>¿Ya tienes cuenta? Registrate aquí</Text>
                </Pressable>
            </View>
        </LayoutLogin>
    )
}
