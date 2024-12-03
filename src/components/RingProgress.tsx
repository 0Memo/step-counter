import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type RingProgressProps = {
    radius?: number;
    strokeWidth?: number;
    progress: number;
}

const color = '#36013F';

const RingProgress = ({ radius = 70, strokeWidth = 20, progress }: RingProgressProps) => {
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

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
            <Circle
                originX={ radius }
                originY={ radius }
                cx={ radius }
                cy={ radius }
                r={ innerRadius }
                strokeWidth={ strokeWidth }
                stroke={ color }
                fill={ 'transparent' }
                strokeDasharray={ [circumference * progress, circumference] }
                strokeLinecap='round'
                rotation='-90'
            />
        </Svg>
    </View>
    )
}

export default RingProgress