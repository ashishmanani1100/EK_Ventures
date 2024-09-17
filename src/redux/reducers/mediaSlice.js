import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    videos: [],
    error: ''
}

const mediaSlice = createSlice({
    name: 'media',
    initialState: initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        getVideosSuccess: (state, action) => {
            state.videos = action.payload
            state.isLoading = false
        },
        getVideosFailed: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export const {
    setLoading,
    getVideosSuccess,
    getVideosFailed
} = mediaSlice.actions

export default mediaSlice.reducer

