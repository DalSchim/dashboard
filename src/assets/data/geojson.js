// init geojson data
export const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [77.5946, 12.9716]
            },
            properties: {
                title: 'Bangalore',
                description: 'Bangalore is the capital of the Indian state of Karnataka'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.8777, 19.0760]
            },
            properties: {
                title: 'Mumbai',
                description: 'Mumbai is the capital of the Indian state of Maharashtra'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [77.1025, 28.7041]
            },
            properties: {
                title: 'Delhi',
                description: 'Delhi is the capital of India'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [80.2707, 13.0827]
            },
            properties: {
                title: 'Chennai',
                description: 'Chennai is the capital of the Indian state of Tamil Nadu'

            }
        }
    ]
}