import React, { useEffect, useState } from 'react'
import user from '../App.js'
import AddCollection from './AddCollection.js'

const YourTranslations = (props) =>{

    useEffect(() => {
        props.getAllTranslations()
    
    },[])
    
   //add button set value = y._id
   //add onclick w delete rooute
   //string interpolate into the params
   //
    // props.getAllTranslations()
    console.log(props.allTranslations)
    let y = props.allTranslations
    let yMap = y.map((object)=>{
        return(
        <div class= 'ymap'>
        <p >{object.rootText}</p>
        <p>{object.targetText}</p>    
        </div>
        )
    })
    
    console.log('this is y', y)
  
    
    return(
        
      <div class="yBody">
           {yMap}
      </div>

       
    )
}

export default YourTranslations