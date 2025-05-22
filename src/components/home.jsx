import "../assets/styles/home.css";

function Home() {
  
  const handleShopNow = () => {
    // Scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home_container" id="home">
      <div className="left_container">
        <h1 className="headline">START YOUR DAY WITH COFFEE</h1>
        <p className="desc">
          At Rav's Coffee Shop,
          we believe in the simple joys of life: a perfect cup of coffee,
          freshly baked pastries, and the warmth of great conversation.
          Nestled in the heart of Matara,
          we offer more than just a place to grab your daily caffeine fix – we offer an experience.
          Whether you're here for a quick espresso on the go or looking for a cozy corner to relax and unwind,
          our welcoming space is the perfect place to escape the hustle and bustle of everyday life.
        </p>
        <button className="shop_button" onClick={handleShopNow}>Shop Now</button>
      </div>
      <img src="/img/main.png" alt="coffee" className="coffee_img"></img>
    </div>
  );
}

export default Home;