import { AllUser } from "./AllUser";
import { Chatting } from "./Chatting";
import { Navbar } from "./Navbar";

export const Layout = (props) => {
  return (
    <div className="">
      <Navbar />

      <div className="grid grid-cols-5 w-full h-screen">
        <AllUser />
        <div className="border-4 p-4 col-span-4">{props.children}</div>
      </div>

      <Chatting />
    </div>
  );
};
