import { FaHome } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import ThemeToggle from "../common/ThemeToggle";
const SideNav = () => {
  return (
    <nav
      className="surface border fixed left-1/2 top-2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full px-2.5 py-2 shadow-sm md:left-auto md:right-4 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:flex-col md:gap-3 md:rounded-2xl md:px-2.5 md:py-3 lg:right-6"
      aria-label="Section navigation"
    >
      <ThemeToggle />

      <a
        href="#home"
        aria-label="Home"
        title="Home"
        className="size-8 lg:size-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <FaHome className="text-[20px]" />
      </a>
      <a
        href="#services"
        aria-label="Services"
        title="Services"
        className="size-8 lg:size-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <GrDocumentText className="text-[20px]" />
      </a>
      <a
        href="#experience"
        aria-label="Experience"
        title="Experience"
        className="size-8 lg:size-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <FaBriefcase className="text-[20px]" />
      </a>
      <a
        href="#works"
        aria-label="Projects"
        title="Projects"
        className="size-8 lg:size-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <BsPersonWorkspace className="text-[20px]" />
      </a>
      <a
        href="#education"
        aria-label="Education"
        title="Education"
        className="size-8 lg:size-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <FaUserGraduate className="text-[20px]" />
      </a>
      <a
        href="#contact"
        aria-label="Contact"
        title="Contact"
        className="size-8 lg:size-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-(--surface-muted) hover:bg-(--accent) duration-200"
      >
        <MdMessage className="text-[20px]" />
      </a>
    </nav>
  );
};

export default SideNav;
