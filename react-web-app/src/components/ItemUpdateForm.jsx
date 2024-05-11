import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Image, { IMAGE_SRC_NAME } from './Image'

function ItemUpdateForm() {

    const location = useLocation();
  const item  = location.state;
    console.log(item)
  const redirect = useNavigate()
  const foodType = useRef()
  const foodCategory = useRef()
  const foodName = useRef()
  const foodPrice = useRef()
  const foodQuantity = useRef()

  const handleOnclick = (event) => {
    event.preventDefault();
    const foodNameKey = foodName.current.value; 
    fetch(`http://localhost:8080/api/v1/foods/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        foodName: foodNameKey,
        foodCategory: foodCategory.current.value,
        foodPrice: foodPrice.current.value,
        foodQuantity: foodQuantity.current.value,
        foodType: foodType.current.value,
        foodImage: IMAGE_SRC_NAME
      }),
    })
      .then((res) => res.json())
      .then((foodItem) => {
        foodCategory.current.value = "SNACKS";
        foodPrice.current.value = "";
        foodQuantity.current.value = "";
        foodName.current.value = "";
        foodType.current.value = "VEG";
        redirect("/");
      });
  }
  return (
    <div className='mx-auto w-50'>
      <form className='w-100'>
        <div className="mb-3 mt-3">
          <label htmlFor="foodName" className="form-label" style={{ fontWeight: 'bold' }}>Food Type</label>
          <select defaultValue={item.foodType} className="form-select form-select-md mb-3" aria-label="Large select example" ref={foodType}> 
            <option value="VEG">VEG</option>
            <option value="NON-VEG">NON-VEG</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="foodName" className="form-label" style={{ fontWeight: 'bold' }}>Food Catagory</label>
          <select defaultValue={item.foodCategory} className="form-select form-select-md mb-3" aria-label="Small select example" ref={foodCategory}>
            <option value="SNACKS">SNACKS</option>
            <option value="STARTER">STARTER</option>
            <option value="MEAL">MEAL</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="foodName" className="form-label" style={{ fontWeight: 'bold' }}>Food Name</label>
          <input defaultValue={item.foodName} type="text" className="form-control" id="foodName" aria-describedby="foodName" ref={foodName} />
        </div>
        <label htmlFor="foodPrice" className="form-label" style={{ fontWeight: 'bold' }}>Food Price</label>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input defaultValue={item.foodPrice} type="number" className="form-control" aria-label="Amount (to the nearest INR)" ref={foodPrice} />
          <span className="input-group-text">.00</span>
        </div>
        <label htmlFor="foodQuanity" className="form-label" style={{ fontWeight: 'bold' }}>Food Quantity</label>
        <div className="input-group mb-3">
          <input defaultValue={item.foodQuantity} type="number" className="form-control" aria-label="Amount (to the nearest INR)" ref={foodQuantity} />
        </div>
        <div className="mb-3">
          <Image state={item.foodImage}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1" style={{ fontWeight: 'bold' }}>Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleOnclick}>Submit</button>
      </form>
    </div>
  )
}

export default ItemUpdateForm