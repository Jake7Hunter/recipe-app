import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { GiFoodChain } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Logo to="/">
            <GiFoodChain /> Jake's Recipes
          </Logo>
        </Nav>
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
`;
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
    marign-right: 0.5rem;
  }
`;

export default App;
