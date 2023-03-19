import {useState,useCallback} from 'react'
import { BtnSyled } from '../css/BtnFilter'
import {useDispatch} from "react-redux";
import { getCreateFilter } from '../../redux/actions/actions';
export const BtnCreate = () => {
  const dispatch = useDispatch()
  
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleChange = useCallback((event) => {
    //console.log(event.target.name);
    const newValue = event.target.value
    setOpcionSeleccionada(newValue);
    dispatch(getCreateFilter(newValue))
  }, [dispatch]);

  return (
    <BtnSyled  value={opcionSeleccionada} onChange={handleChange}>
      <option value="" disabled defaultValue >Create</option>
      <option value="all">All</option>
      <option value="db">Db</option>
      <option value="api">Api</option>
    </BtnSyled>
  );
}
