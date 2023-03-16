import {useState} from "react";
import { ContainerForm, ContainerLoli, CreateContainer } from "./css/CreateGames";
import fondo from "../assets/fondo.webp";
import { Form } from "./Form";
import Loli from "../assets/FormLoli.png"


const initialState = {
  name: "",
  description: "",
  released: "",
  rating: 0,
  platform: [],
  image: "",
  genres: [], // si no funciona cambia la tabla
};

export const CreateGames = () => {
  const [Forms, setForms] = useState(initialState);
  const handleDelete = (eliminar,name)=>{
    setForms({
      ...Forms,
      [name]: Forms[name].filter((el) => el !== eliminar),
    })
  }
  return (
    <CreateContainer fondo={fondo}>
      <div className="bg"></div>
      <ContainerForm>
        <div className="CardForm">
            <div className="flex-center">
              <Form Forms={Forms} setForms={setForms} initialState={initialState} />
            </div>
            <ContainerLoli>
            <div className="absolute-text">     
            Selected platforms:<br/>
        {Forms.platform.length > 0  && Forms.platform.map((plataforms) => (
          <button onClick={()=>handleDelete(plataforms,"platform")} key={plataforms}> {plataforms} </button>
        ))} <br/>Selected genres:<br/>
        {Forms.genres.length > 0  && Forms.genres.map((genre) => (
          <button onClick={()=>handleDelete(genre,"genres")} key={genre}> {genre} </button>
        ))}
              </div>
              <div className="loli"><img src={Loli} alt="loli" /></div>
            </ContainerLoli>
        </div>
      </ContainerForm>
    </CreateContainer>
  );
};
