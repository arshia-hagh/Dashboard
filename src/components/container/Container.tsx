import React from "react"

interface IContainerProps{
    children: React.ReactNode
}
function Container({children} : IContainerProps) {
  return (
    <div className="lg:p-3 sm:p-0 grid gap-5 lg:grid-cols-2 sm:grid-flow-row sm:grid-rows-1"> 
        {children}
    </div>
  )
}

export default Container