import React from 'react'
import axios from 'axios'

const Hotels = () => {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation',
        params: {
          latitude: '40.730610',
          longitude: '-73.935242',
          pageNumber: '1',
          currencyCode: 'USD'
        },
        headers: {
          'x-rapidapi-key': 'd2cf6a2206mshf14de9c14c33773p1ed8fajsnd13451133a4e',
          'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
        }
      };

      const fetchHotels = async() =>{
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
      }
  return (
    <div>Hotels</div>
  )
}

export default Hotels