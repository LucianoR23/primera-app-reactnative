import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const onAddCounter = () => {
        setCounter( count => count + 1 );
    };

    const onMinusCounter = () => {
        setCounter( counter - 1 );
    };


    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Counter: { counter }</Text>
            <Fab text={'-1'} action={ onMinusCounter } style={styles.fabLocationL} />
            <Fab text={'+1'} action={ onAddCounter } style={styles.fabLocationR} />
            <Fab text={'Reset'} action={ () => setCounter(0) } style={styles.fabLocationCenter} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        top: -25,
    },
    fabLocationL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fabLocationR: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    fabLocationCenter: {
        position: 'absolute',
        bottom: 25,
        left: 175,
    },
});
