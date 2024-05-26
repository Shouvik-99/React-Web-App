import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  IMAGE_FILE_PATH,
  IMAGE_NAME_TO_IMAGE_SRC_MAP,
} from "../../public/ImageSource";
import { totalItemCountAction } from "../store/TotalItemCountSlice";
import "../../public/css/AllItems.css";
import { useDispatch } from "react-redux";
function Item({ item }) {
  const countDispatcher = useDispatch();
  var [addFlag, setAddFlag] = useState(false);
  var [quantityOfItem, setQuantityOfItem] = useState(0);
  function inctrmentDecrementButton(id) {
    setAddFlag(true);
    setQuantityOfItem(1);
    countDispatcher(totalItemCountAction.addItems());
  }
  const incrementQuentityHandler = () => {
    setQuantityOfItem((previous) => previous + 1);
    countDispatcher(totalItemCountAction.addItems());
  };
  const decrementQuentityHandler = () => {
    if (quantityOfItem == 1) {
      setAddFlag(false);
    }
    setQuantityOfItem((previous) => previous - 1);
    countDispatcher(totalItemCountAction.deleteItems());
  };
  return (
    <div key={item.id} className="card" style={{ width: "18rem" }}>
      <img
        className="img-as-bg"
        src={
          item.foodImage === null
            ? IMAGE_NAME_TO_IMAGE_SRC_MAP.get(item.foodName)
            : IMAGE_FILE_PATH.concat(item.foodImage)
        }
      />
      {addFlag === false ? (
        <Button
          variant="info"
          onClick={() => inctrmentDecrementButton(item.id)}
        >
          {" "}
          Add
        </Button>
      ) : (
        <div>
          <Button
            variant="outline-success"
            style={{ borderColor: "white" }}
            onClick={() => incrementQuentityHandler()}
          >
            +
          </Button>{" "}
          <span style={{ color: "green" }}>{quantityOfItem}</span>{" "}
          <Button
            variant="outline-success"
            className="button_style"
            style={{ borderColor: "white" }}
            onClick={() => decrementQuentityHandler()}
          >
            -
          </Button>{" "}
        </div>
      )}

      <div className="card-body">
        <p className="card-text">{item.foodName}</p>
      </div>
    </div>
  );
}

export default Item;
