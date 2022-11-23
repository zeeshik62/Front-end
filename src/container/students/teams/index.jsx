import { useState } from "react";
import NoContent from "../../../components/common/no-content";
import NoProjects from "../../../assets/img/no-projects.png";
import AddTeamMembers from "../../../components/students/add-team-members";

const TeamMembers = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center'>
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
      {showModal && <AddTeamMembers modalHandler={() => setShowModal(false)} />}
    </div>
  );
};

export default TeamMembers;
