import React from 'react'
import Dashboard from '../dashboard/Dashboard'

function DashboardElem({exp}) {


  return (
  
    <div className="card d-inline-flex " style={{"width": "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{exp.kind}</h5>
      <p className="card-text">{exp.amount}</p>
      <p className="card-text">{exp.time}</p>
      
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
  )
}

export default DashboardElem
