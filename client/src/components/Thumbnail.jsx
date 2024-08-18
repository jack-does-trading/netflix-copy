const Thumbnail = () => {
    return (
      <div className="thumb">
        <div className="thumb__image">
          <img
            src="https://www.tallengestore.com/cdn/shop/products/QGM6_1_c34d7d64-85a1-412d-ad5f-18e2b38ee366.jpg?v=1623075171"
            alt="Thumb"
          />
        </div>
        <div className="thumb-info">
          <h5 className="mb-4 mt-0">The Queen's Gambit</h5>
          <p>In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins
             an unlikely journey to stardom while grappling with addiction.</p>
        </div>
      </div>
    );
  }
  
  export default Thumbnail;
  