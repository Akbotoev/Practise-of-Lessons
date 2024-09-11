
export const ProductList = ({products, addToCart}) => {

    return(
        <>
        <div className="container">
            <h2 className="cotainer__title">Список товаров</h2>
           <ul>
            {products.map(product => (
                <li key={product.id}>
                    <h3 className="container__text">{product.name}</h3>
                    <p className="container__price">{product.price}</p>
                    <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                </li>
            ))}
           </ul>
        </div>
        </>
     )
}
export default ProductList;