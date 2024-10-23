import React, { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, useWindowDimensions, View } from 'react-native'
import { LayoutLogin } from './layout'
import { useNavigation } from '@react-navigation/native'
import { IonIcon } from '../../ui/ionIcon'
import { UseAuthReducer } from '../../../hooks/useAuthReducer'
import { authStore } from '../../store/auth-store'

export const LoginScreen = () => {
    const { width, height } = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const { startLogginWithEmailAndPassword } = UseAuthReducer();
    const status = authStore(state => state.status);

    const navigate = useNavigation();
    useEffect(() => {
        if (status === 'Logged') {
            navigate.navigate('Home' as never);
        }
    }, [status])

    const startLogin = () => {
        startLogginWithEmailAndPassword({ email: email, password: contraseña });
    }
    return (
        <LayoutLogin text='Iniciar sesión'>
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
                        value={contraseña}
                        onChangeText={(text) => setContraseña(text)}
                    />
                </View>
                <View style={{ width: '100%', flexDirection: 'row', gap: 5 }}>

                    <Pressable style={{ alignSelf: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 15, marginTop: 20, width: width * 0.3, height: height * 0.05 }}>
                        <View style={{ justifyContent: 'center', height: '100%', flexDirection: 'row', alignItems: 'center' }}>


                            <IonIcon icon='logo-google' color='white' size={20} />

                            <Text style={{ color: 'white', marginLeft: 10, textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 16, }}>
                                Google
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={{ alignSelf: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 15, marginTop: 20, width: width * 0.3, height: height * 0.05 }}
                        onPress={startLogin}
                    >
                        <View style={{ justifyContent: 'center', height: '100%' }}>

                            <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 16, }}>
                                Iniciar
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <Pressable onPress={() => navigate.navigate('RegisterScreen' as never)}>
                    <Text style={{ color: 'white' }}>¿Todavía no tienes cuenta? Registrate aquí</Text>
                </Pressable>
            </View>
        </LayoutLogin>
    )
}

