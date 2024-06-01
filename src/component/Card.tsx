interface CardProps {
  image1: string;
  text1: string;
  image2: string;
  text2: string;
  image3: string;
  text3: string;
  icon: string;
}
const Card = ({
  image1,
  text1,
  image2,
  text2,
  image3,
  text3,
  icon,
}: CardProps) => {
  return (
    <div className="card  relative rounded-lg border border-yellow-200 p-3 flex justify-between align-top bg-black">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <img
            src={image1}
            alt=""
            width={18}
            height={18}
            style={{ color: "transparent" }}
          />
          <div className="text-gray-500 truncate text-grey">
            {text1} claimed
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={image2}
            alt=""
            width={18}
            height={18}
            style={{ color: "transparent" }}
          />
          <div className="text-gray-500 truncate text-grey">{text2}</div>
        </div>{" "}
        <div className="flex gap-2 items-center">
          <img
            src={image3}
            alt=""
            width={18}
            height={18}
            style={{ color: "transparent" }}
          />
          <div className="text-gray-500 truncate text-grey">{text3}</div>
        </div>
      </div>
      <img
        className="absolute right-5 top-5"
        src={icon}
        alt="base"
        width={18}
        height={18}
      />
    </div>
  );
};

export default Card;
