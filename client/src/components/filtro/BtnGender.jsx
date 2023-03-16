import {useState,useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generoFilter } from '../../redux/actions/actions';

import { BtnSyled } from '../css/BtnFilter'

const BtnGender = () => {
  const Generos = useSelector(state => state.generos)
  const dispatch = useDispatch()
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleChange = useCallback((event) => {
    const newValue = event.target.value;
    setOpcionSeleccionada(newValue);
    dispatch(generoFilter(newValue))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

 /*useEffect(()=>{
   dispatch(generoFilter(opcionSeleccionada))
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[opcionSeleccionada])*/


  
  return (
    <BtnSyled value={opcionSeleccionada} onChange={handleChange}>
    <option  value="" disabled defaultValue >Gender</option>
  
    {Generos.map(gen=> <option value={gen}>{gen}</option> )}
  </BtnSyled>
  )
}

export default BtnGender
