import Timer from "../timer";
import CounterItems from "../../components/counter-item";
import Notes from "../../components/notes";

const CounterOrderList = ({
    data: {
        id,
        tableNo,
        items,
        totalPrice,
        time,
    }
}) => {
    console.log(items);
    return (
        <div className="counter-order-list">
            <span>{id}  ||</span>
            <span>{tableNo} ||</span>
            <CounterItems items={items} />
            <span>{totalPrice} ||</span>
            <Timer time={time} />
            <Notes items={items} />
        </div>);
}

export default CounterOrderList;