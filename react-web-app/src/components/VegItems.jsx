import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchFoodItems} from '../store/FoodItemsSlice'
import "./ItemDisplay.css"

function VegItems() {
  const { foodItems } = useSelector((store) => (store.items))
  const dispatcher = useDispatch()
  
  useEffect(()=>{
    dispatcher(fetchFoodItems());
  }, [])

  return (
    <div className='cards'>
    {foodItems.filter(item => item.foodType === 'VEG').map((item) =>
        <div key={item.id} className="card" style={{width: '18rem'}}>
          <img className="img-as-bg" src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg" />
          <div className="card-body">
            <p className="card-text">{item.foodName}</p>
          </div>
        </div>
    )
  }
  </div>
)
}
export default VegItems;