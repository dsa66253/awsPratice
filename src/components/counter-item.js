const CounterItems = ({ items }) => {
    return (
        <span>
            {items.map((e) => <span key={e.id}>
                {e.name} * {e.quantity} ||
            </span>)}
        </span>
    );
}

export default CounterItems;