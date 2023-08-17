import { useState } from 'react'
import './App.css'
import { Data, StopLocation } from './interfaces.d'
import { fetchStops } from './resrobot'

/*
Plan för livekodning:
1. environment variables
2. använd ResRobot API för att hämta information om en plats
3. skriv interface som beskriver datan
4. presentera resultatet - mappa objekt[] -> JSX[]
5. refaktorera koden - flera filer
6. använda async med Geolocation
*/



function App() {
	// Innan vi fetchat är result NULL
	// Sedan implementerar det Data-interfacet
	const [result, setResult] = useState<Data | null>(null)

	// console.log('Api key: ', import.meta.env.VITE_RESROBOT_API_KEY)
	const handleClick = async () => {
		const lat = 57.708895, lon = 11.973479
		fetchStops(lat, lon, setResult)
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
				? <ul> {stops.map(stop => (
					<li key={stop.StopLocation.extId}> {stop.StopLocation.name} ({stop.StopLocation.dist} meter) </li>
				))} </ul>
				: (<p> Här kommer hållplatser att visas... </p>)}
			</main>
		</div>
	)
}

/*
const reality = {
	StopLocation: {
		name: 'exempel',
		dist: 123
	}
}
const wish = {
	name: 'exempel',
	dist: 123
}*/
/*
Higher order functions:
- forEach - motsvarar en vanlig for-loop
- find
- filter
- map

for( let i=0; i<10; i++ )
*/

export default App
