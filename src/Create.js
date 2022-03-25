import React,{createContext, useEffect,useState} from 'react'

export const Context=createContext();

function Create(props) {
    let depend=false;
    const[skill,setSkill]=useState([]);
    useEffect(()=>{
        fetch('https://bootcamp-2022.devtest.ge/api/skills').then(response=>{
            return response.json();
        }).then(data=>{
            setSkill(data);
            
        })
    })
 
    
  return (
    <Context.Provider value={skill}>
        {props.children}
    </Context.Provider>
  )
}

export default Create