import React, { useCallback, useEffect, useRef } from 'react'
import { Animated, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { products } from '../../core/entities/product.entities'
import Carousel from 'react-native-reanimated-carousel';
import { useAnimations } from '../hooks/animations';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

interface ArticleInArticlesProps {
    producto: products;
}

export const ArticleInArticles = ({ producto }: ArticleInArticlesProps) => {

    const isFocused = useIsFocused(); // Hook para saber si la pantalla está activa

    const { animatedOpacity, fadeIn, returnValue } = useAnimations();

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        returnValue();
        if (!isFocused) return;
        fadeIn({ duration: 1500 })
    }, [isFocused])



    return (



        <ScrollView style={{}}>

            <Animated.View style={{ ...styles.container, width: width * 0.41, height: height * 0.25, backgroundColor: 'grey', opacity: animatedOpacity }}>
                <Carousel
                    style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                    width={width * 0.41}
                    height={height * 0.20}
                    data={producto.Imagenes}
                    scrollAnimationDuration={500}
                    renderItem={({ index }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                style={{
                                    flex: 1, width: width * 0.41, shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 10,

                                    },
                                    resizeMode: 'cover'
                                }}
                                source={{ uri: producto.Imagenes[index] }}

                            />


                        </View>
                    )}
                />

                <Pressable style={{ marginBottom: 10, alignItems: 'center' }}>

                    <Text style={{ color: 'black', width: 55, borderRadius: 15, backgroundColor: 'white', textAlign: 'center' }}>Ver</Text>

                </Pressable>
            </Animated.View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {

        borderRadius: 15,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 10,

        }
    }
})