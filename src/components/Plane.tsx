import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

import { animated, config, useSpring } from '@react-spring/three';

export type PlaneRef = {
    devToggle: () => void;
};

interface Props {
    planeType?: number;
}

export const Plane = forwardRef<PlaneRef, Props>( (props, ref) => {
    const mesh = useRef<THREE.Mesh>(null);
    const url = require("@/assets/icon.png")
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);

    // allows the parent to call these functions with a ref
    useImperativeHandle(ref, () => ({
        devToggle: () => {
            devToggle();
        }
	}));

    const [active, setActive] = useState(false);
    const { scale } = useSpring({
        scale: active ? 1.2 : 1,
        config: config.wobbly,
    })

    function devToggle() {
        setActive(!active);
    }

    return (
        <animated.mesh {...props} scale={scale} onPointerUp={() => {setActive(false)}} onPointerDown={() => {setActive(true)}} ref={mesh} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <planeGeometry />
            <meshStandardMaterial transparent map={texture} side={THREE.DoubleSide} />
        </animated.mesh>
    );
});