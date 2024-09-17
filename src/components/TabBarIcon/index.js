import React from "react";
import { Colors, Images } from "../../common";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * The Custome Bottom Bar Icon Component
 * @param {String} name - Name of the screen/Icon to be displayed.
 * @param {String} color - Color string for icon tint color in bottom tab
 * @param {Number} size - icon size to displayed in the bottom tab navigation
 * @returns 
 */

const TabBarIcon = ({ focused, name, color, size }) => {

    const Icons = {
        "Home": Images.HOME,
        "Media": Images.MEDIA,
        "Games": Images.PROGRAM,
        "Reports": Images.STATS,
        "Account": Images.AVATAR,
    }

    const navigation = useNavigation();

    const getCurrentTabName = () => {
        const state = navigation.getState();
        const currentTabName = state.routes[state.index].name;
        return currentTabName;
    };

    return (
        <View style={{ marginTop: -1, width: '90%' }}>
            <View style={{ borderColor: focused && getCurrentTabName() == 'Media' ? Colors.WHITE : Colors.BLUE, borderTopWidth: focused ? 4 : 0, marginBottom: 5, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }} />
            <Image
                source={focused && getCurrentTabName() == 'Media' ? Images.MEDIA_DARK : Icons[name]}
                style={[{
                    width: size,
                    height: size,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                },
                name != 'Account' &&
                { tintColor: color }]}
            />
        </View>
    )
}

export default TabBarIcon