interface CardProps {
  icon: string;
  title: string;
  subTitle: string;
  amount: string;
  sub: string;
  image: string;
}
const HomeCard = ({ amount, icon, image, sub, subTitle, title }: CardProps) => {
  return (
    <div
      className="w-full flex md:h-[157px]"
      style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
    >
      <a
        className="h-full w-full cursor-pointer rounded-lg border border-buttonBorder transition-all duration-500"
        href="/"
      >
        <div className="relative flex h-full w-full flex-col items-start justify-center p-4 md:justify-between md:p-5">
          <div className="flex items-center justify-start gap-3 mobile:gap-4">
            <div className="relative">
              <div
                className="overflow-hidden rounded-full"
                style={{
                  minWidth: "34px",
                  minHeight: "34px",
                  width: "34px",
                  height: "34px",
                }}
              >
                <img
                  alt="token-logo"
                  loading="lazy"
                  width="34"
                  height="34"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full rounded-full object-contain"
                  src={icon}
                  style={{ color: "transparent" }}
                />
              </div>
              <div
                className="overflow-hidden rounded-full absolute bottom-0 right-[-4px]"
                style={{
                  minWidth: "16px",
                  minHeight: "16px",
                  width: "16px",
                  height: "16px",
                }}
              >
                <img
                  alt="token-logo"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full rounded-full object-contain"
                  src={icon}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="relative flex grow flex-col items-start justify-start truncate">
              <div className="relative w-full overflow-hidden">
                <div className="line-clamp-1 h-0 truncate text-ellipsis md:h-auto">
                  <div className="max-w-[140px] truncate">{title}</div>
                </div>
                <div className="max-w-[140px] truncate text-base font-bold md:hidden">
                  {subTitle}
                </div>
                <div className="hidden max-w-[140px] truncate text-[12px] text-base font-bold text-grey md:block">
                  {subTitle}
                </div>
              </div>
              <div className="text-base font-bold md:hidden">
                <div className="flex items-center justify-start gap-1 text-[12px]">
                  <div className="flex items-end gap-1 leading-none">
                    <span className="leading-none">{amount}</span>
                    <span className="text-[10px]">{sub}</span>
                    <span className="text-[10px] text-grey">TVL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-col gap-1 md:flex">
            <div>
              <div className="text-xs text-grey">TVL</div>
              <div className="flex items-end gap-1 leading-none">
                <span>{amount}</span> <span className="text-[10px]">{sub}</span>
              </div>
            </div>
          </div>
          <div className="absolute right-2 top-1/2 z-[-1] aspect-square w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full md:bottom-3 md:right-3 md:top-auto">
            <div
              className="absolute left-1/2 top-1/2 z-[0] h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                backgroundColor: "rgb(163, 110, 253)",
                filter: "blur(2.66389px)",
              }}
            ></div>
            <img
              alt="chain-overlay"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className="absolute z-[1] h-full w-full rounded-full"
              src={image}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomeCard;
