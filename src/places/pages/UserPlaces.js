import React from 'react'
import PlaceList from '../components/PlaceList'

function UserPlaces() {

    const DUMMY_PLACES =[
        {
            id : 'p1',
            title : 'Thanjai Periya Kovil',
            description : 'The temple has a massive colonnaded prakara (corridor) and one of the largest Shiva lingas in India',
            imageUrl : 'https://mytravaly.com/admin/mt-blog/images/resize/1350x300x100/Blog_2021030525a9ca951b504165b5d8ce97bbbe1c8a.png',
            address : 'Q4MJ+2FC, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613007',
            locations : {
                lat: 10.7850,
                lng: 79.1334
            },
            creatorId: 'u1'
        },
        {
            id : 'p2',
            title : 'Thanjai Periya Kovil',
            description : 'The temple has a massive colonnaded prakara (corridor) and one of the largest Shiva lingas in India',
            imageUrl : 'https://www.unboxstory.com/wp-content/uploads/2017/04/big-temple.jpg',
            address : 'Q4MJ+2FC, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613007',
            locations : {
                lat: 10.7850,
                lng: 79.1334
            },
            creatorId: 'u2'
        }
    ]

  return (
    <PlaceList items={DUMMY_PLACES}/>
 )
}

export default UserPlaces