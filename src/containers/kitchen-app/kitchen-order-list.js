import { useEffect, useState } from "react";
import KitchenItems from "./kitchen-item";


const KitchenOrderList = ({
    data: {
        id,
        tableNo,
        items,
    }
}) => {



    return (
        <div className="kitchen-order-list">
            <span>{id}  ||</span>
            <span>{tableNo} ||</span>
            {items.map((e) => (<KitchenItems item={e} />))}
        </div>);


}
export default KitchenOrderList;