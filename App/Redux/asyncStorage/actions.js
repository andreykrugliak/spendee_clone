
export function setCurrentTransactionToStorage(data) {
  return dispatch => {
    dispatch({type: 'SAVE_TRANSACTION', payload: data})
  }
}
