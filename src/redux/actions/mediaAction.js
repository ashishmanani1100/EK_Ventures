import { Alert } from "react-native"
import { APIService } from "../../services/api"
import { getVideosFailed, getVideosSuccess, setLoading } from "../reducers/mediaSlice"
import { Constants } from "../../common"

export const getMedias = () => {
    try {
        return async (dispatch) => {
            dispatch(setLoading(true))
            const response = await APIService(`videos`, 'get', false)
            if (response.status === 200) {
                dispatch(getVideosSuccess(response.data))
            }
            else {
                dispatch(getVideosFailed(Constants.ERROR_MESSAGE))
            }
        }
    } catch (err) {
        console.log("error in getMedias", err)
        Alert.alert(Constants.APPNAME, Constants.ERROR_MESSAGE)
    }
}