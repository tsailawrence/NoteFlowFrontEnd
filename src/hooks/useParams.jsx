import { createContext, useContext, useEffect, useState } from "react";

// Create a new context object
const MyContext = createContext({});

// Create a custom hook to access the context

// Create a provider component to wrap the application with the context
const MyProvider = (props) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <MyContext.Provider
      value={{
        login,
        setLogin,
      }}
      {...props}
    />
  );
};
const useParams = () => useContext(MyContext);

export { MyProvider, useParams };
