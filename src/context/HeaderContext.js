import {useState, useEffect, createContext} from 'react';

export const HeaderContext = createContext();

const HeaderContextProvider = ({children}) => {
  const [clicked, setClicked] = useState(false);
  const [whatClicked, setWhatClicked] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [guestValue, setGuestValue] = useState('');

  const handleClick = e => {
    setClicked(!clicked);
    setWhatClicked(e.target.name);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    clicked ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto');
  }, [clicked]);
  return (
    <HeaderContext.Provider
      value={{
        clicked,
        whatClicked,
        locationValue,
        guestValue,
        handleClick,
        setLocationValue,
        setGuestValue,
        setWhatClicked,
        setClicked,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
