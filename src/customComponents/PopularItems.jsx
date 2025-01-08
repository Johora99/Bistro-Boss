import useMenu from "@/Hooks/useMenu";
import Button from "@/ShareComponents/Button";
import MenuItems from "@/ShareComponents/MenuItems";



export default function PopularItems() {
  const {menus,isLoading} = useMenu();

  const popularMenu = menus.filter(item=> item.category === 'popular');
  if(popularMenu.length === 0){
    return <p>No products available in the "popular" category.</p>
  }

  return (
    <div className="my-20 container w-11/12 mx-auto">
      <MenuItems menuItems={popularMenu}></MenuItems>
      <Button buttonText={'View Full  Menu'}></Button>
    </div>
  )
}
