

export default function Item({item}) {
  const {name,recipe,image,price} = item;
  return (
    <div className='flex items-center justify-between gap-5'>
      <div>
        <img src={image} alt="" className="w-28 h-28 object-cover rounded-[200px] rounded-tl-none"/>
      </div>
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="cinzel text-xl text-darkGray font-normal">{name} ------------------</h4>
            <p className="text-goldenrod text-xl">${price}</p>
        </div>
        <p className="inter text-base text-mediumGray font-normal">{recipe}</p>
      </div>
      
    </div>
  )
}
