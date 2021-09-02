import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSeatchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSeatchValueChange}
    />
  );
}

export { TodoSearch };
