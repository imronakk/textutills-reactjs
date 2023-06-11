import React from 'react'

function Alert(prop) {
    const capitalize = (word) =>{
        const Lower = word.toLowerCase();
        return Lower.charAt(0).toUpperCase() + Lower.slice(1)
    }
  return (
    <div style={{height:'55px'}}>
    {prop.alert && 
        <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize( prop.alert.type )}</strong>: {prop.alert.message}
        </div>}
    </div>
    
  )
}

export default Alert