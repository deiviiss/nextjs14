import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import counterSlice from './counter/CounterSlice'
// import { localStorageMiddleware } from './middlewares/localstorage-middleware'
import pokemonsFavorites from './pokemons/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonsFavorites
  }
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware as Middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
