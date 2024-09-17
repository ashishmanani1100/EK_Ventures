import { StyleSheet } from "react-native";
import { Colors } from "../../common";

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 0.2,
        borderColor: 'grey'
    },
    logo: {
        height: 32,
        width: 187
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuIcon: {
        height: 20,
        width: 20,
        marginHorizontal: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        color: Colors.BLACK
    },
    text: {
        marginVertical: 15,
        fontSize: 20,
        fontWeight: '500',
        color: Colors.BLACK
    },
    titleContainer: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F9BA0514',
        borderRadius: 12
    },
    titleImageContainer: {
        backgroundColor: '#34A653',
        height: 60,
        justifyContent: 'center',
        width: 60,
        alignItems: 'center',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },
    heartImage: {
        height: 30,
        width: 30
    },
    frontTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: Colors.BLACK
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5,
        color: Colors.BLACK
    },
    rightIcon: {
        height: 16,
        width: 16
    },
    border: {
        borderBottomWidth: 0.3,
        margin: 20,
        borderColor: 'grey'
    },
    mediaContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mediaText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '600',
        color: Colors.BLACK
    },
    bottomButton: {
        backgroundColor: '#3361BA',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8
    },
    uploadText: {
        marginLeft: 10,
        fontSize: 16,
        color: Colors.WHITE,
        fontWeight: '600'
    }
})