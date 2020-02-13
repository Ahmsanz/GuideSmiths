const initState = {

    phones: []
  }

  const phonesReducer = (state = initState, action) => {
    switch(action.type){

       case 'GET_PHONES':

        return {
          ...state,
          phones: [...action.phones]


        }

    default:
        console.log("error in the reducer")
  }

  return state;
}


export default phonesReducer
