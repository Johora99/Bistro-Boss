import useMenu from "@/Hooks/useMenu"
import Button from "@/ShareComponents/Button";
import MenuItems from "@/ShareComponents/MenuItems";

export default function Soup() {
    const {menus} = useMenu();
      const soup = menus.filter(item=> item.category === 'soup');
      if(soup.length === 0){
        return <p>No products available in the "soup" category.</p>
      }
  return (
      <div className="my-20 container w-11/12 mx-auto">
            <MenuItems menuItems={soup}></MenuItems>
            <Button buttonText={'ORDER YOUR FAVOURITE FOOD'}></Button>
      </div>
  )
}
