import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarTitleLeft">
        <h1 className="topBarTitleItem">HOMELY</h1>
      </div>
      <div className="topBarTitle">
        <ul className="topBarListItem">
          <li className="topBarListItems">Home</li>
          <li className="topBarListItems">Why Choose Us</li>
          <li className="topBarListItems">Our dishes</li>
          <li className="topBarListItems">About Us</li>
          <li className="topBarListItems">Testimonials</li>
        </ul>
      </div>
      <div className="topBarCart">
        <button className="topBarCartItem">
          <span className="topCart">
            <i class="topBarCart fa-solid fa-cart-shopping"></i>
          </span>
          Cart
          <span className="topInput">
            <input className="topInputItem" type="total" />
          </span>
        </button>
      </div>
    </div>
  );
}
