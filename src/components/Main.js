import React, {useContext} from 'react';
import {IconContext} from 'react-icons';
import {FaStar} from 'react-icons/fa';
import {GlobalContext} from '../context/GlobalContext';
import {Container} from '../globalStyles';
import {
  Card,
  CardAppartmentDetails,
  CardContainer,
  CardIntro,
  CardRatings,
  CardSuperHost,
  ErrorMessage,
  MainContents,
  MainHeading,
} from '../styles/MainStyle';
import {stays} from './stays';

const Main = () => {
  const {contents, setContents} = useContext(GlobalContext);

  return (
    <MainContents>
      <Container>
        <MainHeading>
          <h1>Stays in Finland</h1>
          <p>
            {contents.length > 12 ? '12+ stays' : contents.length + ' stays'}
          </p>
        </MainHeading>

        <CardContainer>
          {contents.length ? (
            contents.map((content, i) => {
              return (
                <Card key={i}>
                  <img
                    src={content.photo}
                    alt='windbnb'
                    className='windbnb-image'
                  />
                  <CardIntro>
                    <CardAppartmentDetails>
                      {content.superHost && (
                        <CardSuperHost>SUPER HOST</CardSuperHost>
                      )}
                      <p>{content.type}</p>
                      {content.beds && <p> {content.beds} beds</p>}
                    </CardAppartmentDetails>
                    <CardRatings>
                      <IconContext.Provider value={{color: '#EB5757'}}>
                        <FaStar />
                      </IconContext.Provider>
                      <p>{content.rating.toFixed(2)}</p>
                    </CardRatings>
                  </CardIntro>

                  <div>
                    <h3>{content.title}</h3>
                  </div>
                </Card>
              );
            })
          ) : (
            <ErrorMessage>
              <p>
                Please try again, by{' '}
                <strong
                  style={{cursor: 'pointer'}}
                  onClick={() => setContents([...stays])}
                >
                  clicking here
                </strong>
              </p>
            </ErrorMessage>
          )}
        </CardContainer>
      </Container>
    </MainContents>
  );
};

export default Main;
