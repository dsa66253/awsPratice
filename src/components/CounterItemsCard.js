
const CounterItemsCard = ({ items }) => {
    return (
        <div >
            {items.map(item => {
                var quantity;

                if (item.orderItemInfo) {
                    console.log(item.orderItemInfo);
                    quantity = item.orderItemInfo.quantity;
                } else {
                    quantity = 0;
                }
                return (
                    <div key={item.id}>
                        <span>
                            {item.name}
                        </span>
                        <span>
                            * {quantity}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default CounterItemsCard;
