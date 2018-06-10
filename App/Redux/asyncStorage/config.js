import { AsyncStorage } from 'react-native';
import { initialState } from './reducer';

export const loadState = () => {
  return new Promise((resolve, reject) => {
    try {
      AsyncStorage.getItem('localList').then(data => {
        if(data){
          resolve({
            localData: JSON.parse(data)
          });
        } else {
          resolve({
            localData: initialState
          });
        }
      }, err => {
        resolve({
          localData: initialState
        });
      });

    } catch (err) {
      resolve({
        localData: initialState
      });
    }
  });

};
