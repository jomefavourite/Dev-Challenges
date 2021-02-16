import React, {useState} from 'react';
import {MdLocationOn} from 'react-icons/md';
import {SearchLocationContainer} from '../styles/SearchStyle';

const SearchLocation = ({setLocationValue}) => {
  const [locations] = useState([
    {location: 'Helsinki, Finland'},
    {location: 'Turku, Finland'},
    {location: 'Oulu, Finland'},
    {location: 'Vaasa, Finland'},
  ]);

  return (
    <SearchLocationContainer>
      {locations.map((location, index) => {
        return (
          <div key={index}>
            <p
              onClick={e => setLocationValue(e.target.innerText)}
              style={{display: 'flex', alignItems: 'center'}}
            >
              <span>
                <MdLocationOn style={{fontSize: '20px', marginRight: '8px'}} />
              </span>
              {location.location}
            </p>
          </div>
        );
      })}
    </SearchLocationContainer>
  );
};

export default SearchLocation;
