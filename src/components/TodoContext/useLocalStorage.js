import React from "react";

function useLocalStorage(itemName, defaulValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(defaulValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(defaulValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 1000);
  }, [itemName, defaulValue]);

  const saveItem = (newItems) => {
    try {
      const stringfiedTodos = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringfiedTodos);
      setItem(newItems);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
