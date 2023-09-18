import React, { useState } from 'react';
import SearchResult from './SearchResultsProducts';
import LoadingSpinner from './SpinningComp';
import SearchBar from './SearchBar';

export default function Search() {

  const [searchProducts, setSearchProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInput = async event => {

    if(document.getElementById("searchString")){var fieldText = document.getElementById("searchString").value;}
    if(document.getElementById("MaxPrice")){ var fieldPrice = document.getElementById("MaxPrice").value;}
    if(document.getElementById("Vendor")){var fieldVendor = document.getElementById("Vendor").value;}
   

    if (!fieldText || !fieldText.trim()) {
      setSearchProducts([]);
      setMessage(null)
    } else {
      setIsLoading(true)
      let fetchString = 'http://localhost:8080/product?name=' + fieldText;
      if (fieldPrice) fetchString += '&price='+ fieldPrice;
      if (fieldVendor) fetchString += '&vendor='+ fieldVendor;
      try {
        const response = await fetch(fetchString);
        setSearchProducts(await response.json());
        setIsLoading(false)
        if(searchProducts.length === 0) setMessage("No results founds");
      } catch (error) {
        setIsLoading(false)
        setMessage("Error, unable to connect to server")
      }
    }
  };

  return (
    <>
      <SearchBar functionSearch={handleInput} />
      

      {searchProducts.length === 0 && isLoading === false ? <h1>{message}</h1> : null}

      {isLoading ? <LoadingSpinner /> :
        <>
          <SearchResult resultProducts={searchProducts} />
        </>
      }


    </>
  );
}
