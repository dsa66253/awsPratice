import { useState, useEffect } from "react";



const KitchenItems = ({ item }) => {

    const [status, setStatus] = useState("RAW");


    const generateColor = (status) => {
        switch (status) {
            case "RAW":
                return "red";
            case "DOING":
                return "yellow";
            case "DONE":
                return "green";
            default:
                return "white";
        }
    }

    const style = {
        backgroundColor: generateColor(status),
    };

    const updateStatus = () => {
        if (status === "RAW") {
            setStatus("DOING");
        } else if (status === "DOING") {
            setStatus("DONE");
        }
        // TODO: add api
    }

    return <div style={style} onClick={updateStatus}>
        {item.name} *{item.quantity} || {status}
    </div>
        ;
}

export default KitchenItems;