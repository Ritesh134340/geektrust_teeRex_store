import React, { useState, useEffect } from "react";
import { SearchWrapper } from "../styles/search.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { searchFilter } from "../Redux/action";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFilteredProducts(
      products.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  };

  useEffect(() => {
    dispatch(searchFilter(filteredProducts));
  }, [filteredProducts]);

  return (
    <>
      <SearchWrapper>
        <input type="text" className="input-box" onChange={handleSearchInput} />
        <AiOutlineSearch className="search-icon" onClick={handleSearchSubmit} />
      </SearchWrapper>
    </>
  );
};

export default Search;
