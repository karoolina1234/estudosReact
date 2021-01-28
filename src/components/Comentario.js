import React from 'react'
import { formatRelative } from 'date-fns'  //Usado para formatar datas
import {ptBR} from 'date-fns/locale'
import './geral.css'
import srcImg from './user.png'
function Comentario(props){
    
    return(
        <div className="comentarios container">
            <img src={srcImg} height="50" className="my-2 image-responsive"/>
             <h2>{props.name}</h2>
            <p>{props.mensagem}</p>
            <p>{props.email} - {formatRelative(props.data, new Date(),{locale:ptBR} )}</p>   
            {/* recebe a data do props e formata usando a data atual */}
           <button  onClick={props.onRemove} className="btn btn-remover my-3">x</button>
        </div>
    )
}
export default Comentario;