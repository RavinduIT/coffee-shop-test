import "../assets/styles/about.css";

function About() {
    
    const handleLearnMore = () => {
        const email = "coffeeshop@gmail.com";
        const subject = "I'd like to learn more about Rav's Coffee Shop";
        const body = "Hi,\n\nI visited your website and would like to learn more about your coffee shop, history, and offerings.\n\nThank you!";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="about" id="about">
            <div className="about_img_container">
                <img src="/img/about.jpg" alt="about" className="about_img"></img>
            </div>
            <div className="about_container">
                <div className="about_text">
                    <h1>OUR HISTORY</h1>
                    <p>
                        At Rav's Coffee Shop, we take pride in our rich history and commitment to quality. Founded in 2023, our journey began with a simple mission: to provide the finest coffee experience in Matara. Our founder, Rav, a passionate coffee enthusiast, envisioned a place where people could come together to enjoy exceptional coffee and create lasting memories. Over the years, we have built a reputation for sourcing the best beans from around the world and crafting each cup with care and precision. Today, we continue to uphold our founder's vision by offering a warm and inviting atmosphere where every sip tells a story.
                    </p><br />
                    <p>
                        Our coffee is sourced from sustainable farms, ensuring that we not only serve the best quality but also support the communities that grow our beans. We believe in the importance of ethical sourcing and are proud to partner with farmers who share our values. Each cup of coffee at Rav's is a testament to our dedication to quality, sustainability, and community.
                        Our team of skilled baristas is dedicated to perfecting the art of coffee-making, ensuring that each visit to Rav's Coffee Shop is a delightful experience. We invite you to join us on this journey and discover the magic of our coffee, one cup at a time.
                    </p>
                </div>
                <button className="about_button" onClick={handleLearnMore}>Learn More</button>
            </div>
        </div>
    );
}

export default About;