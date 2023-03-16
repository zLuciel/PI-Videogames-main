import React from 'react'

 const TextArea = ({Form,setForm}) => {
  const handleInputChange = (event) => {
    setForm({
      ...Form,
      [event.target.name]: event.target.value
    });
  };
  return (
  <div className="form-row">
  <label className='text-label' htmlFor="description">Descripción</label>
  <textarea
  className='form-bg'
    id="description"
    name="description"
    rows="4"
    cols="50"
    placeholder="Write here the description"
    required
    value={Form.description}
    onChange={handleInputChange}
  ></textarea>
  </div>
  )
}

export default TextArea