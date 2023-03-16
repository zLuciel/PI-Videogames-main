import React, { useMemo, useCallback } from 'react';
import { BtnSyled } from '../css/BtnFilter'

export const Page = ({page,setPage,max}) => {

    const Pages = useMemo(() => { // paginado memoriazmos
        const pages = [];
        for (let i = 1; i <= max; i++) {
          pages.push(i);
        }
        return pages;
      }, [max]);
    
      const handleChange = useCallback((event) => { // cambiar paginado memorizamos
        const newValue = event.target.value;
        setPage(Number(newValue));
      }, [setPage]);

    return (
      <BtnSyled value={page} onChange={handleChange}>
        <option  value="" disabled defaultValue >Page</option>
       {Pages.map((el,index)=>  <option value={(20*index)}>{el}</option>)}
       
      </BtnSyled>
    );
}
