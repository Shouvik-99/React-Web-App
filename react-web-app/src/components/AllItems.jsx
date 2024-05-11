import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchFoodItems} from '../store/FoodItemsSlice'
import "../../public/css/ItemDisplay.css"
import { IMAGE_FILE_PATH, IMAGE_NAME_TO_IMAGE_SRC_MAP } from '../../public/ImageSource'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import '../../public/css/AllItems.css'

function AllItems() {
  const { foodItems } = useSelector((store) => (store.items))
  const dispatcher = useDispatch()
  useEffect(()=>{
    dispatcher(fetchFoodItems());
  }, [])
  
  return (
    <div className='cards'>
    {foodItems.map((item) =>
        <div key={item.id} className="card" style={{width: '18rem'}}>
          <img className="img-as-bg" src={(item.foodImage === null) ? IMAGE_NAME_TO_IMAGE_SRC_MAP.get(item.foodName) : IMAGE_FILE_PATH.concat(item.foodImage)} />
          <div to="/form" className="card-body" >
            <ul>
            <li >
              <span className="card-text"  >{item.foodName}</span>
              {item.foodPrice}
              </li>
            </ul>
            <div className="navbar-nav me-auto" >
              <Button variant="primary">
            <Link className="link-style" to={"/update-form/" + item.id} state = {item}> Edit </Link>
            </Button>
            </div>
            
          </div>
        </div>
    )
  }
  </div>
  )
}

export default AllItems