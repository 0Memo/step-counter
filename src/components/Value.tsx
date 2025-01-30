// import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ValueProps = {
    label: string;
    value: string
}

const Value = ({ label, value }: ValueProps) => (
    <View>
        <Text style={styles.title}>{ label }</Text>
        <Text style={styles.text}>{ value }</Text>
    </View>
)

export default Value;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16101b',
        justifyContent: 'center',
        padding: 30,
    },
    mainTitle: {
        position: "absolute",
        top: 130,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center"
    },
    title: {
        fontFamily: 'Kalam-Light',
        fontSize: 22,
        color: '#f5f5f5'
    },
    text: {
        fontFamily: 'Kalam-Regular',
        fontSize: 35,
        color: '#f5f5f5'
    },
    boldText: {
        fontFamily: 'Kalam-Bold',
        fontSize: 32,
        letterSpacing: 1.5,
        marginBottom: 8,
        color: '#f5f5f5'
    },
    marginTop: {
        marginTop: 20
    }
});