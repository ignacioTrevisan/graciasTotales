import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { LoginScreen } from '../auth/login-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ArticlesScreen } from '../articles/articles-screen';
import { UserScreen } from '../users/user-screen';
import { BottomTabNavigator } from '../../navigation/bottomTabNavigator';
import { ProfileMenu } from '../profile/profile-menu';
import { IonIcon } from '../../ui/ionIcon';
import { authStore } from '../../store/auth-store';

export const HomeScreen = () => {
    const Drawer = createDrawerNavigator();
    const { navigate } = useNavigation();
    const user = authStore(state => state.user);
    const status = authStore(state => state.status);

    useEffect(() => {
        if (!user) {
            navigate('Login' as never)
        }
        if (status !== 'Logged') {
            navigate('Login' as never)

        }
    }, [])



    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#333', // Color de fondo del drawer
                },
                drawerActiveTintColor: 'white', // Color de texto del item seleccionado
                drawerInactiveTintColor: 'grey',

            }}
        >
            <Drawer.Screen name="Perfil" options={{ title: 'Perfil', drawerIcon: ({ color, size, focused }) => (focused && <IonIcon icon='person-circle-outline' color={color} size={size} />) }} component={ProfileMenu} />
            <Drawer.Screen name="Articulos" component={ArticlesScreen} options={{ title: 'Articulos', drawerIcon: ({ color, size, focused }) => (focused && <IonIcon icon='pricetag-outline' color={color} size={size} />) }} />
            <Drawer.Screen name="users" component={UserScreen} options={{ title: 'Usuarios', drawerIcon: ({ color, size, focused }) => (focused && <IonIcon icon='people-outline' color={color} size={size} />) }} />
            <Drawer.Screen name="Codes" component={BottomTabNavigator} options={{ title: 'Codigos', drawerIcon: ({ color, size, focused }) => (focused && <IonIcon icon='qr-code-outline' color={color} size={size} />) }} />

        </Drawer.Navigator>
    )
}
