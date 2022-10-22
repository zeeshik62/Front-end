import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/config";
import cardData from "./data";

const ChooseLogin = () => {
  const navigate = useNavigate();
  const handleClick = (argument) => {
    navigate(routes.login, {
      state: {
        userType: argument,
      },
    });
  };
  return (
    <section className='max-w-6xl h-screen grid place-items-center mx-auto px-4 sm:px-6 lg:px-4 py-12'>
      <h1 className='font-bold text-3xl md:text-4xl font-heading text-gray-900 capitalize'>
        please choose what best describes you better
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardData.map((el) => (
          <div
            className='w-full bg-white rounded-lg p-4 flex flex-col justify-center items-center hover:cursor-pointer'
            key={el.id}
            onClick={() => handleClick(el.value)}
          >
            <div className='mb-4'>
              <img
                className='object-center object-cover rounded-full h-36 w-36'
                src={el.image}
                alt='hod_image'
              />
            </div>
            <div className='text-center'>
              <p className='text-xl text-gray-700 font-bold mb-0'>{el.title}</p>
              <p className='text-base text-gray-400 font-normal'>Login</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseLogin;
