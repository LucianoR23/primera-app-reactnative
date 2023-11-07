import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, StyleProp, ViewStyle, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    text: string
    action: (() => void),
    style?: StyleProp<ViewStyle>
}

export const Fab = ({ text, action, style }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity style={ style } onPress={ action } >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>{ text }</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View style={ style }>
                <TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple('#0F5DA0', true, 30) } onPress={ action } >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }>{ text }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#1B83DE',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
