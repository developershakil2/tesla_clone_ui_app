import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        position: 'absolute'

    },
    carContainer: {
        width: '100%',
        height: Dimensions.get("window").height,
    },
    title_wrap: {
        marginTop: "30%",
        alignItems: "center",
        width: "100%"
    },
    title: {
        fontSize: 40,
        fontWeight: "500",
    },
    sub_title: {
        fontSize: 16,
        color: "#5c5e20"
    }
});

export default styles;