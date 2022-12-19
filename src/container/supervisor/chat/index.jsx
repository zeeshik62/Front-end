import { useEffect, useRef, useState } from "react";
import {
  auth,
  addDoc,
  collection,
  db,
  orderBy,
  limit,
  query,
  serverTimestamp,
} from "../../../services/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getChatData } from "../../../services/http-services/supervisor";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { ContainerLoader } from "../../../components/common";

const SupervisorChat = () => {
  const [selectedUser, setSelectedUser] = useState([]);
  const [input, setInput] = useState("");
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState("");
  const [chat, setChat] = useState([]);
  const [user] = useAuthState(auth);
  const dummy = useRef();
  const messagesRef = collection(db, "messages");
  const _query = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(_query, { idField: "id" });
  const { user: supervisor } = useSelector((state) => state.user);

  //   useEffect(() => {
  //     getSupervisorDetails();
  //   }, []);
  useEffect(() => {
    if (messages) {
      let chat = messages.filter((el) => el.receiver == supervisor?._id || el.sender == supervisor?._id);
      getStudentDetails(chat);
      setChat(messages);
    }
  }, [messages]);

  const getStudentDetails = (params) => {
    let arr = params.map((el) => {
      if (el.sender == supervisor?._id) return { studentId: el.receiver };
      else return { studentId: el.sender };
    });
    setLoading(true);
    getChatData({
      values: arr,
      cbSuccess: ({ studentDetails }) => {
        let arr = studentDetails.filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i);
        setSelectedUser(arr);
        setActive(arr[0]);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };

  const handleSend = async () => {
    try {
      setLoading(true);
      const { photoURL } = user;
      await addDoc(messagesRef, {
        text: input,
        createdAt: serverTimestamp(),
        sender: supervisor?._id,
        receiver: active._id,
        photoURL,
      });
      setInput("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
    } catch (error) {
      console.log("🚀 ~ file: index.jsx:60 ~ handleSend ~ error", error);
      toast.error(error.messages);
      setLoading(false);
    }
  };
  if (loading) return <ContainerLoader />;
  return (
    <div className='container mx-auto shadow-lg rounded-lg'>
      <div className='px-5 py-5 flex justify-between items-center bg-white border-b-2'>
        <div className='font-semibold text-2xl'>Project Chat</div>
      </div>
      {chat.length > 0 ? (
        <div className='flex flex-row justify-between bg-white'>
          <div className='flex flex-col w-2/5 border-r-2 overflow-y-auto'>
            {selectedUser.length > 0
              ? selectedUser.map((student) => (
                  <div
                    className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 hover:cursor-pointer ${
                      active.name == student.name
                        ? "border-l-2 border-app-color"
                        : "border-l-2 border-app-color"
                    }`}
                    onClick={() => setActive(student)}
                  >
                    <div className='w-1/4'>
                      <img
                        src='https://source.unsplash.com/_7LbC5J-jw4/600x600'
                        className='object-cover h-12 w-12 rounded-full'
                        alt=''
                      />
                    </div>
                    <div className='w-full'>
                      <div className='text-lg font-semibold'>{student.name}</div>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className='w-full px-5 flex flex-col justify-between'>
            <div className='flex flex-col mt-5' ref={dummy}>
              {chat.length > 0 &&
                chat.map((msg) =>
                  msg.receiver === supervisor._id ? (
                    <div className='flex justify-end mb-4' key={msg.id}>
                      <div className='flex flex-col'>
                        <div className='mr-2 py-3 px-4 bg-gray-400 rounded-bl-lg rounded-tl-lg rounded-tr-lg text-white'>
                          {msg.text}
                        </div>
                        <span className='mr-2 block text-sm text-gray-700 dark:text-gray-400'>
                          {moment
                            .utc(msg.createdAt?.seconds * 1000)
                            .startOf("hour")
                            .fromNow()}
                        </span>
                      </div>
                      <img
                        src={msg.photoURL || "https://avatars.dicebear.com/api/adventurer/me.svg"}
                        className='object-cover h-8 w-8 rounded-full'
                        alt=''
                      />
                    </div>
                  ) : (
                    <div className='flex justify-start mb-4' key={msg.id}>
                      <img
                        src={msg.photoURL || "https://avatars.dicebear.com/api/adventurer/me.svg"}
                        className='object-cover h-8 w-8 rounded-full'
                        alt=''
                      />
                      <div className='flex flex-col'>
                        <div className='ml-2 py-3 px-4 bg-app-color rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white'>
                          {msg.text}
                        </div>
                        <span className='ml-2 block text-sm text-gray-700 dark:text-gray-400'>
                          {moment
                            .utc(msg.createdAt.seconds * 1000)
                            .startOf("hour")
                            .fromNow()}
                        </span>
                      </div>
                    </div>
                  )
                )}
            </div>
            <div className='border-t-2 border-gray-200 px-4 py-2'>
              <div className='relative flex'>
                <input
                  type='text'
                  placeholder='Write your message!'
                  className='w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3'
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <div className='absolute right-0 items-center inset-y-0 hidden sm:flex'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-[#10b981] hover:bg-blue-400 focus:outline-none'
                    onClick={handleSend}
                  >
                    <span className='font-bold'>Send</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-6 w-6 ml-2 transform rotate-90'
                    >
                      <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center'>
          <p className='font-medium text-lg my-8'>There is no chat room available. </p>
        </div>
      )}
    </div>
  );
};

export default SupervisorChat;
