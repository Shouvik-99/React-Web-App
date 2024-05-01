import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    const redirect = useNavigate()
    const foodType = useRef()
    const foodCategory = useRef()
    const foodName = useRef()
    const foodPrice = useRef()
    const foodQuantity = useRef()
    
    const handleOnclick = (event) => {
        event.preventDefault();
        fetch("https://react-backend-production-e284.up.railway.app/api/v1/foods", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                foodName: foodName.current.value, 
                foodCategory: foodCategory.current.value,
                foodPrice: foodPrice.current.value,
                foodQuantity: foodQuantity.current.value,
                foodType: foodType.current.value
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
    <label htmlFor="foodName" className="form-label" style={{fontWeight: 'bold'}}>Food Type</label>
    <select className="form-select form-select-md mb-3" aria-label="Large select example" ref={foodType}>
    <option value="VEG">VEG</option>
    <option value="NON-VEG">NON-VEG</option>
  </select>
  </div>
  
  <div className="mb-3">
  <label htmlFor="foodName" className="form-label" style={{fontWeight: 'bold'}}>Food Catagory</label>
  <select className="form-select form-select-md mb-3" aria-label="Small select example" ref={foodCategory}>
    <option value="SNACKS">SNACKS</option>
    <option value="STARTER">STARTER</option>
    <option value="MEAL">MEAL</option>
  </select>
  </div>

  <div className="mb-3">
    <label htmlFor="foodName" className="form-label" style={{fontWeight: 'bold'}}>Food Name</label>
    <input type="text" className="form-control" id="foodName" aria-describedby="foodName" ref={foodName}/>
  </div>
  <label htmlFor="foodPrice" className="form-label" style={{fontWeight: 'bold'}}>Food Price</label>
  <div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <input type="number" className="form-control" aria-label="Amount (to the nearest INR)" ref={foodPrice}/>
  <span className="input-group-text">.00</span>
</div>
<label htmlFor="foodQuanity" className="form-label" style={{fontWeight: 'bold'}}>Food Quantity</label>
<div className="input-group mb-3">
<input type="number" className="form-control" aria-label="Amount (to the nearest INR)" ref={foodQuantity}/>
</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1" style={{fontWeight: 'bold'}}>Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleOnclick}>Submit</button>
</form>
</div>
  )
}

export default Form