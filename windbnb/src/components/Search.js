import React, {useEffect, useState, useContext} from 'react';
import {FaSearch, FaTimes} from 'react-icons/fa';
import {Container} from '../globalStyles';
import {SearchIcon} from '../styles/HeaderStyle';
import SearchGuest from './SearchGuest';
import SearchLocation from './SearchLocation';
// import SearchLocation from "./SearchLocation";
import {
  FormContainer,
  MobileSearchView,
  SearchBg,
  SearchBtn,
  SearchContainer,
  Label,
} from '../styles/SearchStyle';
import {GlobalContext} from '../context/GlobalContext';
import {HeaderContext} from '../context/HeaderContext';

const Search = () => {
  const {filterContent} = useContext(GlobalContext);
  const {
    clicked,
    whatClicked,
    locationValue,
    guestValue,
    handleClick,
    setLocationValue,
    setGuestValue,
    setWhatClicked,
    setClicked,
  } = useContext(HeaderContext);

  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const incrementDecrement = e => {
    switch (e.target.ariaLabel) {
      case 'adult plus button':
        setAdultCount(adultCount + 1);
        break;
      case 'adult minus button':
        if (adultCount > 0) setAdultCount(adultCount - 1);
        break;
      case 'children plus button':
        setChildrenCount(childrenCount + 1);
        break;
      case 'children minus button':
        if (childrenCount > 0) setChildrenCount(childrenCount - 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (adultCount > 0 || childrenCount > 0) {
      setGuestValue(adultCount + childrenCount + ' guests');
    } else {
      setGuestValue('');
    }
  }, [setGuestValue, adultCount, childrenCount]);

  const handleSubmit = e => {
    if (locationValue) {
      setClicked(!clicked);
      filterContent(locationValue, guestValue);
    }
    e.preventDefault();
  };

  // console.log(whatClicked);

  return (
    <>
      <SearchContainer>
        <div>
          <Container>
            <form onSubmit={handleSubmit}>
              <MobileSearchView>
                <p>Edit your Search</p>
                <FaTimes style={{cursor: 'pointer'}} onClick={handleClick} />
              </MobileSearchView>
              <FormContainer>
                <Label location whatClicked={whatClicked} htmlFor='location'>
                  LOCATION
                  <input
                    type='text'
                    name='location'
                    value={locationValue}
                    placeholder='Search Location'
                    autoComplete='off'
                    onClick={e => setWhatClicked(e.target.name)}
                    readOnly
                  />
                </Label>
                <Label guest whatClicked={whatClicked} htmlFor='guests'>
                  GUESTS
                  <input
                    type='text'
                    name='guests'
                    value={guestValue}
                    placeholder='Add Guest'
                    autoComplete='off'
                    onClick={e => setWhatClicked(e.target.name)}
                    readOnly
                  />
                </Label>
                <SearchBtn>
                  <SearchIcon>
                    <FaSearch style={{color: '#fff', fontSize: '18px'}} />
                  </SearchIcon>
                  Search
                </SearchBtn>
              </FormContainer>

              {whatClicked === 'location' && (
                <SearchLocation setLocationValue={setLocationValue} />
              )}
              {whatClicked === 'guests' && (
                <SearchGuest
                  adultCount={adultCount}
                  childrenCount={childrenCount}
                  incrementDecrement={incrementDecrement}
                />
              )}

              <SearchBtn>
                <SearchIcon>
                  <FaSearch style={{color: '#fff', fontSize: '18px'}} />
                </SearchIcon>
                Search
              </SearchBtn>
            </form>
          </Container>
        </div>
      </SearchContainer>
      <SearchBg onClick={handleClick}></SearchBg>
    </>
  );
};

export default Search;
