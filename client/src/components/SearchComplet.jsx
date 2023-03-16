import React from 'react'
import { SearchComplextFlex } from './css/SearchCompletx'
import { Search } from './Search'
const SearchComplet = () => {
  return (
    <SearchComplextFlex>
        <Search/>
        <div className='user-main'>
         <h3><p>Maria</p>Gomez</h3> <div className='foto-user'><img src="https://d9u7mg5dz9s9d.cloudfront.net/597399/uploads/1fdb99a0-81e6-11ed-a230-8b731d015bf5_450_250.jpeg" alt="user"/></div>
        </div>
     </SearchComplextFlex>
  )
}

export default SearchComplet
