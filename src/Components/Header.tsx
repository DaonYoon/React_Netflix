import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  height: 80px;
  font-size:14px;

`;

const Logo = styled.svg`
margin-right: 50px;
`;

const Col = styled.div`
display: flex;
align-items: center;

`;
const Items = styled.ul`
display: flex;
align-items: center;
`;
const Item = styled.li`
display: flex;
font-size: 14px;
margin-right: 12px;
`;

function Header() {
  return (
    <Nav>
      <Col>
        <Logo />
          <Items>
            <Item>Home</Item>
            <Item>Tv Shows</Item>
          </Items>

      </Col>
      <Col>
      <button>Search</button>
      </Col>
    </Nav>
  );
}

export default Header;
