import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../../constants/index";


const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcomeTxt:{
        fontSize: SIZES.xxLarge -5,
        fontWeight:"bold",
        marginTop: SIZES.xSmall,
        marginHorizontal:12
    },
    welcomeText: (color) => ({
        fontWeight: "bold",
        fontSize: SIZES.xxLarge -5,
        marginTop: SIZES.xSmall,
        color: color,
        marginHorizontal:12
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray
    },
    searchWrapper:{
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontWeight: "bold",
        // width: "100%",
        // height: "100%",
        paddingHorizontal: SIZES.small
    }
})

export default styles