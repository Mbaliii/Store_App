import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "./welcome.style";
import { COLORS } from "../../constants";
import { Feather } from "@expo/vector-icons";

const Welcome = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeTxt}>{" "}Find The Most</Text>
                <Text style={styles.welcomeText(COLORS.primary, 0)}>{" "}Luxurious Furniture</Text>
            </View>
            <View style={styles.searchContainer}>

                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon}></Feather>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.searchInput} value="" onPressIn={()=>{}}
                    placeholder="What are you looking for?"/>
                </View>
            </View>
        </View>
    )
};

export default Welcome;