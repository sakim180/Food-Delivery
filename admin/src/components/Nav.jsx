
import { FiAlignJustify } from "react-icons/fi";
const Nav = ({sidebar,setsidebar}) => {
  return (
    <><div className="h-10 flex justify-between px-5 py-2.5 items-center"><FiAlignJustify onClick={()=>setsidebar(!sidebar)} className="md:hidden" />Admin panel
   
    <img className="h-8 w-8" src="./src/assets/OIP.webp" alt="" />
    
    </div>
    <hr />
    </>
    

  )
}

export default Nav