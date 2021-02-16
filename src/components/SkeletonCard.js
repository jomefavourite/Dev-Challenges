import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {Container} from '../globalStyles';
import {Card, CardContainer, MainContents} from '../styles/MainStyle';
const SkeletonCard = () => {
  return (
    <MainContents>
      <Container>
        <CardContainer>
          {Array(14)
            .fill()
            .map((item, index) => (
              <Card key={index}>
                <Skeleton width={`100%`} height={`266px`} />
                <div>
                  <Skeleton
                    width={`100%`}
                    height={`30px`}
                    style={{borderRadius: '10px'}}
                  />
                </div>
              </Card>
            ))}
        </CardContainer>
      </Container>
    </MainContents>
  );
};
export default SkeletonCard;
