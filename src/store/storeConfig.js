import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    numeros: function(state, action) {
        console.log(state, ' ', action )
        return {
            min: 5,
            max: 25
        }
    },
    nomes: function(state, action) {
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }

})


function storeConfig(){
    return createStore(reducers)
}


export default storeConfig