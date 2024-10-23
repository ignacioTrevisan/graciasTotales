import React, { useEffect } from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';
import { GlobalStylesBox } from '../codes/admin/box-styles';
import { useUserQuery } from '../../../helpers/get-user-query';
import LinearGradient from 'react-native-linear-gradient';
import { Title } from '../../ui/title';
import { HamburguerSection } from '../../ui/hamburguerSection';

export const UserScreen = () => {
    const { query, setQuery, data, userSelected, isSelected, isLoading, canjes, points, obtenerTodosLosUsuarios, buscar } = useUserQuery();
    const { width, height } = useWindowDimensions();


    useEffect(() => {
        obtenerTodosLosUsuarios();
    }, [])




    const filteredData = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));


    if (isLoading) {
        return (<Text>Cargando...</Text>) //TODO: Poner animacion de carga también
    }
    return (
        <ImageBackground source={{ uri: 'https://res.cloudinary.com/nachotrevisan/image/upload/v1727184480/graciasTotales/logo_dsc8e3.png' }}
            style={{ flex: 1 }} resizeMode='repeat'>

            <LinearGradient
                colors={['transparent', 'white']}
                style={StyleSheet.absoluteFillObject} // Se asegura que el degradado cubra toda el área del ImageBackground
                start={{ x: 0.5, y: 0 }} // Inicio del degradado desde la parte superior (y = 0)
                end={{ x: 0.5, y: 1 }}   // Finaliza en la parte inferior (y = 1)
            />
            <HamburguerSection />

            <View style={{ justifyContent: 'center', flexDirection: 'column' }}>

                <View style={{ width: 250, alignSelf: 'center', backgroundColor: 'red', marginTop: 20, zIndex: 5 }}>
                    <View style={styles.autocompleteContainer}>
                        <Title text='Buscar usuario' style={{}} />


                        <AutocompleteInput
                            data={filteredData.length === 1 && filteredData[0].toLowerCase() === query.toLowerCase() ? [] : filteredData}
                            value={query}
                            style={{}}
                            onChangeText={(text) => setQuery(text)}
                            flatListProps={{
                                keyExtractor: (index) => index.toString(),
                                renderItem: ({ item }) => <Pressable style={{ backgroundColor: 'grey' }} onPress={() => setQuery(item)}><Text style={{ color: 'white', display: filteredData.length === data.length ? 'none' : 'flex', fontSize: 16, marginTop: 5, fontFamily: 'Roboto-Medium' }}>{item}</Text></Pressable>,
                            }}
                        />
                        <View style={{ width: 250, justifyContent: 'flex-end', flexDirection: 'row', }}>

                            <Pressable onPress={buscar} style={{ backgroundColor: 'grey', width: 60, borderRadius: 20, marginTop: 5 }}><Text style={{ textAlign: 'center', color: 'white', height: 25, marginTop: 2 }} >Buscar</Text></Pressable>
                        </View>
                    </View>


                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, justifyContent: 'center', marginTop: 375 }}>
                    <View style={{ ...GlobalStylesBox.container, flexDirection: 'column', width: width * 0.90, height: height * 0.60, backgroundColor: '#333' }}>
                        {
                            isSelected ? <>
                                <Text style={GlobalStylesBox.title}>{userSelected?.displayName}</Text>
                                <View style={{ height: 50, marginLeft: 15 }}>

                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator
                                        style={{ paddingBottom: 0 }}
                                    >

                                        <Text style={{ fontFamily: 'Roboto-Regular', color: 'white', fontSize: 24, marginTop: 15 }}>Uid: {userSelected?.uid}</Text>
                                    </ScrollView>
                                </View>
                                <Text style={{ marginLeft: 15, fontFamily: 'Roboto-Regular', color: 'white', fontSize: 24, marginTop: 15 }}>Puntos de usuario: {points}</Text>
                                <Text style={{ marginLeft: 15, fontFamily: 'Roboto-Regular', color: 'white', fontSize: 24, marginTop: 15 }}>Participa en el sorteo: No</Text>
                                <Text style={{ marginLeft: 15, fontFamily: 'Roboto-Regular', color: 'white', fontSize: 24, marginTop: 15 }}>Canjes:</Text>
                                <View style={{ width: width * 0.90, justifyContent: 'center', flexDirection: 'row' }}>
                                    <View style={{ ...GlobalStylesBox.container, flexDirection: 'column', width: width * 0.75, height: height * 0.29, paddingTop: 10, paddingLeft: 5 }}>
                                        <ScrollView

                                        >

                                            {canjes.length > 0 && canjes.map((c) =>
                                                <View style={{ borderColor: 'white', marginTop: 25 }}>
                                                    <ScrollView horizontal>
                                                        <Text style={{ color: 'white' }}>*Titulo: {c.titulo}- id: {c.id}- reclamado: {c.reclamado ? 'Si' : 'No'}</Text>
                                                    </ScrollView>
                                                    {!c.reclamado ?
                                                        <View style={{ width: width * 0.75, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                                            <Pressable style={{ backgroundColor: 'grey', width: 170, borderRadius: 15 }}><Text style={{ textAlign: 'center', color: 'white' }}>Marcar como reclamado</Text></Pressable>
                                                        </View>
                                                        : <></>
                                                    }
                                                </View>
                                            )}
                                        </ScrollView>
                                    </View>
                                </View>

                            </>

                                : <></>}

                    </View>
                </View>
            </View >
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    autocompleteContainer: {
        left: 0,
        width: 250,
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    }
})