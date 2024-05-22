import React, { useState, useEffect, createContext } from "react";

const ItemsContext = createContext({
  items: [],
  setItems: () => {},
  showFilter: false,
  setShowFilter: () => {},
  filter: [],
  setFilters: () => {},
  handleFilterClick: () => {},
  handleCategoriesSelect: () => {},
  handleFilterRemove: () => {},
});

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:1000/data");
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleCategoriesSelect = (cat) => {
    setFilters([
      ...filter.filter((c) => c !== cat), // Remove existing category
      cat, // Add selected category
    ]);
  };

  const handleFilterRemove = (f) => {
    setFilters(filter.filter((remove) => remove !== f)); // Remove filter
  };

  useEffect(() => {
    function selectFilters() {
      const selectedFilters = localStorage.getItem("selectedFilters");
      if (selectedFilters) {
        const parsedFilters = JSON.parse(selectedFilters);
        setFilters(parsedFilters);
        localStorage.removeItem("selectedFilters"); // Remove after use
      }
    }
    selectFilters();
  }, []);

  const value = {
    items,
    setItems,
    showFilter,
    setShowFilter,
    filter,
    setFilters,
    handleFilterClick,
    handleCategoriesSelect,
    handleFilterRemove,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };
