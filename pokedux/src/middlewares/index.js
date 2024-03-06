export const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  return next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured =  [{name: 'eddie'}, ...actionInfo.action.payload];
  const updatedActionInfo = { ...actionInfo, action: { ...actionInfo.action, payload: featured } };
  next(updatedActionInfo);
}

// export const filterPokemon = (store) => (next) => (actionInfo) => {
//   const filtered = actionInfo.action.payload.filter(pokemon => pokemon.name.length < 5);
//   const updatedActionInfo = { ...actionInfo, action: { ...actionInfo.action, payload: filtered } };
//   next(updatedActionInfo);
// }