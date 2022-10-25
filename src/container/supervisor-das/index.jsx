import { useState } from "react";
import Modal from "./showModel";
const Supervisor = () => {
  const [showModel, setShowModal] = useState(false);

  let arr = [
    {
      id: 1,
      tittle: "hello",
      describe: "This is mu Id",
    },
  ];
  const [list] = useState(arr);

  return (
    <>
      {showModel ? <Modal close={() => setShowModal(false)} modelState={showModel} /> : null}

      <div className='container'>
        <h1 className='mt-10 text-center'>Projects</h1>
        <div className='flex flex-col'>
          <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='overflow-hidden'>
                <div className='flex items-start ...'>
                  <button
                    onClick={() => setShowModal(true)}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                  >
                    Add{" "}
                  </button>
                </div>

                <table className='min-w-full'>
                  <thead className='border-b'>
                    <tr>
                      <th scope='col' className='text-sm text-gray-900 px-6 py-4 text-left'>
                        #
                      </th>
                      <th scope='col' className='text-md font-bold text-gray-900 px-6 py-4 text-left'>
                        Project Name
                      </th>
                      <th scope='col' className='text-md font-bold text-gray-900 px-6 py-4 text-left'>
                        Description
                      </th>
                      <th scope='col' className='text-md font-bold text-gray-900 px-6 py-4 text-left'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  {list.map((el) => {
                    return (
                      <tbody key={el.id}>
                        <tr className='border-b'>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                            {el.id}
                          </td>
                          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                            {el.tittle}
                          </td>
                          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                            {el.describe}
                          </td>
                          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                            @mdo
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supervisor;
