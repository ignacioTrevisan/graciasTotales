import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    icon: string,
    size?: number,
    color?: string
}
export const IonIcon = ({ icon, size = 30, color = '#333' }: Props) => {
    return (


        <Icon name={icon} size={size} color={color} />

    )
}
