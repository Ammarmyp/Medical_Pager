import React, { ChangeEvent, useState } from "react";
import searchIcon from "../assets/SearchIcon.svg";

const ChannelSearch = () => {
  const [query, setQuery] = useState<string | null>();
  const [isLoading, setLoading] = useState(false);

  const onSearch = (e: ChangeEvent) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.textContent);
    getChannel(e.target.textContent);
  };

  const getChannel = (text) => {
    //fetch channels
  };

  return (
    <div className="mt-8 mb-4 ">
      <div className="relative flex justify-between border-[2px] border-slate-500 rounded-lg w-[95%] m-1 p-1  focus:ring-blue-500 focus-within:border-blue-500">
        <div className=" m-2 w-[25px]">
          <img  src={searchIcon} alt="Search Icon" />
        </div>

        <input
          className="  bg-inherit w-full h-full  border-slate-500 outline-none text-white rounded-md text-[16px] block p-1.5  "
          type="text"
          placeholder="Search"
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
