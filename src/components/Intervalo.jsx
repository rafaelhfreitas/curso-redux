import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo } from './../store/actions/numeros'


function Intervalo(props) {
    const { min, max} = props
    props.alterarMinimo(500)
    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} readOnly></input>
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max} readOnly></input>
                </span>

            </div>
        </Card>

    )
}

function mapStateToProps(state){
    return {
        min : state.numeros.min,
        max : state.numeros.max,
    }
}

function mapActionCreatorsToProps(dispatch){
    return {
        alterarMinimo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(Intervalo)