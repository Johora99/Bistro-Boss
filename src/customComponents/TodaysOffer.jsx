import useMenu from "@/Hooks/useMenu"
import Button from "@/ShareComponents/Button";
import MenuItems from "@/ShareComponents/MenuItems";


export default function TodaysOffer() {
  const {menus} = useMenu();
    const todaysOffer = menus.filter(item=> item.category === 'offered');
  if(todaysOffer.length === 0){
    return <p>No products available in the "offer" category.</p>
  }
  return (
    <div className="my-20 container w-11/12 mx-auto">
      <MenuItems menuItems={todaysOffer}></MenuItems>
      <Button buttonText={'ORDER YOUR FAVOURITE FOOD'}></Button>
    </div>
  )
}
