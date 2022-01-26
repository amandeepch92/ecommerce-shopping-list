import React, { useState, useEffect } from "react";
import ProductList from "components/ProductList"; 
import Header from "parts/Header"; 
import ProductService from 'services/ProductService';

export default function EcommerceHomePage() {

    const [productData,setproductList] = useState([]);
    const [filterData,setFilterData] = useState([]);
  
    // Define the function that fetches the data from API
    
    const fetchData = async () => {
        ProductService.getList()
        .then((res) => {
          const newList = productData.concat(res);
          setproductList(newList);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() =>{
        })
    };

    const filterProducts = size => {
        const filterItem = productData.filter(
          item => item.size.indexOf(size) > -1
        );
        setFilterData(filterItem);
    };
    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className="wrapper">
          {productData.length > 0 ? (
            <div className="content">
                <Header className={'app-header'} filterProducts={filterProducts} />
                <ProductList className={'item-list'} items={filterData.length ? filterData : productData} />
            </div>
          ) : (
            <p className="loading">Loading... </p>
          )}
        </div>
    );
  }