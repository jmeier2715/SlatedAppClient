import React, { useEffect, useState } from 'react'

const Home = (props) => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)

	//translation submission states
	const [newQ, setNewQ] = useState({
		q: ""
	})
	// console.log(newQ)
	const [newSource, setNewSource] = useState({
		source: "en"
	})
	// console.log(newSource)
	const [newTarget, setNewTarget] = useState({
		target: "en"
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
			source:e.target.value
		})
		// console.log (newSource)
	}
	const handleTargetChange = (e) => {
		setNewTarget( {
			target:e.target.value
		})
		// console.log (newTarget)
	}
	
	const translate = (e) =>{
		e.preventDefault()
		fetch("https://translate.argosopentech.com/translate", {
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
			setTranslation({
				response: JSON.stringify(jsonData.translatedText)
			})
		})
		.catch((error)=>{
			console.log('error!', error)
		})
	}

	return (
		<div>
			
			<form onSubmit={translate}>
				<input type='text' placeholder="Enter Text Here" onChange={handleQChange}></input>
				<select id="source" name="cars" placeholder="Choose Your Language" onChange={handleSourceChange}>
					<option value="en" >English</option>
					<option value="ko" >Korean</option>
					<option value="fr" >French</option>
					<option value="es" >Spanish</option>
				</select>
				<input type='submit'/>
			</form>
			<form>
				<div> {translation.response}</div>
				<select id="cars" name="cars" onChange={handleTargetChange}>
					<option value="en" name="English">English</option>
					<option value="ko" name="Korean">Korean</option>
					<option value="fr" name="French">French</option>
					<option value="es" name="Spanish">Spanish</option>
				</select>
			</form>
		</div>
		
	)
}

export default Home
