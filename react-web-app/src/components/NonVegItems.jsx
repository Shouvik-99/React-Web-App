import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchFoodItems} from '../store/FoodItemsSlice'
import "./ItemDisplay.css"
import { IMAGE_FILE_PATH, IMAGE_NAME_TO_IMAGE_SRC_MAP } from '../../public/ImageSource'


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
          {/* <img className="img-as-bg" src="https://c8.alamy.com/comp/2PGD175/masala-chicken-curry-top-view-non-veg-food-2PGD175.jpg" /> */}
          <img className="img-as-bg" src={(item.foodImage === null) ? IMAGE_NAME_TO_IMAGE_SRC_MAP.get(item.foodName) : IMAGE_FILE_PATH.concat(item.foodImage)} />
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