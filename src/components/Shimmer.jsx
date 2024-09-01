const Shimmer = () => {
  return (
    <div className="products-list-container">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="product-item product-card">            
            <div className="shimmer-wrapper">
                <div className="product-image shimmer">
                    <img></img>
                </div>
                <div className="product-details shimmer">
                    <div className="header meta ellipse"></div>
                    <div className="meta grey-text"></div>
                    <div className="meta bold"></div>
                </div>
            </div>            
          </div>
        ))}
      </div>
  );
};

export default Shimmer;