import { GameCard } from "../components/GameCard";
import { monsters } from "../assets/monsters";
import { Navbar } from "../components/Navbar";
import { AllUser } from "../components/AllUser";

export const MonsterDictionary = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-items-center">
        <AllUser />
        <form className="border-4 rounded-lg px-4 py-2">
          <div className="grid grid-cols-4 gap-4 p-4">
            {monsters.map((monster) => (
              <GameCard name={monster.name} imageUrl={monster.imgUrl} attackPower={monster.attackPower} />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};
