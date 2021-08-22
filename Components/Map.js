import { useState } from 'react';
import ReactMapGL, {Marker, Popup}  from 'react-map-gl';
import getCenter  from 'geolib/es/getCenter';
import { StarIcon } from "@heroicons/react/solid";
 

function Map({ serarchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform the Search results object into the
    // {latitude: 52.512325, longitude: 12.377722 } object

    const coordinates = serarchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // The latitude and longitude of the center of location coordinates
     const center =  getCenter(coordinates);

     const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return <ReactMapGL 
    mapStyle="mapbox://styles/nzstarz/cksnfzpl70t7e17nzmpepca39"
    mapboxApiAccessToken={process.env.mapbox_key}

    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {serarchResults.map(result =>(
            <div key={result.long}>
                <Marker
                longitude={result.long}
                latitude={result.lat}
                offsetLeft={-20}
                offsetTop={-10}
                >
                    <p 
                        onClick={() =>setSelectedLocation(result)} 
                        className=" cursor-pointer text-2xl animate-bounce"
                    > 
                        📍 
                    </p>
                </Marker>

                {/* The Popup that show if we click on  Marker */}
                {selectedLocation.long === result.long ? (
                    <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick ={true}
                        latitude={result.lat}
                        longitude={result.long}
                    >
                        <img
                            src={result.img}
                            className="h-full w-full rounded-2xl object-cover"
                            alt=""
                        />
                        <div className="absolute font-semibold max-w-[200px] text-white z-20 bottom-5 left-4">
                            <div>
                                <h3 className="">{result.title}</h3>
                                <h4 className="text-xl">{result.price}</h4>
                            </div>
                            <p className="flex items-center">
                                <StarIcon className="h-6 text-red-400" />
                                {result.star}
                            </p>

                        </div>
                        <span className="w-full absolute bottom-0 z-10 pointer-events-auto p-24 bg-gradient-to-t from-gray-800"></span>
                        
                    </Popup>

                ): (
                    false
                )}
            </div>
        ))}


    </ReactMapGL>
        
    
}

export default Map
