import { createContext, useContext, useEffect, useState } from "react";

// Create a new context object
const MyContext = createContext({});

// Create a custom hook to access the context

// Create a provider component to wrap the application with the context
const MyProvider = (props) => {
  const [login, setLogin] = useState(false);
  const [flows, setFlows] = useState(1);
  const [library, setLibrary] = useState(1);
  const [calendar, setCalendar] = useState(1);
  const [settings, setSettings] = useState(1);
  const [tabState, setTabState] = useState({ 0: 1 });
  const [activateKey, setActivateKey] = useState(0);
  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <MyContext.Provider
      value={{
        login,
        setLogin,
        flows,
        setFlows,
        library,
        setLibrary,
        calendar,
        setCalendar,
        settings,
        setSettings,
        tabState,
        setTabState,
        activateKey,
        setActivateKey,
      }}
      {...props}
    />
  );
};
const useParams = () => useContext(MyContext);

export { MyProvider, useParams };
