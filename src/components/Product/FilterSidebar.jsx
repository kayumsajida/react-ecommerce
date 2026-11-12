import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: "",
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];

  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy"
  ];

  const size = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ];
  const material = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece"
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle"
  ];

  const gender = [
    "Men",
    "Women",
  ];

  useEffect(() => {
    const param = Object.fromEntries([...searchParams]);
    setFilters({
      category: param.category || "",
      gender: param.gender || "",
      color: param.color || "",
      size: param.size ? param.size.split(",") : [],
      material: param.material ? param.material.split(",") : [],
      brand: param.brand ? param.brand.split(",") : [],
      minPrice: param.minPrice || 0,
      maxPrice: param.maxPrice || 100,
    });
    setPriceRange([0, param.maxPrice || 100])
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter(
          (item) => item !== value
        );
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    console.log(newFilters);
  }

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();(
    Object.keys(newFilters).forEach ((key) => {
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join());
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    }))
    setSearchParam(params);
  }

  return (
    <>
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-2">Filters</h2>
        {/* category filter */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Category</label>
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-1 text-sm">
              <input type="radio" name="category" value={category} onChange={handleFilterChange} className="h-4 w-4 mr-2 focus:border-blue-500" /> {category}
            </div>
          ))}
        </div>
        {/* gender filter */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Gender</label>
          {gender.map((gender) => (
            <div key={gender} className="flex items-center mb-1 text-sm">
              <input type="radio" name="gender" value={gender} onChange={handleFilterChange} className="h-4 w-4 mr-2 focus:border-blue-500" /> {gender}
            </div>
          ))}
        </div>

        {/* color filter */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Colors</label>
          <div className="flex flex-wrap mb-1 gap-2">
            {colors.map((color) => (
              <button key={color} name="color" value={color} onClick={handleFilterChange} className="w-8 h-8 rounded-full cursor-pointer border border-gray-300 transition hover:scale-105" style={{ backgroundColor: color.toLowerCase() }}></button>
            ))}
          </div>
        </div>

        {/* size filter */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Size</label>
          <div className="flex flex-col mb-1 gap-2">
            {size.map((size) => (
              <div key={size} className="flex items-center text-sm">
                <input type="checkbox" name="size" value={size} onChange={handleFilterChange} className="h-4 w-4 mr-2 focus:border-blue-500" /> {size}
              </div>
            ))}
          </div>
        </div>

        {/* Material filter */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Size</label>
          <div className="flex flex-col mb-1 gap-2">
            {material.map((material) => (
              <div key={material} className="flex items-center text-sm">
                <input type="checkbox" name="material" value={material} onChange={handleFilterChange} className="h-4 w-4 mr-2 focus:border-blue-500" /> {material}
              </div>
            ))}
          </div>
        </div>

        {/* Brand filter */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Size</label>
          <div className="flex flex-col mb-1 gap-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center text-sm">
                <input type="checkbox" name="brand" value={brand} onChange={handleFilterChange} className="h-4 w-4 mr-2 focus:border-blue-500" /> {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Price Range</label>
          <div className="flex flex-col mb-1 gap-2">
            <div className="flex items-center text-sm">
              <input type="range" name="priceRange" min={0} max={100} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex justify-between text-gray-600 mt-1 text-sm">
              <span>$0</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default FilterSidebar;