import useMenu from "@/Hooks/useMenu"
import Button from "@/ShareComponents/Button";
import MenuItems from "@/ShareComponents/MenuItems";

export default function Dessert() {
  const {menus} = useMenu();
  const dessert = menus.filter(item=> item.category === 'dessert');
  if(dessert.length === 0){
    return <p>No products available in the "dessert" category.</p>
  }
  return (
    <div className="my-20 container w-11/12 mx-auto">
        <MenuItems menuItems={dessert}></MenuItems>
        <Button buttonText={'ORDER YOUR FAVOURITE FOOD'}></Button>
    </div>
  )
}
