import React from "react";
import ListItem from "./ListItem";


const List = ({listData}) => {
    console.log("List", listData)
    return (
        <>
            <div>
               
                {listData.map((listItem) => {
                    return (
                        <>
                           <ListItem listItem={listItem}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default List;