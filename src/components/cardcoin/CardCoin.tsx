type THWP = "YES" | "NO"
interface ICartCoinProps {
    Profite: string,
    Stock: string
    Title: string
    Desc: string
    Chart: JSX.Element,
    Icon: JSX.Element,
    THWP: THWP
}
function CardCoin({ Title, THWP, Chart, Icon, Desc, Profite,Stock }: ICartCoinProps) {
    return (
        <div className="bg-secondery-color rounded-[20px] py-4 px-7">
            <div className="flex justify-between">
                <div className="flex items-center gap-5">
                    <div>{Icon}</div>
                    <div className="flex flex-col gap-2">
                        <h6 className="text-white-black font-semibold text-[16px] tracking-wider">{Title}</h6>
                        <span className="opacity-60 text-white-black font-semibold text-[12px] tracking-wider">{Desc}</span>
                    </div>
                </div>
                <div>
                    {THWP === 'YES' ? (
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0097 4.48499L8.60219 2.07749L7.13219 0.599993C6.50969 -0.0225073 5.49719 -0.0225073 4.87469 0.599993L0.989687 4.48499C0.479687 4.99499 0.847187 5.86499 1.55969 5.86499H5.76719H10.4397C11.1597 5.86499 11.5197 4.99499 11.0097 4.48499Z" fill="#1ECB4F" />
                        </svg>
                    ) : (
                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0097 4.48499L8.60219 2.07749L7.13219 0.599993C6.50969 -0.0225073 5.49719 -0.0225073 4.87469 0.599993L0.989687 4.48499C0.479687 4.99499 0.847187 5.86499 1.55969 5.86499H5.76719H10.4397C11.1597 5.86499 11.5197 4.99499 11.0097 4.48499Z" fill="#1ECB4F" />
                    </svg>
                    )}
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
                <div className="">
                    <h5 className="font-semibold text-white-black text-[21px] tracking-wide ">{Stock}</h5>
                    <span className={`text-[14px] font-semibold tracking-wide ${THWP === 'YES' ? 'text-green-color' : 'text-orange-color'}`}>{Profite}</span>
                </div>
                <div>
                    {Chart}
                </div>
            </div>            
        </div>
    )
}

export default CardCoin