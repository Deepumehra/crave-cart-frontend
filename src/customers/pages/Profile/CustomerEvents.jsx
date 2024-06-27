import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from '../../../Admin/Events/EventCard';
import { getAllEvents } from '../../../State/Customers/Restaurant/restaurant.action';

const CustomerEvents = () => {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
 
  const {restaurant,auth}=useSelector(store=>store);

  useEffect(()=>{
    dispatch(getAllEvents({jwt}))
  },[auth.jwt])
  return (
    <div className="mt-5 px-5 flex-col flex-wrap gap-5">
    <h1 className=" lg:text-2xl font-bold z-10 py-5 py-10 sm: text-2xl text-center">All Restuarant Events</h1>
    {restaurant.events.map((item)=> <div>
      <EventCard isCustomer={true} item={item}/>
    </div>)}
   
  </div>
  )
}

export default CustomerEvents