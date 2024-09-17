import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwiperFlatList from 'react-native-swiper-flatlist';
import NetInfo from '@react-native-community/netinfo';

import styles from './styles';
import MediaPlayer from '../../components/MediaPlayer';
import { getMedias } from '../../redux/actions/mediaAction';
import { Colors, Constants } from '../../common';

const ReelsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cacheVideo, setCacheVideo] = useState([]);
    const [isVideoAvailable, setIsVideoAvailable] = useState(true)
    const [isConnected, setIsConnected] = useState(false);
    const [, setRender] = useState({});

    const videos = useSelector(state => state.media.videos);
    const isLoading = useSelector(state => state.media.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetching Medias from the api
        if (isConnected) {
            dispatch(getMedias());
        }
        setRender({})
    }, [isConnected])


    useEffect(() => {
        async function getMedias() {
            if (isConnected) {
                getVideoFiles(videos[0]);
            } else {
                const data = await AsyncStorage.getItem("video");
                if (data) {
                    setCacheVideo([JSON.parse(data)]);
                } else {
                    setIsVideoAvailable(false);
                }
            }
            // Check intrnet connectuiojn
            // NO -> chache -> Async -> setCache
        }
        getMedias()
    }, [isConnected]);


    useEffect(() => {
        NetInfo.fetch().then((state) => {
            setIsConnected(state.isConnected);
        });

        NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });
    }, []);

    const onCheckConnectivity = () => {
        NetInfo.fetch().then((state) => {
            setIsConnected(state.isConnected);
        });
    }

    const handleChangeIndexValue = ({ index }) => {
        setCurrentIndex(index);
    };

    //sample data of all videos
    let nitems = 1; //items to be cached from videos array

    const getVideoFiles = async (cacheVideoData) => {
        try {
            const data = await AsyncStorage.getItem("video");
            if (data) {
                setCacheVideo([JSON.parse(data)]);
            }
            if (cacheVideo?.length === 0) {
                const { config, fs } = RNFetchBlob;
                let cacheDir = Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.CacheDir;
                let options = {
                    fileCache: true,
                    path: `${cacheDir}/video_${new Date().getTime()}.mp4`,
                    appendExt: "mp4",
                };
                await cacheVideo.push(cacheVideoData);
                config(options)
                    .fetch('GET', cacheVideo[0].urls.mp4)
                    .then(async (re) => {
                        // Remove existing video from cache
                        const data = await AsyncStorage.getItem("video");
                        if (data) {
                            fs.unlink(JSON.parse(data).urls.mp4);
                            // check file is deleted or not
                        }
                        cacheVideo[0].urls.mp4 = re.data;
                        nitems === 1
                            ? AsyncStorage.setItem("video", JSON.stringify(cacheVideo[0]))
                            : null;
                    });
            }
        } catch (error) {
            console.log('error:', error)
        }
    }
    const ListEmptyComponent = () => {
        return (
            !isLoading ? <View style={{ justifyContent: 'center', alignItems: 'center', height: Constants.SCREEN_HEIGHT }}>
                <SafeAreaView />
                <Text style={styles.connectionText}>Please check your internet Connection</Text>
                <TouchableOpacity onPress={() => onCheckConnectivity()} style={styles.checkConnectionBtn}>
                    <Text style={{ color: Colors.BLACK }}>Reload</Text>
                </TouchableOpacity>
            </View> :
                <></>
        )
    }
    return (
        <View style={styles.container}>
            <SwiperFlatList
                vertical={true}
                onChangeIndex={handleChangeIndexValue}
                data={isConnected
                    ? videos
                    : cacheVideo}
                renderItem={({ item, index }) => <MediaPlayer item={item} index={index} currentIndex={currentIndex} isConnected={isConnected} />}
                ListEmptyComponent={() => <ListEmptyComponent />}
                keyExtractor={(_, index) => index}
            />
        </View>
    );
}

export default ReelsPage;
