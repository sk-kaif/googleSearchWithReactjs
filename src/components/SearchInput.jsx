import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const {query} = useParams();

  const [searchQuery,setSearchQuery] = useState(query || "")
  const navigate = useNavigate()




  const searchQueryHandler=(e)=>{
    if(e.key === 'Enter' && searchQuery.length >1){
      navigate(`/${searchQuery}/${1}`)      
    }
  }

  return (
    <div id="searchBox" className="h-[46px] px-2 w-full md:w-[584px] flex items-center gap-3 md:px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">

      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87]"  
      />

      <div className="flex items-center md:gap-3 gap-2">
        {searchQuery && <IoMdClose size={24} color="#70757a" className="cursor-pointer" onClick={() => setSearchQuery("")}/>}
        <img className="md:h-8 md:w-8 w-4 h-4 cursor-pointer" src={MicIcon} alt="" />
        <img className="md:h-8 md:w-8 w-4 h-4 cursor-pointer" src={ImageIcon}/>
      </div>
    </div>
  )
}

export default SearchInput