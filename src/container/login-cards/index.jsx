import { useNavigate } from "react-router-dom";
import cardData from "./card-data";
import { routes } from "../../utils/config";

const UsersLogin = () => {
  const navigate = useNavigate();

  const StudentLogin = ({ title }) => {
    navigate(routes.login, {
      state: {
        userType: title,
      },
    });
  };
  return (
    <div className='h-screen grid place-content-center px-4 md:px-12'>
      <h1 className='text-center text-4xl mb-20'>Welcome To Final Year Project</h1>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {cardData.map((el) => {
          return (
            <div
              key={el.id}
              className='w-full md:w-1/2 lg:my-4 lg:w-1/2 rounded shadow hover:cursor-pointer hover:border hover:border-blue-900'
            >
              <article onClick={() => StudentLogin(el)}>
                <header className='flex items-center justify-between leading-tight md:p-4'>
                  <h1 className='text-lg'>{el.title}</h1>
                  <i className='fa fa-arrow-circle-right fa-lg' aria-hidden='true'></i>
                </header>

                <p className='leading-none p-2 md:p-4'>{el.description}</p>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersLogin;
