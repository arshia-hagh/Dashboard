interface IChartHeaderProps {
  Title: string;
  Desc: string;
  Profit: string;
  Date: string;
  Icon: JSX.Element;
  IconColor: string;
}
function ChartHeader({
  Title,
  Desc,
  Icon,
  IconColor,
  Profit,
  Date,
}: IChartHeaderProps) {
  return (
    <div className="bg-secondery-color  shadow-[0_2px_6px_rgba(0,0,0,0.25)] rounded-xl">
      <div className="flex p-5 justify-between">
        <div
          className={`relative w-[64px] h-[64px] flex items-center justify-center bg-gradient-to-b ${IconColor} rounded-xl top-[-30px]`}
        >
          {Icon}
        </div>
        <div className="flex flex-col items-end">
          <h6 className="font-light text-secondery-gray-black text-[14px]">
            {Title}
          </h6>
          <span className="font-bold text-[24px] text-secondery-color">
            {Desc}
          </span>
        </div>
      </div>
      <div className="flex p-4 items-center border-t-[1px] border-secondery-color opacity-50">
        <span className="text-green-color font-bold text-[16px]">{Profit}</span>
        <span className="font-light ml-2 text-secondery-color text-[16px]">
          {Date}
        </span>
      </div>
    </div>
  );
}

export default ChartHeader;
