import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeneros, postCreate } from "../redux/actions/actions";
import { ContainerForm } from "./css/Form";
import FechaForm from "./form/FechaForm";
import Plataform from "./form/Plataform";
import Rating from "./form/Rating";
import TextArea from "./form/TextArea";
import TextForm from "./form/TextForm";
import TextImage from "./form/TextImage";

const platformsList = [
  "PlayStation 5",
  "Xbox Series S/X",
  "PlayStation 4",
  "PC",
  "PlayStation 3",
  "Xbox 360",
  "Xbox One",
];

export const Form = ({ Forms, setForms, initialState }) => {
  const dispatch = useDispatch();
  const Generos = useSelector((state) => state.generos);
 const Message = useSelector(state => state.creado);
  const [message, setMessage] = useState('');
  

  useEffect(() => {
    let timer;
    if (Message) {
      setMessage(Message.msg);
      timer = setTimeout(() => setMessage(''), 5000);
    }
    return () => clearTimeout(timer);
  }, [Message]);

  useEffect(()=>{
    dispatch(getGeneros())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleSubmit = (event) => {
    if(Forms.platform.length &&  Forms.genres.length){
       dispatch(postCreate(Forms));
       event.preventDefault();
      // setForms(initialState)
    }
   
  };

  console.log(Message);/// msj:fue creado exitoso
  return (
    <ContainerForm>
      <h2 className="title-form">
        Create <p>Game</p>
      </h2>
      <form className="form-style" onSubmit={handleSubmit}>
        <TextForm
          Form={Forms}
          setForm={setForms}
          name={"name"}
          title={"Name"}
          type={"text"}
        />
        <TextArea Form={Forms} setForm={setForms} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FechaForm Form={Forms} setForm={setForms} />
          <Rating Form={Forms} setForm={setForms} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Plataform
            Form={Forms}
            setForm={setForms}
            name={"platform"}
            title={"Platforms"}
            array={platformsList}
          />
          <Plataform
            Form={Forms}
            setForm={setForms}
            name={"genres"}
            array={Generos}
            title={"Genres"}
          />
        </div>
        <TextImage Form={Forms} setForm={setForms} />
        <button className="btnSumit" type="submit">
         Send to
        </button>
        {message && <div>{message}</div>}
      </form>
      
    </ContainerForm>
  );
};
