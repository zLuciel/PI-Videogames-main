import {useState} from 'react'
import "./InputForm.css"

const TextImage = ({Form,setForm}) => {
    const [error, setError] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    // Validar que el nombre solo tenga letras y no esté vacío
    const regex = /^https?:\/\/.*\.(png|jpe?g)$/i;
    if (newName === "" || regex.test(newName)) {
      setForm({...Form,image:newName});
      setError("");
    } else {
      setError("Must be in jpg, jpeg or png format");
    }
  };
      
  return (
    <div className="form-row">
       <label className='text-label' htmlFor="image">Image</label>
      <input
      autoComplete="off"
       className='form-bg text-input'
        type="text"
        id="image"
        name="image"
        onChange={handleNameChange}
        placeholder="Enter an image"
        required
      />
      <span style={{color:"#B80000"}}>{error}</span>
    </div>
  )
}

export default TextImage