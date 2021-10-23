import React from "react";
import { Col } from "react-bootstrap";
import {
  CardContentContainer,
  ContentDetails,
  CardContentImage,
  ContentTitle,
  CardImage,
  CardStyle,
  ContentDetailsTop,
  ContentDetailsBottom,
  ContentDetailsBottomCol,
  Label,
  Price,
  Stars,
  Star,
} from "./styles";

import star from "../../assets/icons/star.svg";
import starFull from "../../assets/icons/star-full.svg";

export default function CustomCard(props) {
  const { brand_info, image_url, name, price, review, _id } = props.data;
  console.log(props);

  var starArr = [];

  for (let i = 0; i < 5; i++) {
    if (i < review.rating) {
      starArr.push(true);
    } else {
      starArr.push(false);
    }
  }

  const starMapping = starArr.map((res, index) => {
    return (
      <Star
        key={`start ${_id + index}`}
        src={res ? starFull : star}
        alt={name}
      />
    );
  });

  return (
    <Col xs={12} md={6} lg={3}>
      <CardStyle>
        <CardImage img_src={image_url} />
        <CardContentContainer>
          <CardContentImage src={brand_info.url} />
          <ContentDetails>
            <ContentDetailsTop>
              <ContentTitle className="boon-600">{name}</ContentTitle>
            </ContentDetailsTop>
            <ContentDetailsBottom>
              <ContentDetailsBottomCol>
                <Label className="boon-400">Price</Label>
                <Price className="boon-600">
                  {/* Code price generated from https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings */}
                  ฿
                  {parseInt(price)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </Price>
              </ContentDetailsBottomCol>
              <ContentDetailsBottomCol>
                <Label className="boon-400">
                  Reviews ({review.number} reviews)
                </Label>
                <Stars>{starMapping}</Stars>
              </ContentDetailsBottomCol>
            </ContentDetailsBottom>
          </ContentDetails>
        </CardContentContainer>
      </CardStyle>
    </Col>
  );
}
