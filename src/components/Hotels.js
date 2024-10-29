import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Hotels = ({coords}) => {
    const [hotels, setHotels] = useState([])
    const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates',
        params: {
          latitude: coords.lat,
          longitude: coords.lng,
          adults: '1',
          children_age: '0,17',
          room_qty: '1',
          units: 'metric',
          page_number: '1',
          temperature_unit: 'c',
          languagecode: 'en-us',
          currency_code: 'EUR',
          arrival_date:'2024-12-20',
          departure_date:'2025-02-10'
        },
        headers: {
          'x-rapidapi-key': 'd2cf6a2206mshf14de9c14c33773p1ed8fajsnd13451133a4e',
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
        }
      };
      

      const fetchHotels = async() =>{
        try {
            const response = await axios.request(options);
            const {data} = response.data
            setHotels(data?.result)
            console.log(data)
        } catch (error) {
            console.error(error);
        }
      }
      
      useEffect(()=>{
fetchHotels()
      },[coords])

  return (
    <div>Hotels</div>
  )
}

export default Hotels