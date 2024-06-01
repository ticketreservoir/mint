import Card from "../component/Card";
import HomeCard from "../component/HomeCard";
import { homeCard, homeCards, homeImages } from "../utils";

const Home = () => {
  return (
    <div className="pb-40 px-5">
      <div className="px-custom mx-auto">
        <div className="flex flex-row md:flex-col justify-between items-center">
          <div className="relative gap-4 z-[10] grid grid-cols-1 items-center justify-between md:grid-cols-2">
            <div>
              <div className="text-[44px] font-bold text-[#15e6b7] font-Wix">
                Mint.Club
              </div>
              <div className="text-lg text-white">
                Create &amp; Trade Bonding Curve Tokens &amp; NFTs with
                Automated Liquidity
              </div>
              <div className="mt-10 flex gap-2 items-center justify-center md:justify-start">
                {homeImages.map((item, index) => (
                  <img
                    src={item.image}
                    alt=""
                    width={24}
                    height={24}
                    key={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="stack">
              {homeCard.map((card, index) => (
                <Card
                  key={index}
                  image1={card.image1}
                  text1={card.text1}
                  image2={card.image2}
                  text2={card.text2}
                  image3={card.image3}
                  text3={card.text3}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col mt-10">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:mt-10 md:grid-cols-3 xl:grid-cols-4">
            {homeCards.map((item, index) => (
              <HomeCard
                key={index}
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
                amount={item.amount}
                sub={item.sub}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
