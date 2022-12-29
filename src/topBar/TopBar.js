import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarTitle">
        <h1 className="topBarTitleItem">HOMELY</h1>
      </div>
      <div className="topBarTitle">
        <ul className="topBarListItem">
          <li className="topBarListItems">Home</li>
          <li className="topBarListItems">About Us</li>
          <li className="topBarListItems">Our Products</li>
          <li className="topBarListItems">Testimonials</li>
          <li className="topBarListItems">Contact Us</li>
        </ul>
      </div>
      <div className="topBarCart">
        <h3 className="topBarCartItem">Cart</h3>
      </div>
    </div>
  );
}
