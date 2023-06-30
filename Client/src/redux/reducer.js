
const initialState = {
    myFavorites: [],
    allCharacters: [],
    originalFavorites: [],
}

export default function reducer(state=initialState, action) {
    let allCharacters;

    switch(action.type) {
        case 'ADD_FAV':
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };
        // case 'ADD_FAV':

        //     return {
        //         ...state,
        //         allCharacters: [...state.allCharacters, action.payload],
        //         myFavorites: [...state.myFavorites, action.payload],
        //         originalFavorites: [...state.originalFavorites, action.payload],
        //     }
        // REDUCER | REMOVE_FAV
        case 'REMOVE_FAV':
            return { ...state, 
                myFavorites: action.payload 
            };
        // case 'REMOVE_FAV':
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter(card => card.id !== Number(action.payload)),
        //         originalFavorites: state.originalFavorites.filter(card => card.id !== Number(action.payload))
        //     }
        case 'FILTER':
            return {
                ...state,
                myFavorites: [...state.allCharacters].filter(char => char.gender === action.payload)
            }
        case 'ORDER':
            allCharacters = [...state.allCharacters].sort((a, b) => {
                if (action.payload === 'A') {
                    return a.id > b.id ? 1 : -1
                } else if (action.payload === 'D') {
                    return a.id < b.id ? 1 : -1
                }
                return 0; // add this line to return a value at the end of the arrow function
            });
                return {
                    ...state,
                    allCharacters,
                    myFavorites: [...allCharacters],  // Update myFavorites based on sorted allCharacters
                }

        case 'RESET':
            return {
                ...state,
                myFavorites: [...state.originalFavorites] // copy the original favorites
            }

        case 'LOGOUT':
            return {
                myFavorites: [],
                allCharacters: [],
            }
        
        default:
            return {...state}
    }

}