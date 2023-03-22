import styled from "styled-components";

const Profile = () => {
  return (
    <>
      <Header>
        <Nav>
          <Elements>
            <Brand>INMOBATE</Brand>
          </Elements>
        </Nav>
      </Header>
      <Main>
        <Sidebar>
          <div>Section</div>
        </Sidebar>
        <Menu>
          <div>Menu</div>
        </Menu>
      </Main>
      <Footer></Footer>
    </>
  );
};

const Header = styled.header``;

const Nav = styled.nav`
  padding: 0 3rem;
`;

const Elements = styled.div`
  padding: 1em;
`;

const Brand = styled.div``;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Sidebar = styled.section`
  width: 20em;
  border: 1px solid black;
`;

const Menu = styled.section`
  width: 100%;
  border: 1px solid black;
`;

const Footer = styled.footer``;

export default Profile;
