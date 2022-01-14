import React, { useEffect, useState } from 'react'
import user from '../App.js'
import AddCollection from './AddCollection.js'

const YourTranslations = (props) =>{

    const [allTranslations, setAllTranslations] = useState([])

	const getAllTranslations = () => {
		fetch("http://localhost:8000/translations")
		.then(response => {
			return response.json()
		})
		.then(foundTranslations =>{
			console.log('these are the droids', foundTranslations.translations)
			
            setAllTranslations (JSON.stringify(foundTranslations.translations))
		})
		.catch(error => console.log(error))

	}
    getAllTranslations()

    console.log('this be it', allTranslations)
    
    return(
        
        <>
        {getAllTranslations}
         {allTranslations}
        </>
       
    )
}

export default YourTranslations