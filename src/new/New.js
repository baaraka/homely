import "./New.css";

export default function New() {
  return (
    <div className="new">
      <div className="newHead">
        <h1 className="newHeading">Subscribe to our Newsletter</h1>
        <p className="newParagraph">
          Enter your Email address to get daily offers and news
        </p>
        <input
          className="newInput"
          type="text"
          placeholder="Enter Your Email"
        />
        <button className="newButton">Subscribe</button>
      </div>
    </div>
  );
}
