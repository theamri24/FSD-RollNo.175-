import React from 'react'

function Icard({ data }) {
  return (
    <div className="id-card">
      {data && (
        <>
          {data.pic && <img className="student-photo" src={data.pic} alt={`${data.name} profile`} />}
          {data.name && <h2>Name: {data.name}</h2>}
          {data.roll && <h2>Roll no.: {data.roll}</h2>}
          {data.cse && <h2>Branch: {data.cse}</h2>}
          {data.college && <h2>College: {data.college}</h2>}
        </>
      )}
    </div>
  )
}

export default Icard
