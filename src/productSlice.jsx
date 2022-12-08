import { createSlice, prepareAutoBatched } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
const initialState = {
    todos:[{name:'akram'},{name:'yaed'},{name:'yaehd'}],
    coins : [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
export const fetchCoins = createAsyncThunk('', async  ( ) => {
  const response = await axios.get(URL)
  return response.data
})

export const productSlice = createSlice({
    name:"coins",
    initialState,
    reducers:{
      deletetodo(state,action){
        state.todos = state.todos.filter((e) => e.name !== action.payload)
      },
      addtodoo(state,action){
        state.todos = [...state.todos, {name : action.payload}]
      }
    },
    extraReducers(builder) {
      builder
      .addCase(fetchCoins.pending, (state) => {
          state.status = 'loading'
      
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.coins = action.payload
     
      })
      .addCase(fetchCoins.rejected, (state) => {
          state.status = 'failed'
          state.error = true
        
      })
    }
}
)
// export const {addproduct} = productSlice.actions
// export const {deleteproduct} = productSlice.actions
    // deleteproduct (state,action) {
    //      state.products.filter((e) => e.id == action.payload)
    //     }
    // }
export const {deletetodo,addtodoo} = productSlice.actions
export default productSlice.reducer
export const SelectAllTodos = (state) => state.todos
export const SelectAllProducts = (state) => state.coins
export const getPostsStatus = (state) => state.status;
export const getPostsError = (state) => state.error;
     //// Adding date and reactions
          // let min = 1;
          // const loadedCoins = action.payload.map(post => {
          //     post.date = sub(new Date(), { minutes: min++ }).toISOString();
          //     return post;
          // });
          // state.posts = state.coins.concat(loadedCoins)