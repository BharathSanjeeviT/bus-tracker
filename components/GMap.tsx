import { GoogleMap , LoadScript, Marker } from "@react-google-maps/api"
// import usePlacesAutocomplete,{getGeocode} from "use-places-autocomplete"
import Select from 'react-select'


const GMap = () => {

    const[ selected , setSelected ] = useState(null)

    const center = {
        lat: 12.958547,
        lng: 79.141727
    };
    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    };
    return(<>
        <LoadScript googleMapsApiKey="AIzaSyD08U5vKF7h-FjgSMUAJO-6Vx9lbaYku2E" libraries={["places"]}>
            <PlacesAutoComplete setSelected={setSelected} />
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={17}
            >
            <Marker
                position={selected}
                title="A2"
            />
            </GoogleMap>
        </LoadScript>
    </>)
}

const PlacesAutoComplete =  ({setSelected}) => {

    return(<>
        <Select/>
    </>)

}

export default GMap;
