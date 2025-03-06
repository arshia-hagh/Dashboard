interface IChartMainProps {
  ChartColor: string;
  Chart: JSX.Element;
  Title: string;
  Desc: string;
  Date: string;
}
function ChartMain({ Title, Desc, Date, Chart, ChartColor }: IChartMainProps) {
  return (
    <div className="rounded-lg p-4 bg-secondery-color shadow-[0_2px_6px,#00000040;]">
      <div
        className={`${ChartColor} flex  items-center rounded-lg h-[172px] relative top-[-40px] `}
      >
        {Chart}
      </div>
      <div className="">
        <h6 className="text-secondery-color text-[16px] font-bold">{Title}</h6>
        <span className="text-secondery-color text-[14px] opacity-50 font-normal">
          {Desc}
        </span>
      </div>
      <div className=" mt-3 h-[50px] leading-[50px]  flex items-center gap-2 border-t-[1px] border-secondery-color opacity-50">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9.50426C7.06087 9.50426 8.07828 9.14406 8.82843 8.50291C9.57857 7.86176 10 6.99218 10 6.08545C10 5.17873 9.57857 4.30915 8.82843 3.668C8.07828 3.02685 7.06087 2.66665 6 2.66665C4.93913 2.66665 3.92172 3.02685 3.17157 3.668C2.42143 4.30915 2 5.17873 2 6.08545C2 6.99218 2.42143 7.86176 3.17157 8.50291C3.92172 9.14406 4.93913 9.50426 6 9.50426ZM6 1.81195C6.65661 1.81195 7.30679 1.92249 7.91342 2.13725C8.52005 2.35202 9.07124 2.6668 9.53553 3.06363C9.99983 3.46046 10.3681 3.93157 10.6194 4.45005C10.8707 4.96854 11 5.52425 11 6.08545C11 7.21886 10.4732 8.30584 9.53553 9.10728C8.59785 9.90871 7.32608 10.359 6 10.359C3.235 10.359 1 8.43588 1 6.08545C1 4.95205 1.52678 3.86507 2.46447 3.06363C3.40215 2.26219 4.67392 1.81195 6 1.81195ZM6.25 3.9487V6.19229L8.5 7.33332L8.125 7.85896L5.5 6.5128V3.9487H6.25Z"
            fill="#7B809A"
          />
        </svg>

        <span className="text-secondery-color font-normal text-[14px]">
          {Date}
        </span>
      </div>
    </div>
  );
}

export default ChartMain;
