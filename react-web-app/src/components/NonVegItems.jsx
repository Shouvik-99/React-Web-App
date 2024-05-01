import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchFoodItems} from '../store/FoodItemsSlice'
import "./ItemDisplay.css"

function NonVegItems() {
  const { foodItems } = useSelector((store) => (store.items))
  const dispatcher = useDispatch()
  useEffect(()=>{
    dispatcher(fetchFoodItems());
  }, [])
  
  return (
    <div className='cards'>
    {foodItems.filter(item => item.foodType === 'NON-VEG').map((item) =>
        <div key={item.id} className="card" style={{width: '18rem'}}>
          <img className="img-as-bg" src="https://c8.alamy.com/comp/2PGD175/masala-chicken-curry-top-view-non-veg-food-2PGD175.jpg" />
          <div className="card-body">
            <p className="card-text">{item.foodName}</p>
          </div>
        </div>
    )
  }
  </div>
  )
}

export default NonVegItems