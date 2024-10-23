import React, { useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TextInputBase, useWindowDimensions, View } from 'react-native'
import { UseForm } from '../../../hooks/useForms';
import { storeUi } from '../../store/ui-store';
import { UseProducts } from '../../../hooks/useProducts';

export const AddProductModal = () => {
    const { width, height } = useWindowDimensions();

    const { startUploadProducts } = UseProducts();
    const [imagenes, setImagenes] = useState<string[]>([
        'https://res.cloudinary.com/nachotrevisan/image/upload/v1726522942/graciasTotales/D_NQ_NP_783024-MLA75958016117_042024-O_hvrnwl.webp',
        'https://res.cloudinary.com/nachotrevisan/image/upload/v1726522942/graciasTotales/D_NQ_NP_923399-MLA75958016115_042024-O_v4ygua.webp',
        'https://res.cloudinary.com/nachotrevisan/image/upload/v1726522942/graciasTotales/D_NQ_NP_723331-MLA75958016119_042024-O_hts3sa.webp',
    ]);
    const deleteImage = (imagen: string) => {
        const updatedImages = imagenes.filter(image => image !== imagen);
        setImagenes(updatedImages);
    }
    const nombreInput = UseForm(300);
    const descripcionInput = UseForm(300);
    const valorPuntosInput = UseForm(300);
    const closeProductModal = storeUi(state => state.closeProductModal);

    const subirProducto = async () => {
        const resp = await startUploadProducts({ Imagenes: imagenes, titulo: nombreInput.text, descripcion: descripcionInput.text, valorEnPuntos: valorPuntosInput.text })
        if (resp) {
            console.log('subid correctamente')
        }
    }
    return (
        <View style={{ ...styles.container, marginTop: imagenes.length > 0 ? 40 : 100, width: width * 0.90, height: imagenes.length > 0 ? height * 0.82 : height * 0.60 }}>
            <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 20, color: 'white', fontFamily: 'Roboto-Black' }}>
                Agregar producto
            </Text>
            <View style={{ width: width * 0.90, alignItems: 'center' }}>

                <View
                    style={{
                        borderBottomColor: '#0d6efd',
                        borderBottomWidth: 1,
                        marginVertical: 10,
                        width: width * 0.70,
                        zIndex: 5

                    }}
                />
            </View>
            <View style={{ marginLeft: 20 }}>



                <Text style={{ fontSize: 25, marginTop: 20, color: 'white', fontFamily: 'Roboto-Light' }}>
                    Nombre
                </Text>
                <View style={{ width: width * 0.90, display: 'flex', flexDirection: 'column', }}>

                    <TextInput

                        style={{
                            height: 40,
                            borderTopColor: 'grey',
                            borderLeftColor: 'grey',
                            borderRightColor: 'grey',
                            width: 300,
                            borderBottomColor: 'black',
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            color: 'white',

                            marginVertical: 10,
                            fontFamily: 'Roboto-Light'
                        }}
                        placeholder="Escribe algo..."
                        value={nombreInput.text}
                        onChangeText={nombreInput.handleTextChange}  // Actualiza el estado con el texto ingresado
                    />
                </View>
                <Text style={{ fontSize: 25, marginTop: 10, color: 'white', fontFamily: 'Roboto-Light' }}>
                    Descripción
                </Text>
                <View style={{ width: width * 0.90, display: 'flex', flexDirection: 'column' }}>
                    <TextInput
                        style={{
                            height: 40,
                            borderTopColor: 'grey',
                            borderLeftColor: 'grey',
                            borderRightColor: 'grey',
                            width: 300,
                            borderBottomColor: 'black',
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            color: 'white',

                            marginVertical: 10,
                            fontFamily: 'Roboto-Light'
                        }}
                        placeholder="Escribe algo..."
                        value={descripcionInput.text}
                        onChangeText={descripcionInput.handleTextChange}  // Actualiza el estado con el texto ingresado
                    />
                </View>
                <Text style={{ fontSize: 25, marginTop: 10, color: 'white', fontFamily: 'Roboto-Light' }}>
                    Valor en puntos
                </Text>
                <View style={{ width: width * 0.90, display: 'flex', flexDirection: 'column' }}>


                    <TextInput

                        style={{
                            height: 40,
                            borderTopColor: 'grey',
                            borderLeftColor: 'grey',
                            borderRightColor: 'grey',
                            width: 300,
                            borderBottomColor: 'black',
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            color: 'white',

                            marginVertical: 10, fontFamily: 'Roboto-Light'
                        }}
                        placeholder="Escribe algo..."
                        value={valorPuntosInput.text}
                        onChangeText={valorPuntosInput.handleTextChange}  // Actualiza el estado con el texto ingresado
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30, width: width * 0.90, justifyContent: 'center' }}>

                <Pressable>
                    <Text style={{ color: 'white', backgroundColor: '#0d6efd', height: 25, fontSize: 15, marginBottom: 10, borderRadius: 15, width: width * 0.60, textAlign: 'center', fontFamily: 'Roboto-Light' }}>Agregar imagenes</Text>
                </Pressable>
            </View>
            {
                imagenes.length > 0 &&

                <View style={{ height: 150, marginTop: 5, width: width * 0.90 }}>
                    <FlatList
                        data={imagenes}
                        horizontal
                        renderItem={({ item }) => (<>
                            <Pressable onPress={() => deleteImage(item)}>

                                <Image style={{ width: 100, height: 120, marginTop: 15, marginBottom: 15, marginLeft: 15, borderRadius: 15 }} source={{ uri: item }} />
                            </Pressable>
                        </>)}


                    />

                </View>

            }
            <View style={{ position: 'absolute', bottom: 30, flexDirection: 'column', marginTop: 15, alignItems: 'center', display: 'flex', width: width * 0.90 }}>

                <View style={{ display: 'flex', flexDirection: 'row', gap: 15, }}>

                    <Pressable style={{ justifyContent: 'center', width: 150 }} onPress={closeProductModal}>
                        <Text style={{ textAlign: 'center', color: 'white', borderRadius: 100, backgroundColor: '#0d6efd', height: 40, fontSize: 25 }}>Cancelar</Text>
                    </Pressable>
                    <Pressable style={{ justifyContent: 'center', width: 150 }} onPress={subirProducto}>
                        <Text style={{ textAlign: 'center', color: 'white', borderRadius: 100, backgroundColor: '#0d6efd', height: 40, fontSize: 25 }}>Confirmar</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginLeft: 20,
        zIndex: 2,
        flex: 1,
        backgroundColor: 'grey',
        borderRadius: 20,
        display: 'flex',

    }
})