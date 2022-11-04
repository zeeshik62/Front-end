import { useDispatch } from "react-redux";
import { getProject } from "../../../services/http-services/projects/index";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { slice as projectSlice } from "../../../store/slices/projects";

const ShowProjects = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    getProject({
      cbSuccess: ({ projects }) => {
        dispatch(projectSlice.actions.showStudent(projects));
        setList(projects);
      },
      cbFailure: (error) => {
        toast.error(error);
      },
    });
  };

  return (
    <div className='grid gap-2 lg:grid-cols-4'>
      {list.map((items, key) => (
        <div
          style={{ backgroundColor: "#ECF5E5" }}
          className='w-full rounded-lg shadow-md lg:max-w-sm'
          key={key}
        >
          <div className='p-4'>
            <h4 className='text-xl font-semibold text-blue-600'>{items.name}</h4>
            <button
              onClick={() => navigate(`/program-student/student-view-projects/${items._id}`)}
              className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'
            >
              Read more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowProjects;
