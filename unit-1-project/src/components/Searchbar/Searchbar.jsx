import {useState} from "react"
import './Searchbar.css'

const sampleData = {
    status: "success",
    data: [
      {
        id: "hotel_001",
        name: "Grand Palms Resort",
        location: {
          city: "Miami",
          country: "USA",
          coordinates: {
            lat: 25.7617,
            lng: -80.1918
          }
        },
        rating: 4.5,
        amenities: ["Free WiFi", "Pool", "Spa", "Gym"],
        price_per_night: 189.99,
        currency: "USD",
        availability: true,
        images: [
          "https://example.com/images/hotel_001_1.jpg",
          "https://example.com/images/hotel_001_2.jpg"
        ],
        reviews: [
          {
            user: "travel_guru21",
            rating: 5,
            comment: "Amazing stay and top-notch service!"
          },
          {
            user: "nomad_joe",
            rating: 4,
            comment: "Great location but room was a bit small."
          }
        ]
      },
      {
        id: "hotel_002",
        name: "Alpine Lodge",
        location: {
          city: "Zermatt",
          country: "Switzerland",
          coordinates: {
            lat: 46.0207,
            lng: 7.7491
          }
        },
        rating: 4.2,
        amenities: ["Ski-in/Ski-out", "Hot Tub", "Restaurant"],
        price_per_night: 240.00,
        currency: "CHF",
        availability: false,
        images: [
          "https://example.com/images/hotel_002_1.jpg"
        ],
        reviews: [
          {
            user: "mountainlover",
            rating: 5,
            comment: "Perfect spot for skiing enthusiasts!"
          }
        ]
      }
    ]
  };

const SearchBar = () => {


    return( 
        <input type="text" id="search-bar" placeholder="Search for a hotel">
        </input>
    )
}

export default SearchBar