import React from 'react'
import './Button.css'

export default props => {
    let styleClass = 'button '
    styleClass += props.operation ? 'operation' : ''
    styleClass += props.double ? 'double' : ''
    styleClass += props.triple ? 'triple' : ''

    return(
        <button onClick={e => props.click && props.click(props.label)} className={styleClass}>
            {props.label}
        </button>
    )
}