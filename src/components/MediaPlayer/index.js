import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import { Colors, Images } from '../../common';
import styles from './style';

/**
 * 
 * @param {Object} item - Media data for video, likes and comment etc.
 * @param {Number} index - Index of the media item in the rendered lis. 
 * @param {Number} currentIndex - Current visible media item from the list.
 * @returns 
 */

const MediaPlayer = ({ item, index, currentIndex, isConnected }) => {

    //Likes and Comment button state
    const [mute, setMute] = useState(false);
    const [like, setLike] = useState(item?.isLike || false);
    const [isBuffering, setIsBuffering] = useState(false)
    //Reference for video component 
    const videoRef = useRef(null);

    //Handle the video error and buffer callback
    const onBuffer = buffer => {
        console.log('buffring', buffer);
        setIsBuffering(buffer.isBuffering)
    };
    const onError = error => {
        console.log('error', error);
    };

    const formatLikeCount = (count) => {
        if (count < 1_000) {
            return count.toString(); // Less than 1,000, show the number as is
        } else if (count < 1_000_000) {
            return `${(count / 1_000).toFixed(1).replace(/\.0$/, '')}K`; // Thousands
        } else if (count < 1_000_000_000) {
            return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`; // Millions
        } else {
            return `${(count / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`; // Billions
        }
    }

    return (
        <>
            <View
                style={styles.container}>
                <View
                    style={styles.videoHeaderContainer}>
                    <Text style={styles.titleText}>
                        {'Media'}
                    </Text>
                    <Image source={Images.Camera} resizeMode='contain' style={styles.cameraIcon} />
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setMute(!mute)}
                    style={styles.videoContainer}>
                    <Video
                        videoRef={videoRef}
                        onBuffer={onBuffer}
                        onError={onError}
                        repeat={true}
                        resizeMode="cover"
                        paused={currentIndex == index ? false : true}
                        source={{ uri: item?.urls?.mp4 }}
                        muted={mute}
                        style={styles.videoView}
                    />
                </TouchableOpacity>
                {isBuffering && <ActivityIndicator size={50} />}
                <View style={styles.bottomViewContainer}>
                    <View style={styles.bottomButtonContainer}>
                        <View style={styles.bottomButton}>
                            <TouchableOpacity onPress={() => setLike(!like)} activeOpacity={0.9}>
                                <Image source={Images.Like} style={[styles.buttonIcon, !like && { tintColor: Colors.WHITE }]} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={styles.buttonTitleText}>{formatLikeCount(item?.likes_count)}</Text>
                        </View>
                        <View style={styles.bottomButton}>
                            <TouchableOpacity activeOpacity={0.9}>
                                <Image source={Images.Comment} style={styles.buttonIcon} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={styles.buttonTitleText}>{formatLikeCount(item?.comments_count)}</Text>
                        </View>
                        <View style={styles.menuIconButton}>
                            <TouchableOpacity>
                                <Image source={Images.MenuDots} style={styles.buttonIcon} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {!isConnected &&
                        <View style={styles.noInternetContainer}>
                            <Text style={styles.noInternetText}>{"No internet connection"}</Text>
                        </View>
                    }
                </View>

            </View>
            <SafeAreaView />
        </>
    );
};

export default MediaPlayer;