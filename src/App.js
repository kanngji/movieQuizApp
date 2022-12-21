import { createGlobalStyle } from "styled-components";
import Main from "./components/Main/Main";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Main />
    </>
  );
}

export default App;
