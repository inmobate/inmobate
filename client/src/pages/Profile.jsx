import styled from "styled-components";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Options>
          <Option>Información personal</Option>
          <Option>Inicio de sesión y seguridad</Option>
          <Option>Pagos y cobros</Option>
          <Option>Impuestos</Option>
          <Option>Notificaciones</Option>
          <Option>Privacidad y uso compartido</Option>
          <Option>Preferencias generales</Option>
          <Option>Viajes de trabajo</Option>
          <Option>Herramientas para anfitriones profesionales</Option>
        </Options>
        <div>¿Necesitás desactivar tu cuenta?</div>
        <div>Resolver ahora</div>
      </Main>
      <Footer>Footer</Footer>
    </>
  );
};

const Header = styled.header``;

const Main = styled.main`
  height: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const Options = styled.div`
  height: 768px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  cursor: pointer;
`;

const Option = styled.div`
  border: 1px solid black;
  border-radius: 1em;
`;

const Footer = styled.footer`
  display: none;
`;

export default Profile;
