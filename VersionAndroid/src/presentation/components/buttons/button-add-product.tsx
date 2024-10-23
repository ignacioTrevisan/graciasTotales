import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { storeUi } from '../../store/ui-store';

export const ButtonAddProduct = () => {
    const openProductModal = storeUi(state => state.openProductModal);

    return (
        <View style={styles.container}>
            <Pressable onPress={openProductModal}>

                <Text style={{ color: 'white', textAlign: 'center', alignSelf: 'center', fontSize: 35, marginBottom: 5 }}>
                    +
                </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        zIndex: 3,
        width: 70,
        height: 70,
        borderRadius: 100,
        position: 'absolute',
        backgroundColor: 'blue',
        bottom: 10,
        right: 10,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})
