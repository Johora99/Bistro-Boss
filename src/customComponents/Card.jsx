import useAuth from '@/Hooks/useAuth';
import useAxios from '@/Hooks/useAxios';
import useCart from '@/Hooks/useCart';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

export default function Card({item}) {
  const {name,recipe,image,category,price,_id} = item;
	const {user} = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const axiosSecure = useAxios();
	const {refetch} = useCart()
	const addToCart = ()=>{
		if(user && user?.email){
     const cartItem ={
			menu_id : _id,
			email : user.email,
			name,
			recipe,
			image,
			category,
			price
		 }
		 axiosSecure.post('/cart',cartItem)
		 .then(res=>{
			if(res.data?.insertedId){
				toast.success('Menu Item is added');
				refetch()
			}
		 })
		}else{
			Swal.fire({
  title: "You are not logged In",
  text: "Please login to add to the cart?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Login!"
}).then((result) => {
  if (result.isConfirmed) {
     navigate('/logIn',{state:{from:location}})
  }
});
		}
	}
  return (
    <div className="w-full rounded-md shadow-md bg-whisperGray">
	<div className='relative'>
		<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
		<span className='absolute bg-raisinBlack top-5 right-5 text-white py-1 px-3 rounded-lg'>${price}</span>
	</div>
	<div className="flex flex-col justify-between p-6 space-y-8 text-center inter">
		<div className="space-y-2">
			<h2 className="text-2xl text-darkGray font-semibold tracking-wide">{name}</h2>
			<p className="dark:text-gray-800">{recipe}</p>
		</div>
		<button onClick={addToCart} type="button" className="flex items-center justify-center w-fit py-3 px-5 border-b-[3px] border-b-[goldenrod] font-medium  rounded-lg text-goldenrod text-xl uppercase bg-lightGray mx-auto hover:bg-charcoal">add to cart</button>
	</div>
</div>
  )
}
