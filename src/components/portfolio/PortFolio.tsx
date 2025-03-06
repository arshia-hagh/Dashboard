import React from 'react'
interface IPortFolioProps {
    PProfite: string,
    VProfite: string
    Stock: string
    Title: string
    Icon: JSX.Element,
}
function PortFolio({PProfite,Icon,Stock,Title,VProfite}: IPortFolioProps) {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <div>
                {Icon}
            </div>
            <div className='flex flex-col  gap-2'>
                <h6 className='text-[16px] text-white-black font-semibold tracking-wider'>{Title}</h6>
                <span className='text-[14px] text-white-black opacity-60 font-normal tracking-wider '>{Stock}</span>
            </div>
        </div>
        <div className='flex flex-col items-end'>
            <span className='font-medium text-[12px] tracking-wider text-orange-color'>{PProfite}</span>
            <span className='tracking-wider font-semibold text-[14px] text-white-black'>{VProfite}</span>
        </div>
    </div>
  )
}

export default PortFolio