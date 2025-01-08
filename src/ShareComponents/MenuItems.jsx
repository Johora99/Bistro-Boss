import Item from "@/ShareComponents/Item";



export default function MenuItems({menuItems}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {
        menuItems?.map(item =><Item key={item._id} item={item}></Item>)
      }
    </div>
  )
}
