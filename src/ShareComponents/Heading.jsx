

export default function Heading({subHeading,heading}) {
  return (
    <div className="text-center inter">
      <div className="w-fit mx-auto">
       <p className="text-yellowOrange text-xl font-normal">---{subHeading}---</p>
       <h2 className="text-4xl text-darkGray font-normal border-lightGray border-b-[3px] border-t-[3px] py-3 mt-5">{heading}</h2>
      </div>
    </div>
  )
}
