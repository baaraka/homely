import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="homeTitles">
        <div className="homeTitle">
          <h1 className="homeTitleHead">
            Enjoy <span className="homeSpan"> home made meals</span> far away
            from home
          </h1>
          <p className="homeParagraph">
            Helping you enjoy comfortable and healthy food anywhere and anytime
            on the go
          </p>
        </div>
        <div className="homeImg">
          <img
            src="https://www.dinneratthezoo.com/wp-content/uploads/2017/12/meal-prep-burrito-bowls.jpg"
            alt=""
            className="homeImgItem"
          />
        </div>
      </div>
      <div className="foodOrder">
        <div className="foodOrder1">
          <h3 className="heading3">500+</h3>
          <p className="paragraph3">Food partners</p>
        </div>
        <div className="foodOrder1">
          <h3 className="heading3">1k+</h3>
          <p className="paragraph3">orders delivered</p>
        </div>
        <div className="foodOrder1">
          <h3 className="heading3">12k+</h3>
          <p className="paragraph3">Clients</p>
        </div>
      </div>
    </div>
  );
}
