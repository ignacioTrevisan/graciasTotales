import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { OnGetAllProducts } from '../../../helpers/get-all-products'
import { products } from '../../../core/entities/product.entities';
import { ArticleInArticles } from '../../components/article-in-articles';
import { ButtonAddProduct } from '../../components/buttons/button-add-product';
import { AddProductModal } from '../../components/modal/add-product-modal';
import { storeUi } from '../../store/ui-store';
import LinearGradient from 'react-native-linear-gradient';
import { Title } from '../../ui/title';
import { Animated } from 'react-native';
import { useAnimations } from '../../hooks/animations';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HamburguerSection } from '../../ui/hamburguerSection';

export const ArticlesScreen = () => {

    const [productos, setProductos] = useState<products[]>([])
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        cargaInicial();
    }, [])
    const cargaInicial = async () => {
        try {
            setisLoading(true);
            setProductos([]);
            const data = await OnGetAllProducts();
            setProductos(data);

        } catch (error) {

        } finally {

            setisLoading(false);
        }

    }

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading])

    const { top } = useSafeAreaInsets();



    const isOpenAddProductModal = storeUi(state => state.isOpenAddProductModal);

    return (
        <ImageBackground source={{ uri: 'https://res.cloudinary.com/nachotrevisan/image/upload/v1727184480/graciasTotales/logo_dsc8e3.png' }}
            style={{ flex: 1 }} resizeMode='repeat'>
            <LinearGradient
                colors={['transparent', 'white']}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
            <HamburguerSection />
            {isOpenAddProductModal ?
                <AddProductModal />
                :
                (isLoading === false) ?
                    <>

                        <ScrollView refreshControl={
                            <RefreshControl
                                refreshing={isLoading}
                                progressViewOffset={top}
                                onRefresh={cargaInicial}
                            />
                        }>
                            <Title text='Articulos disponibles' style={{ marginTop: 20, width: 250 }} align />

                            <View
                                style={{
                                    flex: 1,
                                    paddingLeft: 10,
                                    margin: 20,
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around',

                                }}

                            >
                                {productos.map((p) =>
                                    <ArticleInArticles producto={p} key={p.id} />
                                )}
                            </View>
                        </ScrollView>
                    </>
                    : <Text>Cargando...</Text>//TODOO: PONER ANIMACION DE CARGA


            }
            <ButtonAddProduct />
        </ImageBackground>
    )

}


