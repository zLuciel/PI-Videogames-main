import { useState} from 'react'
import { useDispatch } from 'react-redux';
//import { CardSearch } from "./CardSearch";
//import { BiSearch } from 'react-icons/bi';
import { ContainerSearch } from "./css/Search";
import { getSearch } from '../redux/actions/actions';
export const Search = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
      dispatch(getSearch(search));
    }

  return (
    <ContainerSearch>
    <div className="input-search">
      <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        autoComplete="off"
        placeholder="Search"
      />
    </div>
  </ContainerSearch>
  )
}
