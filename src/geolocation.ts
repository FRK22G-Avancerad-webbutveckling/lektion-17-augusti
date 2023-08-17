import { Position } from "./interfaces";

async function getPosition(): Promise<Position> {
	return new Promise((resolve, reject) => {
		if ('geolocation' in navigator) {
			const geo = navigator.geolocation;
			geo.getCurrentPosition(pos => {
				// pos.coords, hämtar en gång
				const position: Position = {
					latitude: pos.coords.latitude,
					longitude: pos.coords.longitude
				}
				resolve(position)
			}, error => {
				reject(error.message)
			})
		} else {
			reject('Please upgrade your browser to use this web app.')
		}
	})


}

export { getPosition }
