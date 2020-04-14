import React from 'react';

const Temp = ({onDataChange}) => {
    return (
        <div>
            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" id="name" name = "name" onChange = {onDataChange}/>
            <input type = 'radio' id = 'Asthama' name = 'disease' value = 'Asthama' onChange ={onDataChange}/><label>Asthama</label><br/><br/>
            <input type = 'radio' id = 'copd' name = 'disease' value = 'copd' onChange = {onDataChange}/><label>Chronic lung disease (COPD)</label>
        </div>
    )
}
export default Temp;