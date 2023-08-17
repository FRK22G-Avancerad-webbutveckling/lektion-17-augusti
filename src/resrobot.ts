import { Data, ReactSetState } from './interfaces.d'

async function fetchStops(lat: number, lon: number, setResult: ReactSetState<Data | null>) {
	const url = `https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${lat}&originCoordLong=${lon}&format=json&accessId=${import.meta.env.VITE_RESROBOT_API_KEY}`
	// Om något går fel: console.logga URL:EN
	try {
		const response = await fetch(url)
		const data: Data = await response.json()
		console.log('Data från ResRobot:', data);
		setResult(data)
	} catch (error) {
		// TODO: ge feedback till användaren
		console.log('Något gick fel i API:et ', error);
	}
}

export { fetchStops }
