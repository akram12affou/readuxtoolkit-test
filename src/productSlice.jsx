import { createSlice, prepareAutoBatched } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
    products : []
}
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers :{ 
      addproduct:{
        reducer : (state , action) => {
        state.products.push(action.payload)
      },
      prepare: (name) => {
        return({payload : {id:nanoid(),name:name} })
      }
      
    },
}
})
export const {addproduct} = productSlice.actions
export default productSlice.reducer
export const SelectAllProducts = (state) => state.products
