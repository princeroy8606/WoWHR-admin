import React from 'react'
import { APIProvider, InfoWindow, Map, Marker } from '@vis.gl/react-google-maps';
import { Axios } from 'axios'

const Mapview = () => {

    const getImage = (place) => {
        const getPlaceID = async () => {
            const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyC1CUXycgDm8pNNly6tPYoSfYR9tRA3cgA"`;

            try {
                const response = await fetch(apiUrl, { mode: 'no-cors' })
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching place data:', error);
            }
        };
        getPlaceID()
    }
    getImage('chennai')
    return (
        <APIProvider apiKey={'AIzaSyC1CUXycgDm8pNNly6tPYoSfYR9tRA3cgA'}>
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 17.4065, lng: 78.4772 }}
                defaultZoom={7}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            />
            <Marker position={{ lat: 13.0843, lng: 80.2705 }} />
            <Marker position={{ lat: 17.4065, lng: 78.4772 }} />
            <Marker position={{ lat: 12.9716, lng: 77.5946 }} />
            <InfoWindow position={{ lat: 13.0843, lng: 80.2705 }} headerContent={<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chennai_Central.jpg/375px-Chennai_Central.jpg' alt='pic' className='w-full object-cover h-[4rem]' />} className='m-0 p-0'>
                <div className='w-[10rem]'>

                    <h1 className='font-bold mt-2'>Chennai</h1 >
                    <p className='text-gray-700 mt-1'>
                        Chennai is the capital of Tamil Nadu, India.
                    </p>
                </div>
            </InfoWindow>
            <InfoWindow position={{ lat: 17.4065, lng: 78.4772 }} headerContent={<img src='https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68047-Hyderabad-And-Vicinity.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh' alt='pic' className='w-full object-cover h-[4rem]' />} className='m-0 p-0'>
                <div className='w-[10rem]'>

                    <h1 className='font-bold mt-2'>Hyderabad</h1 >
                    <p className='text-gray-700 mt-1'>
                        Hyderabad is the capital and largest city of the Indian state of Telangana
                    </p>
                </div>
            </InfoWindow>
            <InfoWindow position={{ lat: 12.9716, lng: 77.5946 }} headerContent={<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/UB_CITY_Skyline.jpg/432px-UB_CITY_Skyline.jpg' alt='pic' className='w-full object-cover h-[4rem]' />} className='m-0 p-0'>
                <div className='w-[10rem]'>

                    <h1 className='font-bold mt-2'>Bengaluru</h1 >
                    <p className='text-gray-700 mt-1'>
                        Bengaluru is the capital and largest city of the southern Indian state of Karnataka.
                    </p>
                </div>
            </InfoWindow>
        </APIProvider>
    )
}

export default Mapview