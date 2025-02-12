import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu";
import HeaderMenuWrap from "./components/HeaderMenuWrap";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((t) => !t);
  };
  return (
    <div className="flex p-5 justify-between border-b-1 border-slate-700 w-full">
      <button className="w-6 whitespace-nowrap overflow-hidden box-border" onClick={handleToggle}>
        <span className={`transition-all duration-700 ${toggle ? "-ml-6 opacity-0" : "opacity-100"}`}>🌞</span>
        <span className={`transition-all duration-700 opacity-0 ${toggle && "opacity-100"}`}>🌙</span>
      </button>
      <HeaderMenuWrap>
        <HeaderMenu text="All" />
        <HeaderMenu text="Active" />
        <HeaderMenu text="Completed" />
      </HeaderMenuWrap>
    </div>
  );
}
