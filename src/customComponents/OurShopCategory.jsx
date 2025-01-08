import useMenu from "@/Hooks/useMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "./Card";


export default function OurShopCategory() {
  const {menus} = useMenu();
  const [categoryData,setCategoryData] = useState([]) ;
  const [isActive,setIsActive] = useState('salad');
  const menu = [
  { category: "salad", id: 1 },
  { category: "pizza", id: 2 },
  { category: "soup", id: 3 },
  { category: "dessert", id: 4 },
  { category: "drinks", id: 5 },
];
 useEffect(() => {
    if (menus.length > 0) {
      const initialData = menus.filter((item) => item.category === "salad");
      setCategoryData(initialData);
    }
  }, [menus]);

 const handleCategory = (category)=>{
  setIsActive(category);
  const categoryData = menus.filter(item =>item.category === category)
   setCategoryData(categoryData);
 }
  return (
    <div className="container w-11/12 mx-auto">
       <div className="flex items-center justify-center gap-10 my-20 inter">
          {
            menu.map(item=><Link onClick={()=>handleCategory(item.category)} key={item.id} className={`uppercase text-darkGray text-2xl font-bold ${isActive === item.category && 'text-goldenrod underline underline-offset-4 decoration-4 decoration-goldenrod'}`}>{item.category}</Link>)
          }
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        {
          categoryData.map(item =><Card key={item._id} item={item}></Card>)
        }
       </div>
    </div>
  )
}
