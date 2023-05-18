import React, {useState} from "react"
import ManuCard from "./ManuCard"
import Manu from "./manuApi";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Manu.map((currentElem) => {
    return currentElem.category
})), "All", ]
console.log(uniqueList)

    const Res = () => {
        const [manuData, setManuData] = useState(Manu)
        const [manuList,setManuList]=useState(uniqueList)

        let filterItem=(category) =>{
if(category === "All"){
    setManuData(Manu)
    return;
}

            const updatedList = Manu.filter((currentElem) =>{
                return currentElem.category === category
            })
            setManuData(updatedList)
        }
        return(
            <>
                <Navbar filterItem={filterItem} manuList={manuList}/>
                <ManuCard manuData={manuData}/>
            </>
        )

}

export default Res;