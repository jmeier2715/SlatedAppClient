import React, { useEffect, useState } from 'react'
import user from '../App.js'
import AddCollection from './AddCollection.js'

const YourTranslations = (props) =>{
    const test = ()=>{
        props.testTranslations.map ((object)=>{
            console.log('this works')    
            return (<p>{object.rootText}</p> )
            })
    }  

    useEffect(() => {
        props.getAllTranslations()
        test()
    },[])
    
   

    // props.getAllTranslations()
    console.log(props.allTranslations)
    let y = props.allTranslations
    let yMap = y.map((object)=>{
        return(<p>{object.rootText}</p>)
    })
    
    console.log('this is y', y)
  
    
    return(
        
        <>
         {yMap}
        </>
       
    )
}

export default YourTranslations