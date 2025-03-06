import { configureStore} from '@reduxjs/toolkit';
import  ThemeSlice  from './ThemeSlice';
import MenuSlice from './MenuSlice';
export const store = configureStore({
    reducer:{
        Theme: ThemeSlice,
        Menu: MenuSlice
    }
})
export type RooteStore = ReturnType<typeof store.getState>
export type AppDispath = ReturnType<typeof store.dispatch>