import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const HamburguerSection = () => {
    const navigation = useNavigation();


    return (
        <View style={{ height: 50, }}>
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Text>
                    <Icon name="menu-outline" size={30} color="#333" />;



                </Text>
            </Pressable>
        </View>
    )
}
