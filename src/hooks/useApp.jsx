import { useContext, createContext, useState, useEffect } from "react";
import crc32 from "crc-32";

const UserContext = createContext({
  user: {},
  refetchFromLocalStorage: () => {},
});

const getRandomPicture = (name) => {
  const hash = Math.abs(crc32.str(name) + Number(Date.now() / 3600000));
  return `./src/assets/avatar/${Math.ceil(hash % 7)}.png`;
};

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    const userItem = localStorage.getItem("user");
    const user = JSON.parse(userItem);

    if (userItem !== null) {
      if (!user.picture) {
        user.picture = getRandomPicture(user.name);
      }
      setUser(user);
    }
  }, [rerender]);

  useEffect(() => {}, []);

  const refetchFromLocalStorage = () => {
    setRerender((prev) => !prev);
  };
  return (
    <UserContext.Provider
      value={{ user, refetchFromLocalStorage }}
      {...props}
    />
  );
};

const useApp = () => useContext(UserContext);

export { useApp, UserProvider, getRandomPicture };
