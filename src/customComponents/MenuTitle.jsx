

export default function MenuTitle({title,subtitle}) {
  return (
    <div className="flex items-center justify-center">
      <div className="py-20 px-32 text-center">
        <h2 className="mb-5 font-normal text-5xl">{title}</h2>
        <p className="inter text-base font-normal">{subtitle}</p>
      </div>
    </div>
  )
}
