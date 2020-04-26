// Action Types

export const SUBMIT_FIELD = "STOCKTWEETS.SUBMIT_FIELD";

// Initial State 

export const INITIAL_STATE = {
  stocks: {}
};


// Reducer

export function reducer(state = INITIAL_STATE, action) {
  
  switch(action.type) {

    case SUBMIT_FIELD: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}


// Action Creators

export function submitField({ stockName }) {
  return { type: SUBMIT_FIELD, stockName };
}
