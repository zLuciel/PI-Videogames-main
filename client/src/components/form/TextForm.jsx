import {useState} from 'react'
import "./InputForm.css"
const TextForm = ({Form,setForm,name,title,type}) => {
    const [error, setError] = useState("");

    const handleNameChange = (event) => {
        const newName = event.target.value;
        // Validar que el nombre solo tenga letras y no esté vacío
        const regex = /^[a-zA-Z ]+$/;
        if (newName === "" || regex.test(newName)) {
          setForm({...Form,name:newName});
          setError("");
        } else {
          setError("The name must contain only letters");
        }
      };
      
  return (
    <div className="form-row">
       <label className='text-label' htmlFor={name}>{title}</label>
      <input
      autoComplete="off"
       className='form-bg text-input'
        type={type}
        id={name}
        name={name}
        value={Form.name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        required
      />
      <span style={{color:"#B80000"}}>{error}</span>
    </div>
  )
}

export default TextForm
