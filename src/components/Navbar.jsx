import { faChevronDown, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState } from "react";
import { FontCanvas } from "./FontCanvas";

export const Navbar = ({ fontFamily, onFontChange, toggleTheme }) => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const onToggleCanvas = () => {
    setIsCanvasOpen((prev) => !prev);
  };

  return (
    <div className="flex mb-5 mt-7 justify-between items-center">
      <FontAwesomeIcon
        className="text-slate-500"
        icon={faBook}
        size="2xl"
      ></FontAwesomeIcon>
      <div className="flex gap-6">
        <div className="relative" onClick={onToggleCanvas}>
          <button className=" flex items-center gap-3 px-6 py-3 border-r-[1px] dark:border-[#3b3b3b]">
            <p>{fontFamily}</p>
            <FontAwesomeIcon
              className="text-lightPurple"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </button>
          <FontCanvas isCanvasOpen={isCanvasOpen} onFontChange={onFontChange}/>
        </div>
        <ThemeSwitcher toggleTheme={toggleTheme}></ThemeSwitcher>
      </div>
    </div>
  );
};
