import { configureStore } from '@reduxjs/toolkit'
import mediaSlice from './reducers/mediaSlice';

export default store = configureStore({
    reducer: {
        media: mediaSlice
    },
});