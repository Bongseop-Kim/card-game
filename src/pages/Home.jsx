import { Layout } from "../components/Layout";
import { ReactComponent as Lock } from "../assets/lock.svg";
import { ReactComponent as UnLock } from "../assets/unlock.svg";

const rooms = [
  { id: "001", title: "~~의 방", lock: true, cntMember: 1, isStart: false },
  { id: "001", title: "~~의 방", lock: false, cntMember: 1, isStart: true },
  { id: "001", title: "~~의 방", lock: false, cntMember: 1, isStart: false },
  { id: "001", title: "~~의 방", lock: false, cntMember: 1, isStart: false },
  { id: "001", title: "~~의 방", lock: false, cntMember: 1, isStart: false },
];
export const Home = () => {
  return (
    <Layout>
      <section className="grid grid-cols-2 gap-4 overflow-y-scroll">
        {rooms.map((room) => {
          return (
            <div
              className={`flex border rounded-lg p-4 text-xl items-center ${
                room.isStart ? "bg-gray-400" : "hover:cursor-pointer"
              }`}
            >
              <div>{room.id}</div>
              <div className="border-l p-2 m-2 w-full">{room.title}</div>
              <div className="flex flex-col items-center">
                <div className="text-sm">{room.cntMember} / 2</div>
                <div>
                  {room.lock ? <Lock className="fill-red-500 w-8" /> : <UnLock className="fill-blue-500 w-8" />}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};
