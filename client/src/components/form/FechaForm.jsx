import React from 'react'

const FechaForm = ({Form,setForm}) => {
    const handleInputChange = (event) => {
        setForm({
          ...Form,
          [event.target.name]: event.target.value
        });
      };
  return (
    <div className='form-row'>
      <label className='text-label' htmlFor="released">Released</label>
      <input
      className='form-bg selectForm'
        type="date"
        id="released"
        name="released"
        value={Form.released}
        onChange={handleInputChange}
        required
      />
    </div>
  )
}

export default FechaForm
