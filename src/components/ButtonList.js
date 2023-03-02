import { useState } from "react";
import { List } from "../constants";


const ButtonList = () => {
    const [chipFilter, setChipFilter] = useState([]);

    let count = 0;

    // async function fetchList() {
    //     try {
    //         const response = await fetch(List);
    //         const json = await response.json();
    //         setChipFilter(json?.items)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
    // fetchList()

    return (
        <>
            {
                // chipFilter.map((item) =>
                    // <button className="bg-gray-100 text-sm px-3 mx-2 py-1 rounded-md hover:bg-gray-200" key={count++}>{item[count]?.snippet?.title}</button>
                    // console.log(chipFilter)
                // )
            }
        </>
    )
}

export default ButtonList;