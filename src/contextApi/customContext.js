import { createContext, useContext, useState } from "react";

let customContext = createContext();

export let GlobalContext = () => {
  return useContext(customContext);
};
export let UserContext = ({ children }) => {
  let [query, setQuery] = useState([]);
  let [input,setInput] = useState("")
  let [state, setState] = useState("");
function inputNav(id){
  setState(id)
}

let handleSearch = (id) => {
    setQuery(id);
  };
  let inputData = (id)=>{
    setInput(id)
    console.log(input)
  }
  return (
    <customContext.Provider value={{ query, handleSearch,inputNav}}>
      {children}
    </customContext.Provider>
  );
};

