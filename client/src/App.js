import logo from "./logo.png";
import img from "./homepage-bg.jpg";
import SendIcon from "@mui/icons-material/Send";
import ReplyIcon from "@mui/icons-material/Reply";
import TopicIcon from "@mui/icons-material/Topic";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div className="bg-[#EAEAEA]">
      <nav className="bg-[#364253] text-white flex justify-between items-center px-5">
        <div className="flex justify-center items-center gap-2">
          <a href="/">
            <img src={logo} alt="logo" className="md:w-[250px] w-[150px]"></img>
          </a>
        </div>

        <ul className="flex w-full justify-end max-md:hidden">
          <li className="p-5">
            <a href="/">POSTS</a>
          </li>
          <li className="p-5">
            <a href="/">DEPARTMENTS</a>
          </li>
        </ul>
        <button className="bg-[#1D84B5] px-5 py-2">LOGIN</button>
      </nav>
      <div className="bg-[#364253] h-screen w-full flex flex-col gap-5 justify-center items-center p-5">
        <p className=" text-white text-3xl md:text-5xl font-semibold text-center">
          WELCOME TO AISSMS FORUM
        </p>
        <p className="text-white text-lg md:text-2xl italic text-center">
          The most popular forum on the internet!
        </p>
        <form className="w-auto md:w-1/2 flex py-5">
          <input
            placeholder="Enter a keyword..."
            className="p-3 md:p-5 bg-[#303B4B] focus:outline-none text-white w-full"
          ></input>
          <button className="py-3 md:py-5 px-5 bg-[#1D84B5] text-white font-medium">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className="bg-white md:mx-20 shadow-md">
        <div className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 bg-[#1D84B5] h-fit">
          <div className="p-16 flex flex-col justify-center gap-10 md:col-span-1">
            <p className="text-white md:text-3xl text-2xl font-semibold">
              JOIN OUR FORUM !
            </p>
            <p className="md:text-xl text-[#364253] italic leading-8 text-lg">
              Talk about anything that's on your mind and see what others think.
              As a guest to our forum you are only able to view posts. When you
              register with the Forumix forum you can join in with topics, start
              new topics and generally be a part of the first level of our
              community.
            </p>
            <button className="bg-[#364253] text-white px-10 py-4 w-fit font-semibold">
              REGISTER NOW!
            </button>
          </div>
          <img src={img} alt="bg" className="md:col-span-1 md:h-full w-full" />
        </div>
        <div className="grid md:grid-cols-3 grid-rows-3 h-fit gap-10 p-10">
          <div className="flex flex-row justify-between shadow-md p-10">
            <div className="bg-[#364253] text-white p-6 rounded-full shadow-md">
              <SendIcon />
            </div>
            <div>
              <p className="md:text-2xl text-lg font-semibold text-right text-[#9AA0A9]">
                POSTS
              </p>
              <p className="text-2xl font-bold text-right">5</p>
            </div>
          </div>

          <div className="flex flex-row justify-between shadow-md p-10">
            <div className="bg-[#1D84B5] text-white p-6 rounded-full shadow-md">
              <TopicIcon />
            </div>
            <div>
              <p className="md:text-2xl text-lg font-semibold text-right text-[#9AA0A9]">
                TOPICS
              </p>
              <p className="text-2xl font-bold text-right">3</p>
            </div>
          </div>

          <div className="flex flex-row justify-between shadow-md p-10">
            <div className="bg-[#FF5A5F] text-white p-6 rounded-full shadow-md">
              <ReplyIcon />
            </div>
            <div>
              <p className="md:text-2xl text-lg font-semibold text-right text-[#9AA0A9]">
                REPLIES
              </p>
              <p className="text-2xl font-bold text-right">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
