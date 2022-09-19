
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';

const Btn = (props) => {
    const { type, content, onPress, exc } = props;
    const types = type == 'primary' ? "black" : "red";
    const contents = content == 'reg' ? "Custom Order" : "Existing Inventory";

    return (
        <View style={styles.btn_wraper}>
            <Pressable style={[styles.order_btn, { backgroundColor: types }]}
                onPress={() => onPress()}
            >
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: "600" }}>{exc ? exc : contents}</Text>
            </Pressable>

        </View>
    )
}

export default Btn;