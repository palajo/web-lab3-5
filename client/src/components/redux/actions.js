export function getAnimal() {  
    return dispatch => {  
        return dispatch({  
            type: 'GET_ANIMAL'  
        });  
    }  
};  
  
export function addAnimal(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'ADD_ANIMAL',  
            payload: data  
        });  
    }  
};  
  
export function editAnimal(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'EDIT_ANIMAL',  
            payload: data  
        });  
    }  
};  
  
export function deleteAnimal(animalId) {  
    return dispatch => {  
        return dispatch({  
            type: 'DELETE_ANIMAL',  
            payload: animalId  
        });  
    }  
}; 
