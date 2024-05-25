const SideBar = () => {
  return (
    <div className="hidden sm:block w-[195px] py-2 px-2 rounded bg-[#1E1E1E] opacity-55 shadow-sm m-1 h-full  flex-col">
      <div className="flex justify-between p-1 items-center border-b-[1px] border-slate-600 pb-4 mb-4">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
        <h1 className="text-xl ml-1">Lets Chat!</h1>
      </div>
      <div>
        <p className="y-2 p-1 text-[18px] font-semibold">Types</p>
      </div>
      <div className="p-1 ">
        {["Team", "Direct Messages"].map((type, index) => (
          <p
            key={index}
            className="my-2 p-1  rounded-lg hover:bg-[#3C3C3C] transition-all duration-200"
          >
            {type}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
