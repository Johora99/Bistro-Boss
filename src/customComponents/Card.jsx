import React from 'react'

export default function Card({item}) {
  const {name,recipe,image,category,price} = item;
  return (
    <div className="w-full rounded-md shadow-md bg-whisperGray">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8 text-center inter">
		<div className="space-y-2">
			<h2 className="text-2xl text-darkGray font-semibold tracking-wide">{name}</h2>
			<p className="dark:text-gray-800">{recipe}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-fit py-3 px-5 border-b-[3px] border-b-[goldenrod] font-medium  rounded-lg text-goldenrod text-xl uppercase bg-lightGray mx-auto hover:bg-charcoal">add to cart</button>
	</div>
</div>
  )
}
