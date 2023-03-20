import styled from "styled-components";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Rent = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    id: null,
    title: "",
    photo: "",
    price: "",
    detail: "",
    country: "",
    city: "",
    type: "",
    picture: [],
    habitacion: "",
    banos: "",
    direccion: "",
    rating: "⭐️⭐️⭐️⭐️",
    activa: true,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => {
        if (response.ok) {
          alert("Publicación creada");
        } else {
          throw new Error("Ocurrió un error al crear la publicación");
        }
      })
      .catch((error) => {
        alert(error.message);
      });

    navigate("/home");

    window.location.reload();
  };

  return (
    <Container>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Input
          type="text"
          name="title"
          placeholder="Titulo"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="country"
          placeholder="Pais"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="city"
          placeholder="Ciudad"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="direccion"
          placeholder="Direccion"
          onChange={onChangeHandler}
        />
        <Input
          type="number"
          name="price"
          placeholder="Precio"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="type"
          placeholder="Tipo de propiedad"
          onChange={onChangeHandler}
        />
        <Input
          type="number"
          name="habitacion"
          placeholder="Dormitorios"
          onChange={onChangeHandler}
        />
        <Input
          type="number"
          name="banos"
          placeholder="Baños"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="photo"
          placeholder="Imagen Pricipal"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="picture"
          placeholder="Imagenes Secundarias"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="picture"
          placeholder="Imagenes Secundarias"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="picture"
          placeholder="Imagenes Secundarias"
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="picture"
          placeholder="Imagenes Secundarias"
          onChange={onChangeHandler}
        />
        <button type="submit">Publicar</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const Input = styled.input``;

export default Rent;
