import React, { useEffect, useState } from 'react'
import user from '../App.js'
import AddCollection from './AddCollection.js'




const Home = (props) => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)
	// console.log(props.user._id)
	//translation submission states
	const [newQ, setNewQ] = useState({
		q: ""
	})
	// console.log(newQ)
	const [newSource, setNewSource] = useState({
		source: "en",
		sourceLanguage:"en"
	})
	// console.log(newSource)
	const [newTarget, setNewTarget] = useState({
		target: "en",
		targetLanguage: "en"

	})
	// console.log(newTarget)
	const[translation, setTranslation] = useState({
		response: ""
	})

	// //Change Handlers
	const handleQChange = (e) => {
		setNewQ( {
			q:e.target.value
		})
		// console.log(newQ)
	}
	const handleSourceChange = (e) => {
		setNewSource( {
			source:e.target.value,
			sourceLanguage: e.target.value
		})
		// console.log (newSource)
	}
	const handleTargetChange = (e) => {
		setNewTarget( {
			target:e.target.value,
			targetLanguage: e.target.value
		})
		console.log (newTarget.targetLanguage)
	}
	const saveTranslation = (e) =>{
		e.preventDefault()
		fetch('http://localhost:8000/translations',
		{
			method:"POST",
			headers:{
				"Content-Type": "application/json",
                "Authorization": `Bearer ${props.user.token}`
			},
			body:JSON.stringify({
				translation:{
					rootText: newQ.q,
					rootLanguage: newSource.sourceLanguage,
					targetText: translation.response,
					targetLanguage: newTarget.targetLanguage,
					owner: props.user._id
				}
			})
		})
		.catch((error)=>{
			console.log("oh..you fucked up lmao", error)
		})
	}

	
	//to show the button that saves translations and adds it to collections
	const authenticatedOptions =(
		<>
		<button class= 'submit' onClick = {saveTranslation} >Add Translation</button>
		</>
	)
	const unauthenticatedOptions=(
		<>
		</>
	)
	
	const translate = (e) =>{
		e.preventDefault()
		fetch("https://trans.zillyhuhn.com/translate", {
			method: "POST",
			body: JSON.stringify({
				q: newQ.q,
				source: newSource.source,
				target: newTarget.target,
			}),
			headers: { "Content-Type": "application/json" }
		})
		.then((responseData)=>{
			return responseData.json()
		})
		.then((jsonData)=>{
			console.log('response')
			setTranslation({
				response: JSON.stringify(jsonData.translatedText)
			})
		})
		.catch((error)=>{
			console.log('error!', error)
		})
	}
	
	
	// getAllTranslations()
	
	return (
		<div class='body'>
			<div class='text'>
			<textarea class='input' type='text' placeholder="Enter Text Here" onChange={handleQChange}></textarea>
			<div class='output'> {translation.response}</div>
			</div>

			<div class= 'selection'>
			<form > Origin Language:
				<select class='dropdown' onChange={handleSourceChange}>
					<option value="en" id="English">English</option>
					<option value="ko" id="Korean" >Korean</option>
					<option value="fr" id="French">French</option>
					<option value="es" id="Spanish">Spanish</option>
					<option value="ru" id="Russian">Russian</option>
					<option value="de" id="German">German</option>
				</select>
				
			</form>
			<form onSubmit={translate}> Translation Language:
				<select class='dropdown' onChange={handleTargetChange}>
					<option value="en" >English</option>
					<option value="ko" >Korean</option>
					<option value="fr" >French</option>
					<option value="es" >Spanish</option>
					<option value="ru" >Russian</option>
					<option value="de" id="German">German</option>
				</select>
				<input class= 'transSubmit' type='submit'/>
			</form>
			
			{props.user == null ? unauthenticatedOptions : authenticatedOptions}
			</div>
			
			{/* <AddCollection user={props.user}/> */}
		</div>
		
	)
}

export default Home
