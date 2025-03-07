import {configureStore} from '@reduxjs/toolkit'
import cartSystem from './slice/cartSystem';

import todoReducer from './slice/pro'

export const store =configureStore({
    reducer:{
        todo:todoReducer,
        cart:cartSystem,
    },
});