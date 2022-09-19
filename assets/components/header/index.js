import { View, Text, Image } from 'react-native';
import styles from './style'

const Header = () => {
    return (
        <View style={styles.header}>

            <Image source={require('../images/logo.png')} style={styles.log} />
            <Image source={require('../images/menu.png')} style={styles.menu} />


        </View>
    )
}

export default Header;