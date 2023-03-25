import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomBar, Container, Content, Button } from "./styles";
import { uploadImage } from "./firebase";
import { useDispatch } from "react-redux";
import { setImage } from "../../app/slices/propertyToAdd";

const Step6 = () => {
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleUpload(file) {
    const url = await uploadImage(file);
    dispatch(setImage(url));
  }

  return (
    <Container>
      <Content>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <Button onClick={() => handleUpload(file)}>Upload</Button>
      </Content>

      <BottomBar>
        <Button onClick={() => navigate("/addproperty/step5")}>Atras</Button>
        <Button onClick={() => navigate("/addproperty/step7")}>
          Siguiente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step6;
