const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
      <div className="hero-btn">
        <button>Shop Now</button>
        <div className="secondary-button"></div>
        <button>Category</button>
      </div>

      <div className="shoppping">
        <p>Also Available On</p>
      </div>

      <div className="brand-icons">
        <img src="/images/flipkart.png" alt="flipkart-logo" />
        <img src="/images/amazon.png" alt="amazon-logo" />
      </div>

      <div className="hero-content"></div>
      <div className="hero-image"></div>
    </main>
  );
};
export default HeroSection;
