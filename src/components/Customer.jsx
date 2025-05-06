import "../assets/styles/customer.css";

const reviews = [
    {
        name: "John Doe",
        review: "Great coffee! I love the variety of flavors.",
        rating: 5,
        img:"/img/rev1.jpg",
    },
    {
        name: "Jane Smith",
        review: "The ambiance is perfect for studying.",
        rating: 4,
        img:"/img/rev2.jpg",
    },
    {
        name: "Sam Wilson",
        review: "Friendly staff and quick service.",
        rating: 5,
        img:"/img/rev3.jpg",
    },
];

function stars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += "⭐";
    }
    return stars;
}


function Customer() {
    return (
        <div className="customer" id="customer">
            <div className="customer_content">
                <h1>Customer Reviews</h1>
                <div className="customer_reviews">
                    {reviews.map((review, index) => (
                        <div key={index} className="customer_review">
                            <img src={review.img} alt="Customer" className="customer_image" />
                            <h2>{review.name}</h2>
                            <p>{review.review}</p>
                            <p>Rating: {stars(review.rating)} stars</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    }

export default Customer;