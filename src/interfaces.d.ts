export interface Position {
	latitude: number;
	longitude: number;
}

export interface Data {
	stopLocationOrCoordLocation: StopLocation[]
}
export interface StopLocation {
	StopLocation: {
		dist: number;   // distance from (lat,lon) in meters
		extId: string;
		name: string;
	}
}

// Detta är ett alias, inget interface
export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>
