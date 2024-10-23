import React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


interface Props {
    text: string;
    style?: StyleProp<ViewStyle>
    fontSize?: number,
    align?: boolean
}
export const Title = ({ text, style, fontSize = 16, align = false }: Props) => {
    return (
        <View style={[{ backgroundColor: 'grey', alignSelf: align ? 'center' : undefined }, style]}>
            <Text style={{ color: 'white', fontSize: fontSize, fontFamily: 'Roboto-Black', textAlign: 'center' }}>

                {text}
            </Text>
        </View>
    )
}
