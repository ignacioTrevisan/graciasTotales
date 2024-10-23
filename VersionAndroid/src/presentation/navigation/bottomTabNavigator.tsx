import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GenerateCodes } from '../screen/codes/admin/generate-codes';
import { ViewCodesValides } from '../screen/codes/admin/view-codes-valides';
import { IonIcon } from '../ui/ionIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="GenerateCodes" options={{ title: 'Generar codigo', tabBarIcon: ({ color }) => (<IonIcon icon='qr-code-outline' color={color} />) }} component={GenerateCodes} />
      <Tab.Screen name="ViewCodesValides" options={{ title: 'Ver codigos disponibles', tabBarIcon: ({ color }) => (<IonIcon icon='search-outline' color={color} />) }} component={ViewCodesValides} />
    </Tab.Navigator>
  );
}