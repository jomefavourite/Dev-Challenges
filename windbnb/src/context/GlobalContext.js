import {createContext, useEffect, useState} from 'react';
import {stays} from '../components/stays';

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContents([...stays]);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const getFirstWord = str => {
    let spaceIndex = str.includes(',') ? str.indexOf(',') : str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
  };

  const filterContent = (location = '', guest = '') => {
    const cityName = getFirstWord(location);
    const guestNum = getFirstWord(guest);

    const contentsNew = contents.filter(content => {
      const newCityName =
        content.city === cityName && content.maxGuests >= guestNum;

      return newCityName;
    });

    setContents(contentsNew);
  };

  return (
    <GlobalContext.Provider
      value={{
        contents,
        setContents,
        filterContent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
