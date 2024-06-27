import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RestaurantCard from '../../components/RestarentCard/RestaurantCard';

const Favorite = () => {
  const { auth, restaurant } = useSelector(store => store);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

  useEffect(() => {
    // Filter restaurant data based on ids present in auth.favorites
    const filteredRestaurants = auth.favorites.map(favItem => {
      return restaurant.restaurants.find(restItem => restItem._id === favItem._id);
    }).filter(Boolean); // Filter out any undefined values

    setFavoriteRestaurants(filteredRestaurants);
  }, [auth, restaurant]);

  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap justify-center'>
        {favoriteRestaurants.map(item => <RestaurantCard key={item._id} data={item} />)}
      </div>
    </div>
  )
}

export default Favorite;
