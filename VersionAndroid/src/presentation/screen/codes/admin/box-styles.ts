import { StyleSheet } from "react-native";

export const GlobalStylesBox = StyleSheet.create({
    container: {
        borderRadius: 20
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        marginTop: 15,
        fontFamily: 'RockSalt-Regular'
    },
    smallBox: {
        marginTop: 10,
        height: 70,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
