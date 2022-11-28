import { useEffect, useState, useRef } from "react";
import NoProjects from "../../../assets/img/no-projects.png";
import AddTeamMembers from "../../../components/students/add-team-members";
import { NoContent } from "../../../components/common";
import { getTeam } from "../../../services/http-services/students";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getUserFromLocal } from "../../../utils";
import { slice as userSlice } from "../../../store/slices/user";
import placeholder from "../../../assets/icons/placeholder.png";

const TeamMembers = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTeam, setShowTeam] = useState([]);
  const { user } = useSelector((state) => state.user);
  const dataFetchedRef = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    if (user) getTeamMember();
    else {
      const _user = getUserFromLocal();
      dispatch(userSlice.actions.user(_user));
    }
  }, []);

  const getTeamMember = () => {
    getTeam({
      id: user._id,
      cbSuccess: ({ teamData }) => {
        setShowTeam(teamData);
      },
      cbFailure: (error) => {
        toast.error(error);
      },
    });
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      {showTeam.length > 0 ? (
        <div className='sm:px-6 w-full'>
          <div className='px-4 md:px-10 py-4 md:py-7'>
            <div className='lg:flex items-center justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800'>
                Team
              </p>
            </div>
          </div>
          <div className='bg-white px-4 md:px-8 xl:px-10 overflow-x-auto'>
            <table className='w-full whitespace-nowrap'>
              <thead>
                <tr className='h-20 w-full text-sm leading-none text-gray-600'>
                  <th className='font-normal text-left pl-4'>#</th>
                  <th className='font-normal text-left pl-11'>Name</th>
                  <th className='font-normal text-left'>Section</th>
                  <th className='font-normal text-left'>Status</th>
                  <th className='font-normal text-left'>Created</th>
                  <th className='font-normal text-left w-32'>Actions</th>
                </tr>
              </thead>
              <tbody className='w-full'>
                {showTeam.map((ele, i) => (
                  <tr
                    className='h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100'
                    key={ele._id}
                  >
                    <td className='pl-4'>{i + 1}</td>
                    <td className='pl-11'>
                      <div className='flex items-center'>
                        <img className='shadow-md rounded-full w-10 h-10 mr-3' src={placeholder} />
                        {ele.name}
                      </div>
                    </td>
                    <td>
                      <div className='flex items-center mr-16'>{ele.section}</div>
                    </td>
                    <td>
                      <div
                        className={`w-20 h-6 flex items-center mr-16 justify-center rounded-full ${
                          ele.status ? "bg-green-50" : "bg-yellow-50"
                        }`}
                      >
                        <p className={`text-xs mt-4 ${ele.status ? "text-green-500" : "text-yellow-500"}`}>
                          {ele.status ? "Approved" : "Pending"}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className='flex items-center mr-16'>
                        {moment(ele.teamCreatedAt).format("MMMM Do YYYY")}
                      </div>
                    </td>
                    <td>
                      <div className='flex items-center'>
                        <button className='bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none'>
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          <NoContent imgSrc={NoProjects} title='You do not have team members.' />
          <div
            className='mx-2 my-2 flex items-center bg-transparent cursor-pointer transition duration-150 ease-in-out hover:bg-app-color hover:text-white rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-600'
            onClick={() => setShowModal(true)}
          >
            <span className='mr-2'>
              <i className='fa fa-plus' aria-hidden='true'></i>
            </span>
            Add Them Here
          </div>
        </>
      )}

      {showModal && <AddTeamMembers modalHandler={() => setShowModal(false)} />}
    </div>
  );
};

export default TeamMembers;
