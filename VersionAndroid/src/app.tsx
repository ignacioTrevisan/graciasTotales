
import './utils/gesture-handler'
import { ImageBackground, Text, View } from 'react-native'
import { Navigation } from './presentation/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
    return (
        <NavigationContainer>

            <Navigation />
        </NavigationContainer>

    )
}
