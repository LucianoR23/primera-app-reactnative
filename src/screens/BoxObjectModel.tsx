import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModel = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>BoxObjectModel</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1B83DE',
        flex: 1,
    },
    title: {
        fontSize: 20,
        borderWidth: 10,
        padding: 20,
        // width: 250,
        // backgroundColor: '#1B83DE',
    },
});
