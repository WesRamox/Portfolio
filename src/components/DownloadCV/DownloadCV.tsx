import { FaDownload } from "react-icons/fa";
import "./DownloadCV.css";

const DownloadCV = () => {
  return (
    <button className="nav-item flex items-center justify-center gap-2 download-cv h-10 px-5 text-white">
      Download CV <FaDownload />
    </button>
  );
};

export default DownloadCV;
