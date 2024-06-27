export function isValid(cartItems){
    console.log("cartItems -------------- ",cartItems[0].food?.restaurant._id)
    const restaurantId=cartItems[0]?.food?.restaurant._id;
  //  console.log('Cart Items :',cartItems);
    for(let item of cartItems){
        console.log("item ---- ", item.food.restaurant?._id)
      if(item.food?.restaurant._id!==restaurantId){
        return false;
      }
    }
    return true
 }