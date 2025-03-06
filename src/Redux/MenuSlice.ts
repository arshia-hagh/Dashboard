import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IStateValue{
    menu: boolean
}
const initialState : IStateValue  ={
    menu: false
}
export const MenuSlice = createSlice({
    name: 'Menu',
    initialState,
    reducers:{
        openMenu: (state,action: PayloadAction<{menu: boolean}>) => {
            state.menu = action.payload.menu
        }
    }
})
export const {openMenu} = MenuSlice.actions
export default MenuSlice.reducer