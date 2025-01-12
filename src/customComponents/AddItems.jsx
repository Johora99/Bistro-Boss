import useAxios from "@/Hooks/useAxios";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import Heading from "@/ShareComponents/Heading";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const imageAPI = import.meta.env.VITE_IMAGE_API;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageAPI}`
export default function AddItems() {
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = useAxios();
  const {register,handleSubmit,formState: { errors },reset } = useForm();
  const onSubmit = async (data) =>{ 
    console.log(data) 
    const imageData = {image : data.image[0]}
    const res = await axiosPublic.post(imageHostingAPI,imageData,{
      headers : {
        'content-type' : 'multipart/form-data'
      }
    })
    console.log(res.data)
    if(res.data.success){
      const itemData = {
        name : data.name,
        recipe : data.recipe,
        image : res.data.data.display_url,
        category : data.category,
        price : Number(data.price),
      }
       await axiosSecure.post('/menu',itemData)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
           position: "center",
           icon: "success",
           title: "Your menu Item has been added",
          showConfirmButton: false,
          timer: 1500
});
reset()
        }
      })
    }
     }
  return (
    <div className="container w-11/12 mx-auto">
      <div className="my-20">
       <Heading subHeading={"What's new?"} heading={'ADD AN ITEM'}></Heading>
      </div>
        <div>
          <div className="bg-whisperGray inter mb-20">
                <div className="p-10">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
          
                  <label className="form-control w-full ">
                <div className="label">
                <span className="label-text formLabel">Recipe name*</span>
               </div>
                <input type="text" name="name" {...register("name",{ required: true})} placeholder="Recipe name" className="input input-bordered formInput" />
                {errors.name && errors.name.type === 'required' && <span className=" text-red-500 mt-1 inline-block">Enter Recipe name</span>}
               </label>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                      <label className="form-control w-full ">
                <div className="label">
                <span className="label-text formLabel">Category*</span>
               </div>
                <select defaultValue={'default'} className="select select-bordered w-full formInput" name="category" {...register("category",{ required: true})}>
                <option disabled value={'default'}>Category</option>
                <option value={"salad"}>salad</option>
                <option value={"pizza"}>pizza</option>
               <option value={'soup'}>soup</option>
               <option value={'dessert'}>dessert</option>
               <option value={'drinks'}>drinks</option>
              </select>
              {errors.category && errors.category.type === 'required' && <span className=" text-red-500 mt-1 inline-block">Choose category</span>}
               </label>
                      <label className="form-control w-full ">
                <div className="label">
                <span className="label-text formLabel">Price*</span>
               </div>
                <input type="number" name="price" {...register("price",{ required: true})} placeholder="Price" className="input input-bordered formInput" />
                {errors.price && errors.price.type === 'required' && <span className=" text-red-500 mt-1 inline-block">Enter Price</span>}
               </label>
                    </div>
                    <div>
                      <label className="form-control w-full ">
                <div className="label">
                <span className="label-text formLabel">Recipe Details*</span>
               </div>
                <textarea className="formInput" name="recipe" {...register("recipe",{ required: true})} placeholder="Recipe Details" rows={10}></textarea>
                {errors.recipe && errors.recipe.type === 'required' && <span className=" text-red-500 mt-1 inline-block">Enter Recipe Details</span>}
               </label>
                    </div>
                  <div className="my-5">
                <input 
              type="file" {...register("image",{ required: true})}  
             className=" text-dimGray text-xl file:mr-4 file:py-2 file:px-4  file:border-0 file:bg-lightGray file:text-dimGray" 
             />
             {errors.image && errors.image.type === 'required' && <span className=" text-red-500 mt-1 inline-block">Choose a Image</span>}
            </div>

                    <div>
                      <button className="flex items-center gap-2 text-white text-xl font-bold btnBg py-3 px-5 ">
                      Add Item
                        <FaUtensils className='text-xl'/>
                      </button>
                    </div>
                </form>
                </div>
              </div>
        </div>
    </div>
  )
}
