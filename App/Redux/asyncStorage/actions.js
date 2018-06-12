
export function setCurrentTransactionToStorage(data) {
  return dispatch => {
    dispatch({type: 'SAVE_TRANSACTION', payload: data})
  }
}
export function delCurrentTransactionFromStorage(data) {
  return dispatch => {
    dispatch({type: 'DELETE_TRANSACTION', payload: data})
  }
}
export function setNewCategoryExpToStorage(data) {
  return dispatch => {
    dispatch({type: 'NEW_CATEGORY_EXP', payload: data})
  }
}
export function setNewCategoryIncToStorage(data) {
  return dispatch => {
    dispatch({type: 'NEW_CATEGORY_INC', payload: data})
  }
}
