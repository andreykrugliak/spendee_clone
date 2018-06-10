




export function createNewTransaction(trans) {
  return dispatch => {
    dispatch({type: 'CREATE_NEW_TRANSACTION', payload: trans})
  }
}
