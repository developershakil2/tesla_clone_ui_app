import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 80,
        zIndex: 100,
        position: 'absolute',
        top: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    log: {
        width: 100,
        height: 30,
        resizeMode: 'contain'
    }, menu: {
        width: 30,
        height: 30,

    },



})

export default styles;