import { type Action, type Dispatch, type MiddlewareAPI } from '@reduxjs/toolkit'

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action)

    if (action.type === 'pokemonsFavorites/toggleFavorite') {
      // eslint-disable-next-line no-console
      console.log('state', state.getState)
    }
  }
}
