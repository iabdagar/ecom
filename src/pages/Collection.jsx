import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assests/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterproducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setShortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      /* prev.filter(item => item !== e.target.value) creates a new array that excludes the selected value. */
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (search && showSearch) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterproducts(productCopy);
  };

  const sortProduct = () => {
    let sortCopy = filterProducts.slice();

    if (sortType === "low-high") {
      setFilterproducts(sortCopy.sort((a, b) => a.price - b.price));
    } else if (sortType === "high-low") {
      setFilterproducts(sortCopy.sort((a, b) => b.price - a.price));
    } else {
      applyFilter();
    }

    // switch (sortType) {
    //     case 'low-high':
    //         setFilterproducts(sortCopy.sort((a, b) => a.price - b.price));
    //         break;
    //     case 'high-low':
    //         setFilterproducts(sortCopy.sort((a, b) => b.price - a.price));
    //         break;
    //     default:
    //         applyFilter();
    // }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter pannel */}
      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilters(!showFilters);
          }}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
          />
        </p>

        {/* category */}
        <div
          className={`border border-gray-400  pl-5  py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATOGRIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              MEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              KIDS
            </p>
          </div>
        </div>

        {/* subCategory */}
        <div
          className={`border border-gray-400  pl-5  py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">subCategory</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={togglesubCategory}
              />{" "}
              TOPWEAR
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={togglesubCategory}
              />{" "}
              BOTTOMWEAR
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={togglesubCategory}
              />{" "}
              WINTERWEAR
            </p>
          </div>
        </div>
      </div>

      {/* all collection pannel */}
      <div className="flex-1 mt-4 sm:mt-1">
        <div className="flex justify-between items-center sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* product sort */}
          <select
            onChange={(e) => {
              setShortType(e.target.value);
            }}
            className="border-2 rounded-md border-gray-500 text-sm px-2 py-2"
          >
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image[0]}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
