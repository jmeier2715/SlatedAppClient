const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div>
			
			<form>
				<input type='text' placeholder="Enter Text Here"></input>
				<select id="cars" name="cars" placeholder="Choose Your Language">
				
					<option value="en">English</option>
					<option value="ko">Korean</option>
					<option value="fr">French</option>
					<option value="ch">Chinese</option>
				</select>
			</form>
			<form>
				<input type='text' placeholder= "Your Translation"></input>
				<select id="cars" name="cars">
					<option value="en">English</option>
					<option value="ko">Korean</option>
					<option value="fr">French</option>
					<option value="ch">Chinese</option>
				</select>
			</form>
		</div>
		
	)
}

export default Home
