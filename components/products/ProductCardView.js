import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./productCardView.style";

const ProductCardView = () => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView