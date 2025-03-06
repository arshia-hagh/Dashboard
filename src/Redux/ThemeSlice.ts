import { createSlice } from "@reduxjs/toolkit"

interface IStateValue{
    theme: boolean
}
const initialState : IStateValue = {
    theme: false
}
export const ThemeSlice = createSlice({
    name: "Theme",
    initialState,
    reducers:{
        darkTheme: (state) => {
            state.theme = true
        },
        lightTheme: (state) => {
            state.theme = false
        }
    }
})
export const { darkTheme,lightTheme} = ThemeSlice.actions
export default ThemeSlice.reducer