import { View, Text, FlatList, Dimensions } from 'react-native';
import styles from './style';
import Cardi from './cars';
import CarItem from '../carItem'

const CardList = () => {
    return (
        <View style={styles.card_wrap} >
            <FlatList
                data={Cardi}
                renderItem={({ item }) => <CarItem car={item}
                    showsVerticalScrollIndicator={false}
                    snapToAlignment={"start"}
                    deceletionRate={"fast"}
                    snapToInterval={Dimensions.get('window').height}
                />
                } />
        </View>
    )
}

export default CardList;