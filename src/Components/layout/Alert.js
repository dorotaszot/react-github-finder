import React from 'react'

const Alert = ( { alert } ) => {
  return (
     alert !== null && (
    <div className={`alert ${alert.type} p-sm my-sm white`}>
      {alert.msg}
    </div>
   
  )
  )}

export default Alert