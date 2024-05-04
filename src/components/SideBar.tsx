import hospital from "../assets/hospital.png";
import logout from "../assets/logout.png";

interface Props {
  logOut: () => void;
}
const SideBar = () => {
  return (
    // provide background and box shadow
    //channel-list__sidebar
    <div className="hidden sm:block w-[72px] bg-[#1154c7] h-full">
      {/* channel-list__sidebar__icon1 */}
      <div className="w-[44px] h-[44px] m-[14px]  rounded-[9999px] ">
        {/* icon1_inner */}
        <div className="h-full flex items-center justify-center">
          <img width="30" src={hospital} alt="Hospital" />
        </div>
      </div>

      {/* channel-list__sidebar__icon2 */}
      <div className="cursor-pointer w-[44px] h-[44px] m-[14px]  rounded-[9999px] ">
        {/* icon2__inner */}
        <div
          className="h-full flex items-center justify-center "
          onClick={() => console.log("logging out")}
        >
          <img src={logout} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
