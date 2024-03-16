import Content from "./content/Content"
import Sidebar from "./sidebar/Sidebar"
import '../dashboard/style/style.css'

const User = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default User
