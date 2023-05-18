import React from "react"
// import Manu from "./manuApi";
const Navbar = ({filterItem,manuList})=>{
    return(
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        manuList.map((currentElem)=>{
                           return(
                               <button className="btn-group__item" onClick={()=>filterItem(currentElem)}>
                                   {currentElem}
                               </button>
                           )
                        })
                    }
                </div>

            </nav>

        </>
    )
}
export default Navbar;