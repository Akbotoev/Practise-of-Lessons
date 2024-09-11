
export const Card = ({cartItems, removeFromCart}) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0)
    return (
        <>
        <h2>Корзинa</h2>
        <ul>
            {cartItems.map((item, index) => {
                <li key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.price}com</p>
                    <button onClick={() => removeFromCart(index)}>Удалить</button>
                </li>
            })}
        </ul>
        <h3>Общая сумма:{total}com</h3>
        </>
    )
}
export default Card;