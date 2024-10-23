import React from 'react'
import { Text, View } from 'react-native'
import { authStore } from '../../store/auth-store';

export const ProfileConfiguration = () => {
    const user = authStore(state => state.user);

    return (
        <View><Text>{JSON.stringify(user ? user : 'No hay nada.', null, 2)}</Text>
        </View>
    )
}
