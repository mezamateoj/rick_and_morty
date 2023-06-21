
const initialState = {
    myFavorites: []
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavorites: state.myFavorites.filter(card => card.id !== Number(action.payload))
            }
        default:
            return {...state}
    }

}