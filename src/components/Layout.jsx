import { AllUser } from "./AllUser";
import { Chatting } from "./Chatting";
import { Navbar } from "./Navbar";

export const Layout = (props) => {
  return (
    <div className="">
      <Navbar />

      {/* TODO: 네브바 만큼 높이를 제외시켜야 한다.... */}
      <div className="grid grid-rows-3 h-screen">
        <section className="flex row-span-2">
          <grid className="grid grid-cols-5 w-full">
            <AllUser />
            <div className="border-4 rounded-lg p-4 col-span-4">{props.children}</div>
          </grid>
        </section>

        <section className="row-span-1">
          <Chatting />
        </section>
      </div>
    </div>
  );
};
