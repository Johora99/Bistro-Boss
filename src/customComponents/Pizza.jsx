import useMenu from "@/Hooks/useMenu";
import Button from "@/ShareComponents/Button";
import MenuItems from "@/ShareComponents/MenuItems";


export default function Pizza() {
    const {menus} = useMenu();
    const pizza = menus.filter(item=> item.category === 'pizza');
    if(pizza.length === 0){
      return <p>No products available in the "pizza" category.</p>
    }
  return (
    <div className="my-20 container w-11/12 mx-auto">
        <MenuItems menuItems={pizza}></MenuItems>
        <Button buttonText={'ORDER YOUR FAVOURITE FOOD'}></Button>
    </div>
  )
}
