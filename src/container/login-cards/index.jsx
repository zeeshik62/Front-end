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
    console.log("object");
  };
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12 ">
        <div className="text-center  text-4xl mb-20  ">Login</div>

        <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
          {cardData.map((el) => {
            return (
              <>
                <div
                  key={el.id}
                  className=" my-1 px-1 w-full md:w-1/2 lg:my-4  lg:w-3/6"
                >
                  <article
                    onClick={() => StudentLogin(el)}
                    className=" 	overflow-hidden hover:border-4 ho hover:border-blue-900 rounded-lg shadow-lg"
                  >
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <div className="no-underline hover:underline text-black">
                          {el.title}
                        </div>
                      </h1>
                      <i className="fa-solid fa-arrow-right"></i>{" "}
                    </header>

                    <div className="flex items-center justify-between leading-none p-2 md:p-4">
                      <p>{el.description}</p>
                    </div>
                  </article>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UsersLogin;
