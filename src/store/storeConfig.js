import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    numeros: function(state, action) {

        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            default:
                return {
                    min: 10,
                    max: 30
                }
        }
        console.log('Reducer de Numeros....')
        console.log(state, ' ', action )
    },
    nomes: function(state, action) {
        console.log('Reducer de Nomes....')
        console.log(state, ' ', action)
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