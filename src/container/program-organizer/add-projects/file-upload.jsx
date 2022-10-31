import { useState } from "react";
import { toast } from "react-toastify";
import { niceBytes } from "../../../utils/config";
import "./FileUpload.css";

const FileUpload = ({ imageFile }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileDetails, setSelectedFileDetails] = useState({
    name: "",
    type: "",
    size: "",
  });
  const [fileFormat, setFileFormat] = useState(null);

  const changeHandler = (event) => {
    let getFiles = event.target.files[0];

    let fileName = getFiles.name;
    let fileType = getFiles.type;
    let fileSize = getFiles.size;
    let reg = /(?:\.([^.]+))?$/;
    let fileTxt = reg.exec(fileName)[1];
    if (
      fileType === "application/pdf" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      if (fileName.length >= 12) {
        let splitName = fileName.split(".");
        fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
      }
      setSelectedFileDetails({
        name: fileName,
        type: fileType,
        size: niceBytes(fileSize),
      });
      setFileFormat(fileTxt);
      setSelectedFile(getFiles);
      imageFile(getFiles);
    } else {
      toast.warning(`${fileName} must be a pdf or docx file.`);
    }
  };

  return (
    <div className="wrapper">
      <form>
        <input
          className="file-input"
          id="file-upload"
          type="file"
          name="file"
          hidden
          accept="application/*"
          onChange={changeHandler}
        />
        <label
          htmlFor="file-upload"
          className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
        >
          <p>Browse File to Upload</p>
          <svg
            className="z-10 w-12 h-12 text-app-color"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
          </svg>
        </label>
      </form>
      {selectedFile ? (
        <section className="uploaded-area">
          <li className="row">
            <div className="content">
              {fileFormat === "pdf" ? (
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-file-word-o" aria-hidden="true"></i>
              )}
              <div className="details">
                <span className="name">
                  {selectedFileDetails.name} • Uploaded
                </span>
                <span className="size">{selectedFileDetails.size}</span>
              </div>
            </div>
            <i className="fa fa-check" aria-hidden="true"></i>
            <i
              className="fa fa-trash hover:cursor-pointer"
              aria-hidden="true"
              onClick={() => setSelectedFile(null)}
            ></i>
          </li>
        </section>
      ) : null}
    </div>
  );
};

export default FileUpload;
