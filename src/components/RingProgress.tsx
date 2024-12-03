import React, { useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgressProps = {
    radius?: number;
    strokeWidth?: number;
    progress: number;
}

const color = '#36013F';

const RingProgress = ({ radius = 70, strokeWidth = 22, progress }: RingProgressProps) => {
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, { duration: 1000});
    }, [ progress ])

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference]
    }));

    return (
    <View
        style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center'
        }}
    >
        <Svg>
            <Circle
                cx={ radius }
                cy={ radius }
                r={ innerRadius }
                strokeWidth={ strokeWidth }
                stroke={ color }
                fill={ 'transparent' }
                opacity={ 0.2 }
            />
            <AnimatedCircle
                animatedProps={ animatedProps }
                originX={ radius }
                originY={ radius }
                cx={ radius }
                cy={ radius }
                r={ innerRadius }
                strokeWidth={ strokeWidth }
                stroke={ color }
                fill={ 'transparent' }
                strokeLinecap='round'
                rotation='-90'
            />
        </Svg>
    </View>
    )
}

export default RingProgress