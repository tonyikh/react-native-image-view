// @flow
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HIT_SLOP = {top: 15, left: 15, right: 15, bottom: 15};

const styles = StyleSheet.create({
    closeButton: {
        alignSelf: 'flex-end',
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        marginRight: 15,
    },
    closeButton__text: {
        backgroundColor: 'transparent',
        fontSize: 36,
        lineHeight: 36,
        color: '#FFF',
        textAlign: 'center',
    },
});

export default ({onPress}: {onPress: () => *}) => (
    <TouchableOpacity
        hitSlop={HIT_SLOP}
        style={styles.closeButton}
        onPress={onPress}
    >
        <Text style={styles.closeButton__text}>×</Text>
    </TouchableOpacity>
);
