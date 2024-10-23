import { useRef } from "react";
import { Animated } from "react-native"

export const useAnimations = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const returnValue = () => {
        animatedOpacity.setValue(0);
    }

    const fadeIn = ({ duration = 300, toValue = 1, callback = () => { } }) => {
        Animated.timing(animatedOpacity,
            {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true
            }).start(callback)
    }
    return {
        animatedOpacity,

        fadeIn,
        returnValue

    }
}