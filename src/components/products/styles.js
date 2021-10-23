import styled from "styled-components";

export const CardStyle = styled.div`
  width: 100%;
  border-radius: 15px;
  background: #ffffff;
  overflow: hidden;
  margin-bottom: 25px;
  height: 310px;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 196px;
  background-image: url(${(props) => (props.img_src ? props.img_src : null)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
`;

export const CardContentContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
`;
export const CardContentImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  margin-right: 15px;
`;

export const ContentDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentDetailsTop = styled.div`
  height: 40px;
  width: 100%;

  /* Ref ideas from https://www.codegrepper.com/code-examples/css/css+max+line+length */
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 18px; /* fallback */
  max-height: 40px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const ContentTitle = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  color: #484848;

  /* Ref ideas from https://www.codegrepper.com/code-examples/css/css+max+line+length */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const ContentDetailsBottom = styled.div`
  display: flex;
  flex-direction: row
`;

export const ContentDetailsBottomCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column
`;

export const Label = styled.p`
  color: #939393;
  font-size: 12px;
  margin-bottom: 5px;
  max-height: 18px;
  overflow: hidden;
`;

export const Price = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  color: #FF6F61;
`;

export const ProductsLebel = styled.p`
  font-size: 16px;
  margin-top: 50px
`;

export const Stars = styled.div`
  display: inline-flex;
  height: 18px
`

export const Star = styled.img`
  height: 14px;
`








