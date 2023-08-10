import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS, SIZES } from "../../constants";

const Carousel = () => {
    const slides = [
        "https://www.rochester.co.za/media/catalog/product/cache/2bc2f148dc23cafaa22d929dc6e18cfe/b/i/bistro_table_chairs_1_22c6.jpg",
        "https://www.rochester.co.za/media/catalog/product/cache/2bc2f148dc23cafaa22d929dc6e18cfe/k/n/knight_dining_suite_2cmyk_1_.jpg",
        "https://www.cielo.co.za/137522-large_default/olin-pe-rattan-hanging-chair.jpg",
        "https://www.cielo.co.za/61899-large_default/sorrento-patio-swing.jpg",
        "https://www.cielo.co.za/137537-large_default/shani-hanging-chair.jpg"
    ]
    return (
        <View styles={styles.carouselContainer}>
            <SliderBox  images={slides} dotColor = {COLORS.primary}
            inactiveDotColor = {COLORS.secondary} ImageComponentStyle = {{
                borderRadius: 15, width: "93%", marginTop: 15}}
                autoplay circleLoop
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }

})