import { GameCard } from "../components/GameCard";
import { monsters } from "../assets/monsters";
import { Layout } from "../components/Layout";

export const MonsterDictionary = () => {
  return (
    <Layout>
      <div className="overflow-y-scroll h-full">
        <div className="grid grid-cols-4 gap-4 p-4">
          {monsters.map((monster) => (
            <GameCard name={monster.name} imageUrl={monster.imgUrl} attackPower={monster.attackPower} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
