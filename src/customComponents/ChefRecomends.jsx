import useMenu from "@/Hooks/useMenu";
import Card from "./Card";


export default function ChefRecomends() {
  const {menus,isLoading} = useMenu();
  if(isLoading){
    return <p>Loading................</p>
  }

  const offeredProducts = menus.filter(item=> item.category === 'offered');
  
  if (offeredProducts.length === 0) {
    return <p>No products available in the "Offered" category.</p>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20">
      {
        offeredProducts?.map(item =><Card key={item._id} item={item}></Card>)
      }
    </div>
  )
}
