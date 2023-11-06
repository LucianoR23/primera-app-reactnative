import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface Props {
    text: string
    action: ((event: GestureResponderEvent) => void),
    style?: StyleProp<ViewStyle>
}

export const Fab = ({ text, action, style }: Props) => {
    return (
        <TouchableOpacity style={ style } onPress={ action } >
            <View style={ styles.fab }>
                <Text style={ styles.fabText }>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#1B83DE',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
