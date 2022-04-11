
const CounterItemsCard = ({ items }) => {
    return (
        <div >
            {items.map(item => (
                <div key={item.id}>
                    <span>
                        {item.name}
                    </span>
                    <span>
                        * {item.quantity}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default CounterItemsCard;
