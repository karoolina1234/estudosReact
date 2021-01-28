import React from 'react'
import './geral.css'
function Comentario(props){
    
    return(
        <div className="comentarios">
             <h2>{props.name}</h2>
            <p>{props.mensagem}</p>
            <p>{props.email} - {props.data.toString()}</p> 
           <button  onClick={props.onRemove} className="btn btn-remover my-3">x</button>
        </div>
    )
}
export default Comentario;