import { FaHome } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
const SideNav = () => {
  return (
    <nav
      className="surface border fixed right-4 top-1/2 -translate-y-1/2 z-30 py-5 px-3 rounded-2xl flex gap-4 flex-col items-center shadow-sm"
      aria-label="Section navigation"
    >
      <a
        href="#home"
        aria-label="Home"
        title="Home"
        className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <FaHome className="text-[20px]" />
      </a>
      <a
        href="#services"
        aria-label="Services"
        title="Services"
        className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <GrDocumentText className="text-[20px]" />
      </a>
      <a
        href="#experience"
        aria-label="Experience"
        title="Experience"
        className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <FaBriefcase className="text-[20px]" />
      </a>
      <a
        href="#works"
        aria-label="Projects"
        title="Projects"
        className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <BsPersonWorkspace className="text-[20px]" />
      </a>
      <a
        href="#education"
        aria-label="Education"
        title="Education"
        className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <FaUserGraduate className="text-[20px]" />
      </a>
      <a
        href="#contact"
        aria-label="Contact"
        title="Contact"
        className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <MdMessage className="text-[20px]" />
      </a>
    </nav>
  );
};

export default SideNav;
