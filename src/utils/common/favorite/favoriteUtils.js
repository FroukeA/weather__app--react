// data

// functions

// components

// variables
// let id = 0;
let tempState = null;

export function handleClickFavorite() {
  console.log('click Favorite', tempState)
}

export function handleReceiveState(state) {
  console.log('here favorite', state);

  tempState = state;
}