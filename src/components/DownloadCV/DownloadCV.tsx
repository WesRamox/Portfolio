import { FaDownload } from "react-icons/fa";
import "./DownloadCV.css";
import curriculo from "../../assets/Curriculo.pdf"

const DownloadCV = () => {

 
  return (
    <a href={curriculo} className="nav-item flex items-center justify-center gap-2 download-cv h-10 px-5 text-white" download>
      Download CV <FaDownload />
    </a>
  );
};

export default DownloadCV;
