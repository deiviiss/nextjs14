import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number
  isReady: boolean
}

const initialState: CounterState = {
  count: 50,
  isReady: false
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  // reducers are functions that take the current state and an action object, and then handle the action by returning a new state, should be pure functions thats means they should not async operations.
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return
      state.count = action.payload
      state.isReady = true
    },
    addOne(state) {
      state.count++
    },
    substractOne(state) {
      if (state.count === 0) return
      state.count--
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) {
        action.payload = 0
      }
      state.count = action.payload
    }
  }
})

export const { addOne, substractOne, resetCount, initCounterState } = CounterSlice.actions

export default CounterSlice.reducer
