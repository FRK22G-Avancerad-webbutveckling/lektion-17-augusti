import { useState } from 'react'
import './App.css'

/*
Plan för livekodning:
0. environment variables
1. använd ResRobot API för att hämta information om en plats
2. skriv interface som beskriver datan
3. använda async med Geolocation
*/

interface Data {
	stopLocationOrCoordLocation: StopLocation[]
}
interface StopLocation {
	dist: number;   // distance from (lat,lon) in meters
	extId: string;
	name: string;
}

function App() {
	// Innan vi fetchat är result NULL
	// Sedan implementerar det Data-interfacet
	const [result, setResult] = useState<Data | null>(null)

	// console.log('Api key: ', import.meta.env.VITE_RESROBOT_API_KEY)
	const handleClick = async () => {
		const lat = 57.708895, lon = 11.973479
		const url = `https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${lat}&originCoordLong=${lon}&format=json&accessId=${import.meta.env.VITE_RESROBOT_API_KEY}`
		const response = await fetch(url)
		const data: Data = await response.json()
		console.log('Data från ResRobot:', data);
		setResult(data)
	}

	let stops: null | StopLocation[] = null
	if( result ) {
		stops = result.stopLocationOrCoordLocation
	}

	return (
		<div>
			<header> Demo </header>
			<main>
				<button onClick={handleClick}> Hämta information från ResRobot </button>
				{stops 
				? stops.map
				: (<p> Här kommer hållplatser att visas... </p>)}
			</main>
		</div>
	)
}

/*
Higher order functions:
- forEach - motsvarar en vanlig for-loop
- find
- filter
- map

for( let i=0; i<10; i++ )
*/

export default App
