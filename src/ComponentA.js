import React,{useContext} from 'react'
import { Context } from './Create'

function ComponentA() {
    const{skill,Click2}=useContext(Context)
    // const Click=()=>{
        
    // // }
    console.log(skill);
  return (
      <div>
          <button>Click</button>
          <button onClick={Click2}>Click2</button>
      </div>
  )
}

export default ComponentA