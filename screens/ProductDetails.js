import React, {useState} from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./productDetails.style";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";



const ProductDetails = ({ navigation }) => {
    const [count, setCount] = useState( 1 );

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30} />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name='heart' size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: "https://www.cielo.co.za/130314-large_default/voiline-armchair.jpg" }}
                style={styles.image} />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Voiline Armchair</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>R8,799</Text>
                    </View>
                </View>
                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <Ionicons key={index} name='star' size={24} color="gold" />
                        ))}
                        <Text style={styles.ratingText}>  (4.9)</Text>
                    </View>
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => decrement()}>
                            <SimpleLineIcons name= 'minus' size={20} />
                        </TouchableOpacity>
                        <Text style={styles.ratingText}> {count} </Text>

                        <TouchableOpacity onPress={() => increment()}>
                            <SimpleLineIcons name='plus' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default ProductDetails