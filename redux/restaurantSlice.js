import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const restaurantSlice =  createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
        state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state,action) => {
      const index = state.items.findIndex((item)=> item.id === action.payload.id)

      let newBasket = [...state.items];

      if(index >= 0) {
        newBasket.splice(index,1)
      } else {
        console.warn(`${action.payload.id} doesn't exist in basket` )
      }

      state.items = newBasket
    },
  },
})

export const { addToBasket,removeFromBasket } = restaurantSlice.actions

export const selectBasketItems = state => state.basket.items

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price,0)

export const selectBasketItemsWithId = (state,id) => state.basket.items.filter((item => item.id === id))

export default restaurantSlice.reducer