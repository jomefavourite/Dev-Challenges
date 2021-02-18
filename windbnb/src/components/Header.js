import React, {useContext} from 'react';
import {IconContext} from 'react-icons';
import {FaSearch} from 'react-icons/fa';
import {HeaderContext} from '../context/HeaderContext';
import {Container} from '../globalStyles';
import {
  Form,
  Input,
  MainHeader,
  MainHeaderContainer,
  SearchIcon,
} from '../styles/HeaderStyle';
import {Logo} from './Logo';
import Search from './Search';

const Header = () => {
  const {clicked, locationValue, guestValue, handleClick} = useContext(
    HeaderContext
  );

  return (
    <MainHeader>
      {clicked && <Search />}

      <Container>
        <MainHeaderContainer>
          <a href='/'>
            <Logo />
          </a>

          <Form onClick={e => handleClick(e)}>
            <Input
              type='text'
              name='location'
              value={locationValue}
              placeholder='Search Location'
              aria-label='search location'
              autoComplete='off'
              readOnly
            />
            <Input
              type='text'
              name='guests'
              value={guestValue}
              placeholder='Add guests'
              aria-label='add guests'
              autoComplete='off'
              readOnly
            />
            <SearchIcon>
              <IconContext.Provider value={{color: '#EB5757'}}>
                <FaSearch />
              </IconContext.Provider>
            </SearchIcon>
          </Form>
        </MainHeaderContainer>
      </Container>
    </MainHeader>
  );
};

export default Header;
