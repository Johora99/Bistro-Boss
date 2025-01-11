import useUser from "@/Hooks/useUser"
import Heading from "@/ShareComponents/Heading";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import Swal from "sweetalert2";
import useAxios from "@/Hooks/useAxios";
export default function AllUsers() {
  const {user,refetch} = useUser();
  const axiosSecure  = useAxios();
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
        axiosSecure.delete(`/user/${id}`)
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
    const handleAdmin = (item)=>{
     axiosSecure.patch(`/user/${item._id}`)
     .then(res =>{
      if(res.data.modifiedCount > 0){
        Swal.fire({
  position: "center",
  icon: "success",
  title: `${item.user_name} is now an Admin`,
  showConfirmButton: false,
  timer: 1500
});
      }
     })
    }
  return (
    <div className="container w-11/12 mx-auto">
         <div className="my-20">
            <Heading subHeading={'How many??'} heading={'MANAGE ALL USERS'}></Heading>
         </div>
         <div className="bg-white p-10 mb-20">
          <div className="cinzel uppercase ">
            <h3 className="text-3xl text-darkGray font-bold">Total users: {user.length} </h3>
          </div>
          <div className=" mt-10 inter">
            <div className="overflow-x-auto rounded-t-2xl">
      <table className="table">
        {/* head */}
        <thead className="text-white text-base font-semibold">
          <tr className="bg-Tan *:py-5">
            <th></th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
            {
              user.length > 0 ? user.map((item,index)=> <tr key={item._id}>
            <th className="text-darkGray text-xl font-bold">{index+1}</th>
            <td className="text-mediumGray text-base font-normal">{item.user_name}</td>
            <td className="text-mediumGray text-base font-normal">{item.user_email}</td>
            <td>
              {
                item?.role === 'admin'? <p className="text-xl font-bold text-white bg-Tan py-3 px-5 w-fit rounded-md">Admin</p>:  <button onClick={()=>handleAdmin(item)} className="bg-Tan p-3 rounded-md"><IoIosPeople className="text-2xl text-white"/></button>
              }
            
            </td>
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
