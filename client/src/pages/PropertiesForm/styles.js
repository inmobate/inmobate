import styled from "styled-components";

export const Container = styled.div`
  border: none;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 750px;
  max-height: 750px;
  display: flex;
`;

export const ContentColum = styled.div`
  max-width: 750px;
  max-height: 750px;
  display: flex;
  flex-direction: column;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FlexGrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BottomBar = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: grey;
`;

export const Type = styled.div`
  padding: 3px;
  margin: 0.5rem;
  cursor: pointer;
`;

export const Section = styled.section`
  margin: 1rem;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 300px;
    margin-top: .5rem
  }
`;
