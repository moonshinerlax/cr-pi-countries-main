/* eslint-disable no-case-declarations */
const initialState = {
    originalCountries:[],
    countries1: [],
    countries2: [],
    pageItems: []
  };
  
  const rootReducer = (state = initialState, action) => {
      switch(action.type){
          
        case "FILL":
        return { ...state, originalCountries: action.payload, countries2: action.payload};
       
        //   case "REMOVE_FAV":
        // return { ...state, myFavorites: action.payload, countries2: action.payload };
          
        case "FILTER":
              const page = action.payload.page
              const continent = action.payload.continent
              const pageSize = 10
              const startIndex = (page - 1) * pageSize;
              const endIndex = page * pageSize;
              const allItems = [...state.originalCountries]
              const filterCountries = [...state.originalCountries].filter((country)=> country.continent === continent)
              const countriesFil = filterCountries.slice(startIndex, endIndex);
              const countriesAll = [...state.originalCountries].slice(startIndex, endIndex);
              if(continent === "" || continent === "All"){
        return {...state, countries1: countriesAll, "pageItems": allItems}
              } else 
        return {...state, countries1: countriesFil, "pageItems": filterCountries}
          
        case "ORDER":
          const ascendingOrderName = [...state.originalCountries].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) return -1;
            return 0;
          });
          const descendingOrderName = [...state.originalCountries].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameB < nameA) return -1;
            return 0;
          });
          const ascendingOrderPop = [...state.originalCountries].sort((a, b) => a.population - b.population);
          const descendingOrderPop = [...state.originalCountries].sort((a, b) => b.population - a.population);
          const defaultList = [...state.countries2]     
              if (action.payload === 'AName'){
                  return{...state, originalCountries: ascendingOrderName}
              } if (action.payload === 'BName'){
                  return {...state, originalCountries: descendingOrderName}
              } if(action.payload === "APop"){
                return{...state, originalCountries: ascendingOrderPop}
              } if(action.payload === "BPop"){
                return{...state, originalCountries: descendingOrderPop}
              } if(action.payload === ""){
                return{...state, originalCountries: defaultList}
              } else {return {...state}}
          case "SEARCH":
              return {...state, originalCountries: action.payload}
          default:
              return {...state}
      }
  }
  
  export default rootReducer;