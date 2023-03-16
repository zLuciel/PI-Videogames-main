import React from 'react'

const Rating = ({Form,setForm}) => {
  
    const handleInputChange = (event) => {
      const newvalor = event.target.value

      if(newvalor >= 0 && newvalor <= 5) {
        setForm({
          ...Form,
          [event.target.name]: Number(newvalor)
        });
      }
};

  return (
    <div className="form-row">
    <label className='text-label' htmlFor="rating">Rating</label>
    <input
    className='form-bg selectForm'
      type="number"
      id="rating"
      name="rating"
      min={0}
      max={5}
      step={0.1}
      value={Form.rating}
      onChange={handleInputChange}
      required
    />
  </div>
  )
}

export default Rating
