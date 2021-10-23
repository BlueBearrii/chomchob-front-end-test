import { Provider } from "react-redux";
import styled from "styled-components";
import { Footer } from "./components/footer";
import { CustomNavbar } from "./components/navbar";
import { Products } from "./components/products";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <CustomNavbar />
        <Main>
          <Products />
        </Main>
        <Footer />
      </Wrapper>
    </Provider>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

const Main = styled.div`
  flex: 1;
`;

export default App;
