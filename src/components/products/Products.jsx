import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { productsFetchApi } from "../../redux/actions/productsAction";
import { PRODUCTS_API } from "../../api/productApi";
import Loading from "../utils/Loading";
import CustomCard from "./CustomCard";
import { ProductsLebel } from "./styles";

function Products(props) {
  useEffect(() => {
    props.dispatch(productsFetchApi(PRODUCTS_API));
    console.log(props);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const mappingData = props.data.data
    ? props.data.data.map((res, index) => {
        return <CustomCard key={res._id} data={res} />;
      })
    : null;

  return props.data.load ? (
    <Loading />
  ) : (
    <Container>
      <ProductsLebel className="boon-600">
        Products({props.data.data ? props.data.data.length : 0})
      </ProductsLebel>
      <Row>{mappingData}</Row>
    </Container>
  );
}

function mapStateToProps(state) {
  const { productsReducer } = state;
  return { data: productsReducer };
}

export default connect(mapStateToProps)(Products);
