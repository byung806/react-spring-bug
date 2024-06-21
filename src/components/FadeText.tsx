import { animated, useSpring } from '@react-spring/native';
import { ReactNode } from 'react';
import { Text as TextNative, TouchableOpacity } from 'react-native';

const AnimatedText = animated(TextNative);

interface TextProps {
    children: ReactNode;
}

export default function FadeText({ children, ...props }: TextProps & any) {
    const [springs, api] = useSpring(() => ({
        from: { opacity: 0.2 },
    }))

    const handleClick = () => {
        console.log('animation should start')
        api.start({
            from: {
                opacity: 0.2,
            },
            to: {
                opacity: 1,
            },
        })
    }

    return (
        <TouchableOpacity activeOpacity={1.0} onPress={handleClick}>
            <AnimatedText {...props} style={{ opacity: springs.opacity, ...props.style }}>
                {children}
            </AnimatedText>
        </TouchableOpacity>
    );
}