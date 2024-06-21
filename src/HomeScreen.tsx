import { Button, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import FadeText from './components/FadeText';

export default function HomeScreen({ navigation }: { navigation: StackNavigationProp<any, any> }) {
    return (
        <View style={{ flex: 1 }}>
            <FadeText style={{ fontSize: 60 }}>This text should fade in on click</FadeText>
            <Button title="Go to other screen" onPress={() => navigation.navigate('other')} />
        </View>
    );
};
