import { Dialog, Transition } from "@headlessui/react";
import { useRef } from "react";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ShowFileModel } from "../../../components";
import { getProjectInfo } from "../../../services/http-services/projects";

const DetailsDialogBox = ({ isOpen, isClose, projectDetail }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const dataFetchRef = useRef(false);

  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    getFileURL();
  }, []);

  const getFileURL = () => {
    getProjectInfo({
      values: { imagePath: projectDetail.imagePath },
      cbSuccess: (data) => {
        setSelectedProject(data);
      },
      cbFailure: (error) => {
        toast.error(error);
      },
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={isClose}>
          <div className='fixed inset-0 bg-black opacity-60' />

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='mb-4 text-xl font-semibold leading-6 text-gray-900 underline'
                  >
                    Project details
                  </Dialog.Title>
                  <div className='mt-2'>
                    <h6>
                      Project Name: <strong>{projectDetail.name}</strong>
                    </h6>
                    <h6>
                      Project description: <strong>{projectDetail.description}</strong>
                    </h6>
                    <h6>
                      Assigned: <strong>{projectDetail.isCompleted ? "Yes" : "No"}</strong>
                    </h6>
                    <h6>
                      Project Stack: <strong>{projectDetail.stack}</strong>
                    </h6>
                    <h6>
                      Project Stage: <strong>{projectDetail.stage}</strong>
                    </h6>
                    <h6>
                      Supervisor Name: <strong>{projectDetail.supervisorName}</strong>
                    </h6>
                    <div className='w-full'>
                      <div className='imageInput'>
                        <i
                          className='fa fa-file-text-o fa-2x hover:cursor-pointer'
                          aria-hidden='true'
                          onClick={() => setShowModal(true)}
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div className='mt-8'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={isClose}
                    >
                      Close it!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {showModal ? (
        <ShowFileModel file={selectedProject?.imagePath} close={() => setShowModal(false)} />
      ) : null}
    </>
  );
};

export default DetailsDialogBox;
