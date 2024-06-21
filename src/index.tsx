import { registerRootComponent } from 'expo';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='home'
                >
                    <Stack.Screen name="home" component={HomeScreen} />
                    <Stack.Screen name="other" component={OtherScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

registerRootComponent(App);
