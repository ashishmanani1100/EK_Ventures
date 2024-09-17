import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import styles from './styles'
import { Colors, Images } from '../../common'

const cards = [
    {
        id: 1,
        name: "card1",
        url: Images.CARD1
    },
    {
        id: 2,
        name: "card2",
        url: Images.CARD2
    },
    {
        id: 3,
        name: "card3",
        url: Images.CARD1
    },
]
const Home = () => {

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image source={item.url} resizeMode='contain' style={{ height: 350, width: 200 }} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.headerContainer}>
                <Image style={styles.logo} resizeMode='contain' source={Images.LOGO} />
                <View style={styles.menuContainer}>
                    <Image source={Images.SEARCH} resizeMode='contain' style={styles.menuIcon} />
                    <Image source={Images.MESSAGE} resizeMode='contain' style={styles.menuIcon} />
                    <Image source={Images.NOTIFICATION} resizeMode='contain' style={styles.menuIcon} />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 15 }}>
                    <Text style={styles.title}>Hello John,</Text>
                    <Text style={styles.text}>Please tap below</Text>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleImageContainer}>
                            <Image source={Images.HEART} resizeMode='contain' style={styles.heartImage} />
                        </View>
                        <View>
                            <Text style={styles.frontTitle}>Large front Title</Text>
                            <Text style={styles.subTitle}>Sub-title <Text style={{ fontSize: 10 }}>💎💎💎</Text></Text>
                        </View>
                        <Image source={Images.ARROW_RIGHT} resizeMode='contain' style={styles.rightIcon} />
                    </View>
                </View>
                <View style={styles.border} />
                <View style={{ padding: 15 }}>
                    <View style={styles.mediaContainer}>
                        <Image source={Images.MEDIA_DARK} resizeMode='contain' style={{ height: 20, width: 20 }} />
                        <Text style={styles.mediaText}>Media</Text>
                    </View>
                    <FlatList style={{ marginVertical: 20 }} showsHorizontalScrollIndicator={false} horizontal data={cards} renderItem={renderItem} />
                    <TouchableOpacity style={styles.bottomButton}>
                        <Image source={Images.MEDIA} tintColor={Colors.WHITE} />
                        <Text style={styles.uploadText}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home