import React from 'react';
import {FaMinus, FaPlus} from 'react-icons/fa';
import {SearchGuestBtn, SearchGuestContainer} from '../styles/SearchStyle';

const SearchGuest = ({adultCount, childrenCount, incrementDecrement}) => {
  const handleClick = e => {
    e.preventDefault();
    incrementDecrement(e);
  };

  return (
    <SearchGuestContainer>
      <div>
        <div>
          <h4>Adults</h4>
          <p>Ages 13 or above</p>
          <div>
            <SearchGuestBtn
              aria-label='adult minus button'
              onClick={e => handleClick(e)}
            >
              <FaMinus size='18px' style={{pointerEvents: 'none'}} />
            </SearchGuestBtn>

            <p>{adultCount}</p>

            <SearchGuestBtn
              aria-label='adult plus button'
              onClick={e => handleClick(e)}
            >
              <FaPlus size='18px' style={{pointerEvents: 'none'}} />
            </SearchGuestBtn>
          </div>
        </div>

        <div>
          <h4>Children</h4>
          <p>Ages 2-12</p>
          <div>
            <SearchGuestBtn
              aria-label='children minus button'
              onClick={e => handleClick(e)}
            >
              <FaMinus size='18px' style={{pointerEvents: 'none'}} />
            </SearchGuestBtn>

            <p>{childrenCount}</p>

            <SearchGuestBtn
              aria-label='children plus button'
              onClick={e => handleClick(e)}
            >
              <FaPlus size='18px' style={{pointerEvents: 'none'}} />
            </SearchGuestBtn>
          </div>
        </div>
      </div>
    </SearchGuestContainer>
  );
};

export default SearchGuest;
