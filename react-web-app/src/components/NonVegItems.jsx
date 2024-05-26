import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoodItems } from "../store/FoodItemsSlice";
import "../../public/css/ItemDisplay.css";
import Item from "./Item";

function NonVegItems() {
  const { foodItems } = useSelector((store) => store.items);
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchFoodItems());
  }, []);

  return (
    <div className="cards">
      {foodItems
        .filter((item) => item.foodType === "NON-VEG")
        .map((item) => (
          <Item item={item} />
        ))}
    </div>
  );
}

export default NonVegItems;
