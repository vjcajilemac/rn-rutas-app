import { createStackNavigator } from '@react-navigation/stack';
import PermissionsScreen from '../screens/permissions/PermissionsScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';
import MapScreen from '../screens/maps/MapScreen';

const Stack = createStackNavigator();


export type RootStackParams = {
    LoadingScreen: undefined;
    PermissionsScreen: undefined;
    MapsScreen: undefined
}

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='LoadingScreen'
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor:'white'
            }
        }}
    >
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />


    </Stack.Navigator>
  );
}