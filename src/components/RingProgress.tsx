import React, { useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Circle, CircleProps } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import Feather from '@expo/vector-icons/Feather';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgressProps = {
    radius?: number;
    strokeWidth?: number;
    progress: number;
}

const color = '#36013F';

export default function RingProgress ({ radius = 70, strokeWidth = 28, progress }: RingProgressProps) {
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, { duration: 1000});
    }, [ progress ])

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference]
    }));

    const circleDefaultProps: CircleProps = {
        originX: radius,
        originY: radius,
        cx: radius,
        cy: radius,
        r: innerRadius,
        strokeWidth: strokeWidth,
        stroke: color,
        fill: 'transparent',
        strokeLinecap: 'round',
        rotation: '-90'
    }

    return (
    <View
        style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center'
        }}
    >
        <Svg>
            <Circle { ...circleDefaultProps } opacity={ 0.3 } />
            <AnimatedCircle animatedProps={ animatedProps } { ...circleDefaultProps } />
            <Feather name="arrow-right" size={ strokeWidth * 0.85 } color="#f5f5f5" style={{ position: 'absolute', alignSelf: 'center',top: strokeWidth * 0.025 }}/>
        </Svg>
    </View>
    )
}