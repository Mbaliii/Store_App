import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: "https://www.cielo.co.za/138590-large_default/ashford-pedestal.jpg" }}
                        style={styles.image} />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Ashford Pedestal</Text>
                    <Text style={styles.supplier} numberOfLines={1}>Cielo</Text>
                    <Text style={styles.price}>R4,299</Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name="add-circle" size={20} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView