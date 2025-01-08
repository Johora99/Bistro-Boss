import useMenu from "@/Hooks/useMenu"
import Button from "@/ShareComponents/Button";
import MenuItems from "@/ShareComponents/MenuItems";

export default function Salads() {
    const {menus} = useMenu();
    const salads = menus.filter(item=> item.category === 'dessert');
    if(salads.length === 0){
      return <p>No products available in the "salads" category.</p>
    }
  return (
    <div className="my-20 container w-11/12 mx-auto">
        <MenuItems menuItems={salads}></MenuItems>
        <Button buttonText={'ORDER YOUR FAVOURITE FOOD'}></Button>
    </div>
  )
}
