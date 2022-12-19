import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getDropdownItems, sendAnnouncement } from "../../../services/http-services/announcement";
import FileUpload from "../add-projects/file-upload";
import { makeStudents, makeSupervisor } from "../add-projects/helper-methods";
import { ContainerLoader } from "../../../components/common";
import Select from "react-select";

const Announcement = () => {
  const [supervisors, setSupervisors] = useState([]);
  const [state, setState] = useState({ description: "", file: null, supervisorList: [], studentList: [] });
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getSupervisors();
  }, []);

  const handleSend = () => {
    setLoading(true);
    sendAnnouncement({
      values: { ...state, userId: user._id },
      cbSuccess: () => {
        setLoading(false);
        toast.success("Announcement send");
      },
      cbFailure: (error) => {
        setLoading(false);
        toast.error(error.message);
      },
    });
  };

  const getSupervisors = () => {
    getDropdownItems({
      cbSuccess: ({ _supervisor }, { _students }) => {
        setSections(makeStudents(_students));
        setSupervisors(makeSupervisor(_supervisor));
      },
      cbFailure: (error) => {
        toast.error(error.message);
      },
    });
  };
  if (loading) return <ContainerLoader />;
  return (
    <div>
      <h3 className='py-4'>Announcement</h3>
      <div
        className='wrap-input100 validate-input bg0 rs1-alert-validate'
        data-validate='Please Type Your Message'
      >
        <span className='label-input100'>Announcement description (optional)</span>
        <textarea
          className='input100'
          name='projectDescription'
          placeholder='Your message here...'
          onChange={(e) => setState({ ...state, description: e.target.value })}
          value={state.description}
        ></textarea>
      </div>
      <FileUpload imageFile={(e) => setState({ ...state, file: e })} />
      <div className='flex flex-row'>
        <div className='wrap-input100 border-0 bg1 mr-4'>
          <p className='label-input100 my-1'>Select supervisor name</p>
          <Select
            className='basic-multi-select mt-3'
            classNamePrefix='select'
            isMulti={true}
            options={supervisors}
            onChange={(e) => setState({ ...state, supervisorList: e })}
          />
        </div>
        <div className='wrap-input100 border-0 bg1 ml-4'>
          <p className='label-input100 my-1'>Select student name</p>
          <Select
            className='basic-multi-select mt-3'
            classNamePrefix='select'
            isMulti={true}
            options={sections}
            onChange={(e) => setState({ ...state, studentList: e })}
          />
        </div>
      </div>

      <button
        className='bg-app-color text-white font-bold py-2 px-4 rounded float-right'
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default Announcement;
