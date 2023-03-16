import {useState} from 'react'
import { SortContainer,SortSelect } from '../css/BtnFilter'
import {useDispatch} from "react-redux";
import { bySort } from '../../redux/actions/actions';

const BtnSort = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSubOption, setSelectedSubOption] = useState("");
  const dispatch = useDispatch()
  const handleOptionChange = (e) => {
    //setByallSort({...byallSort,type:e.target.value})
    setSelectedOption(e.target.value);
    setSelectedSubOption(""); // Reseteamos la subopción seleccionada al cambiar la opción principal
  };

  const handleSubOptionChange = (e) => {
    setSelectedSubOption(e.target.value);
    const updatedByallSort = { sort: e.target.value, type: selectedOption };
    dispatch(bySort(updatedByallSort));
    setSelectedOption(""); // Ocultamos la segunda lista si se selecciona una opción
  };

  return (
    <SortContainer>
    <SortSelect value={selectedOption} onChange={handleOptionChange}>
      <option value="" disabled defaultValue >Sort by</option>
      <option value="rating">Rating</option>
      <option value="name">Name</option>
    </SortSelect>
    {selectedOption && (
     <SortSelect className='xd' value={selectedSubOption} onChange={handleSubOptionChange}>
        <option value="" disabled selected>Order</option>
        <option value="asc">Ascen</option>
        <option value="desc">Desc</option>
      </SortSelect>
    )}
  </SortContainer>
  )
}

export default BtnSort
