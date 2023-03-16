


const Plataform = ({Form,setForm,name,title,array}) => {

  const handlePlataformaChange = (event) => {
    const plataformaSeleccionada = event.target.value;
    if (!Form[name].includes(plataformaSeleccionada)) {
        setForm({
            ...Form,
            [event.target.name]: [...Form[name], plataformaSeleccionada],
        });
    }
  };
  const hasSelectedValue = Form[name].length > 0;

  return (
    <div className="form-row">
      <label className='text-label' htmlFor={name}>{title}</label>
      <select
      className='form-bg selectForm'
        id={name}
        name={name}
        onChange={handlePlataformaChange}
        defaultValue=""
        required
      >
        <option value="" disabled>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </option>
        {array.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      {!hasSelectedValue && <span style={{color:"#B80000"}}>Select options</span>}
    </div>
  );
};

export default Plataform;
