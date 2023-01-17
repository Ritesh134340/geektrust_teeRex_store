import React, { useState, useEffect } from "react";
import { FilterWrapper } from "../styles/filter.styled";
import { useSelector, useDispatch } from "react-redux";
import { boxFilter } from "../Redux/action";

const Filter = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.searchFilter);

  const [color, setColor] = useState([]);
  const [type, setType] = useState([]);
  const [gender, setGender] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    if (color.length > 0) {
      products = products.filter((product) => color.includes(product.color));
    }
    if (gender.length > 0) {
      products = products.filter((product) => gender.includes(product.gender));
    }
    if (type.length > 0) {
      products = products.filter((product) => type.includes(product.type));
    }
    if (price.length > 0) {
      if (price.includes("250")) {
        products = products.filter((product) => product.price <= 250);
      }
      if (price.includes("251")) {
        products = products.filter(
          (product) => product.price > 250 && product.price <= 450
        );
      }
      if (price.includes("450")) {
        products = products.filter((product) => product.price > 450);
      }
    }

    dispatch(boxFilter(products));
  }, [color, gender, type, price]);

  const handleColorChange = (e) => {
    const newColor = [...color];
    if (newColor.includes(e.target.value)) {
      newColor.splice(newColor.indexOf(e.target.value), 1);
    } else {
      newColor.push(e.target.value);
    }

    setColor(newColor);
  };

  const handleTypeChange = (e) => {
    const newType = [...type];
    if (newType.includes(e.target.value)) {
      newType.splice(newType.indexOf(e.target.value), 1);
    } else {
      newType.push(e.target.value);
    }

    setType(newType);
  };

  const handleGenderChange = (e) => {
    const newGender = [...gender];
    if (newGender.includes(e.target.value)) {
      newGender.splice(newGender.indexOf(e.target.value), 1);
    } else {
      newGender.push(e.target.value);
    }

    setGender(newGender);
  };

  const handlePriceChange = (e) => {
    const newPrice = [...price];
    if (newPrice.includes(e.target.value)) {
      newPrice.splice(newPrice.indexOf(e.target.value), 1);
    } else {
      newPrice.push(e.target.value);
    }

    setPrice(newPrice);
  };

  return (
    <FilterWrapper>
      <div className="filter-div">
        <h3>Color</h3>
        <input defaultChecked={color.includes("Red")} type="checkbox" value="Red" onChange={handleColorChange}></input>
        <label>Red</label>
        <br />

        <input
        defaultChecked={color.includes("Blue")}
          value="Blue"
          type="checkbox"
          onChange={handleColorChange}
        ></input>
        <label>Blue</label>
        <br />

        <input
         defaultChecked={color.includes("Green")}
          value="Green"
          type="checkbox"
          onChange={handleColorChange}
        ></input>
        <label>Green</label>
        <br />
      </div>

      <div className="filter-div">
        <h3>Gender</h3>
        <input
         defaultChecked={gender.includes("Men")}
          value="Men"
          type="checkbox"
          onChange={handleGenderChange}
        ></input>
        <label>Men</label>
        <br />

        <input
          defaultChecked={gender.includes("Women")}
          value="Women"
          type="checkbox"
          onChange={handleGenderChange}
        ></input>
        <label>Women</label>
        <br />
      </div>

      <div className="filter-div" id="price-filter">
        <h3>Price</h3>
        <input defaultChecked={price.includes("250")} value="250" type="checkbox" onChange={handlePriceChange}></input>
        <label>0-Rs250</label>
        <br />

        <input defaultChecked={price.includes("251")} value="251" type="checkbox" onChange={handlePriceChange}></input>
        <label>Rs251-450</label>
        <br />

        <input defaultChecked={price.includes("450")} value="450" type="checkbox" onChange={handlePriceChange}></input>
        <label>Above Rs450</label>
        <br />
      </div>

      <div className="filter-div">
        <h3>Type</h3>
        <input value="Polo" type="checkbox" defaultChecked={type.includes("Polo")} onChange={handleTypeChange}></input>
        <label>Polo</label>
        <br />

        <input
        defaultChecked={type.includes("Hoodie")}
          value="Hoodie"
          type="checkbox"
          onChange={handleTypeChange}
        ></input>
        <label>Hoodie</label>
        <br />

        <input
          defaultChecked={type.includes("Basic")}
          value="Basic"
          type="checkbox"
          onChange={handleTypeChange}
        ></input>
        <label>Basic</label>
        <br />
      </div>
    </FilterWrapper>
  );
};

export default Filter;
