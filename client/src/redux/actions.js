/* eslint-disable no-unused-vars */
import axios from "axios"

export const fillList = () => {
    return async (dispatch) => {
      try {
        const {data} = await axios(`http://localhost:3001/countries`);  
        dispatch({
          type: 'FILL',
          payload: data,
        });
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
  };
  
export const filter = (page, continent) =>{
    return async (dispatch) => {
        try {
          const {data} = await axios(`http://localhost:3001/countries`)
          dispatch({
            type: 'FILTER',
            payload: {continent:continent, page: page}
          });
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
}

export const order = (ord) => {
    return (dispatch) => {
      dispatch({
        type: 'ORDER',
        payload: ord
      });
    };
  }

  export const search = (name) =>{
    return async (dispatch) => {
      try {
        const {data} = await axios(`http://localhost:3001/countries/name?name=${name}`);  
        dispatch({
          type: 'SEARCH',
          payload: data,
        });
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
  }