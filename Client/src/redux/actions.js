import axios from "axios";

// export function addFav(character) {
//     return {type: 'ADD_FAV', payload: character}
// }

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    const headers = {
        'Content-Type': 'application/json'
    };
    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, character, { headers })
            const data = await response.data

            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });

        } catch (error) {
            console.log('Here is the fail')
            console.log(error.message)
            console.log(error.response.status)

        }
    };
};


// export function removeFav(id) {
//     return {type: 'REMOVE_FAV', payload: id}
// }

// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint)
//        .then(({ data }) => {
//           return dispatch({
//              type: 'REMOVE_FAV',
//              payload: data,
//        });
//        });
//     };
//  };

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const response = await axios.delete(endpoint)
            const data = response.data

            return dispatch({
                type: 'REMOVE_FAV',
                payload: data
            })

        } catch (error) {
            console.log(error)

        }
    }
}


export function filterCards(gender) {
    return {
        type: 'FILTER',
        payload: gender
    }
}



export function orderCards(orden) {
    return {
        type: 'ORDER',
        payload: orden
    }
}

export function resetFilters() {
    return {
        type: 'RESET'
    }
}

export function logOut() {
    return {
        type: 'LOGOUT'
    }
}