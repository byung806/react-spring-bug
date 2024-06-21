import { Button, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import { Canvas } from "@react-three/fiber/native";
import useControls from "r3f-native-orbitcontrols";
import { Suspense, useRef } from 'react';
import FadeText from './components/FadeText';
import { Plane, PlaneRef } from './components/Plane';


export default function OtherScreen({ navigation }: { navigation: StackNavigationProp<any, any> }) {
    const [OrbitControls, events] = useControls();
    const plane = useRef<PlaneRef>();

    return (
        <View style={{ flex: 1 }}>
            <FadeText style={{ fontSize: 60 }}>This text should fade in on click</FadeText>

            <Canvas
                shadows
                orthographic
                camera={{ position: [0, 10, 0], zoom: 100 }}
            >
                <OrbitControls
                    enablePan={false}
                />
                <ambientLight intensity={1} />
                <directionalLight castShadow intensity={2} />
                <Suspense fallback={null}>
                    {/* @ts-expect-error */}
                    <Plane ref={plane} />
                </Suspense>
            </Canvas>

            <Button title='Click me to toggle 3D object animation (or click the 3D object)' onPress={() => { plane.current?.devToggle() }} />
            <Button title="Go back to home" onPress={() => navigation.navigate('home')} />
        </View>
    );
};
