import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './style';
import Btn from '../buttonCon'

const carItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;
    const [us, setUs] = useState();
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.title_wrap}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.sub_title}>{tagline} {" "}<Text style={{ textDecorationLine: "underline" }}>{taglineCTA}</Text></Text>
            </View>
            <View style={{ position: 'absolute', width: '100%', bottom: 50 }}>
                <Btn type="primary" content="reg" exc={us} onPress={() => setUs("this model car not available out of our stock")} />
                <Btn type="py" content="existing" exc={us} onPress={() => setUs("this model car not available out of our stock")} />
            </View>
        </View>
    )
}


export default carItem;