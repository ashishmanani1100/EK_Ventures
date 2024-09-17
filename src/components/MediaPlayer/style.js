import { Platform, StyleSheet } from "react-native";
import { Colors, Constants } from "../../common";

const styles = StyleSheet.create({
    container: {
        width: Constants.SCREEN_WIDTH,
        height: Constants.SCREEN_HEIGHT - Constants.BOTTOM_BAR_HEIGHT,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLACK
    },
    videoHeaderContainer: {
        position: 'absolute',
        top: Platform.OS == 'ios' ? 50 : 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 23,
        fontWeight: '600',
        color: 'white'
    },
    cameraIcon: {
        width: 27,
        height: 16
    },
    videoContainer: {
        width: '100%',
        height: Constants.SCREEN_HEIGHT - Constants.BOTTOM_BAR_HEIGHT,
        position: 'absolute',
    },
    videoView: {
        width: '100%',
        height: Constants.SCREEN_HEIGHT - Constants.BOTTOM_BAR_HEIGHT,
        position: 'absolute',
    },
    bottomViewContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        alignItems: 'flex-end'
    },
    bottomButtonContainer: {
        bottom: 10,
        right: 10,
        gap: 15
    },
    bottomButton: {
        alignItems: 'center',
    },
    buttonIcon: {
        width: 26,
        height: 22,
    },
    buttonTitleText: {
        color: Colors.WHITE,
        fontWeight: '600',
        lineHeight: 16,
        marginTop: 2
    },
    menuIconButton: {
        alignItems: 'center'
    },
    noInternetContainer: {
        backgroundColor: Colors.BLACK,
        width: Constants.SCREEN_WIDTH,
        alignItems: 'center'
    },
    noInternetText: {
        color: Colors.WHITE,
        paddingVertical: 5
    }
})

export default styles