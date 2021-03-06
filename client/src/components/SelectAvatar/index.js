import React, {useContext} from 'react';
import './style.css'

function SelectAvatar(props){
  return(
    <img 
      className="SelectAvatar-avatarOption" 
      onClick={()=>props.onClick(props.imgPath)} 
      src={props.imgPath}
      alt={`Select avatar ${props.imgPath.substring(props.imgPath.lastIndexOf('/')+1, props.imgPath.indexOf('.'))}`}
    />
  )
};

export default SelectAvatar;
