import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen/home/home-screen";
import { LoginScreen } from "../screen/auth/login-screen";
import { RegisterScreen } from "../screen/auth/register-screen";
import { authStore } from "../store/auth-store";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { ProfileConfiguration } from "../screen/profile/profile-configuration";

const Stack = createStackNavigator();


export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',

                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ProfileConfiguration" component={ProfileConfiguration} />

        </Stack.Navigator>
    );
}