import "../assets/styles/products.css";

const products = [{
    id: 1,
    name: "Espresso",
    price: 950,
    image: "/img/p1.png",
}, {
    id: 2,
    name: "Latte",
    price: 1200,
    image: "/img/p2.png",
}, {
    id: 3,
    name: "Cappuccino",
    price: 1300,
    image: "/img/p3.png",
}, {
    id: 4,
    name: "Iced Coffee",
    price: 1100,
    image: "/img/p4.png",
}, {
    id: 5,
    name: "Herbal Tea",
    price: 800,
    image: "/img/p5.png",
}, {
    id: 6,
    name: "Green Tea",
    price: 900,
    image: "/img/p6.png",
}];

function Products() {
    
    const handleOrder = (productName, productPrice) => {
        const phoneNumber = "+94701234567"; 
        const message = `${productName} (Rs. ${productPrice}) - is this available?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="products" id="products">
            <div className="products_container">
                <h1>OUR PRODUCTS</h1>
            </div>
            <div className="products_list">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} className="product_img"></img>
                        <h2>{product.name}</h2>
                        <div className="price_and_cart_container">
                            <div className="price_container">
                                <p>Rs. {product.price}</p>
                            </div>
                            <div className="cart_container">
                                <button 
                                    className="add_to_cart"
                                    onClick={() => handleOrder(product.name, product.price)}
                                >
                                    Order via WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;