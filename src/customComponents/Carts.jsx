import useAxios from "@/Hooks/useAxios";
import useCart from "@/Hooks/useCart";
import Heading from "@/ShareComponents/Heading";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
export default function Carts() {
  const {cart,refetch} = useCart();
  const axiosSecure  = useAxios()
  const totalPrice = cart.reduce((total,item)=>total + item.price ,0);
  const handleDelete = (id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
      axiosSecure.delete(`/cart/${id}`)
    .then(res =>{
      if(res.data.deletedCount > 0){
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    refetch();
      }
    })

  }
});
  
  }
  return (
    <div className="container w-11/12 mx-auto">
     <div className="my-20">
        <Heading subHeading={'My Cart'} heading={'WANNA ADD MORE?'}></Heading>
     </div>
     <div className="bg-white p-10 mb-20">
      <div className="cinzel uppercase flex items-center justify-between">
        <h3 className="text-3xl text-darkGray font-bold">Total orders: {cart.length} </h3>
        <h3 className="text-3xl text-darkGray font-bold">total price: $ {totalPrice} </h3>
        <button className="text-white text-xl font-bold bg-Tan py-2 px-5 rounded-lg">Pay</button>
      </div>
      <div className=" mt-10 inter">
        <div className="overflow-x-auto rounded-t-2xl">
  <table className="table">
    {/* head */}
    <thead className="text-white text-base font-semibold">
      <tr className="bg-Tan *:py-5">
        <th></th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
        {
          cart.length > 0 ? cart.map((item,index)=> <tr key={item._id}>
        <th className="text-darkGray text-xl font-bold">{index+1}</th>
        <td><img src={item.image} alt="" className="w-20 h-20 rounded-2xl object-cover"/></td>
        <td className="text-mediumGray text-base font-normal">{item.name}</td>
        <td className="text-mediumGray text-base font-normal">${item.price}</td>
        <td><button onClick={()=>handleDelete(item._id)} className="bg-darkRed p-3 rounded-md"><RiDeleteBinLine className="text-2xl text-white"/></button></td>
      </tr>): <p></p>
        }
    </tbody>
  </table>
</div>
      </div>
      
     </div>
    </div>
  )
}
