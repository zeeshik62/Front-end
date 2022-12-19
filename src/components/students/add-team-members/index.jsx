import { useState } from "react";
import { toast } from "react-toastify";
import { sendRequestToTeam } from "../../../services/http-services/students";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import { useSelector } from "react-redux";
import axios from "axios";

const AddTeamMembers = ({ modalHandler }) => {
  const [studentList, setStudentList] = useState([]);
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const { user } = useSelector((state) => state.user);
  const animatedComponents = makeAnimated();

  const loadOptions = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}students`);
      return data._students.filter((el) => el._id !== user._id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = () => {
    try {
      if (!selectedValue.length) toast.warn("Please choose your team first!");
      else {
        sendRequestToTeam({
          values: {
            teamMakerName: user?._id,
            teamMembers: selectedValue.map((el) => {
              return { id: el._id, status: false };
            }),
          },
          cbSuccess: ({ message }) => {
            toast.success(message);
            modalHandler();
          },
          cbFailure: (error) => {
            toast.error(error);
          },
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div
      className='py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0'
      id='modal'
    >
      <div className='bg-gray-700 absolute top-0 right-0 bottom-0 left-0 opacity-50'></div>
      <div role='alert' className='container mx-auto w-11/12 md:w-2/3 max-w-lg z-50'>
        <div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
          <div className='w-full flex justify-start text-gray-600 mb-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-wallet'
              width={52}
              height={52}
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12' />
              <path d='M20 12v4h-4a2 2 0 0 1 0 -4h4' />
            </svg>
          </div>
          <h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 capitalize'>
            Choose your team
          </h1>

          <label htmlFor='email2' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
            Roll Number
          </label>
          <div className='relative mb-5 mt-2'>
            <AsyncSelect
              cacheOptions
              components={animatedComponents}
              defaultOptions
              isMulti
              className='basic-multi-select'
              classNamePrefix='select'
              value={selectedValue}
              getOptionLabel={(e) => e.rollNum}
              getOptionValue={(e) => e.rollNum}
              loadOptions={loadOptions}
              onChange={(params) => setSelectedValue(params)}
            />
          </div>
          <div className='flex items-center justify-start w-full'>
            <button
              className='focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'
              onClick={handleSubmit}
            >
              Send Request
            </button>
            <button
              className='focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
              onClick={() => modalHandler()}
            >
              Cancel
            </button>
          </div>
          <div
            className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out'
            onClick={() => modalHandler()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-label='Close'
              className='icon icon-tabler icon-tabler-x'
              width={20}
              height={20}
              viewBox='0 0 24 24'
              strokeWidth='2.5'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMembers;
