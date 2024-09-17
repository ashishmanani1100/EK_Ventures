import { StyleSheet } from "react-native";
import { Colors, Constants } from "../../common";

export default styles = StyleSheet.create({
    container: {
        width: Constants.SCREEN_WIDTH,
        height: Constants.SCREEN_HEIGHT - Constants.BOTTOM_BAR_HEIGHT,
        backgroundColor: Colors.BLACK,
        position: 'relative',
    },
    connectionText: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: '600'
    },
    checkConnectionBtn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        marginTop: 10,
        borderRadius: 5
    }
})