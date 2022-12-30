import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="aboutTitle">
        <h1 className="aboutHeading">About us</h1>
        <p className="aboutParagraph">
          I make delicious healthy meals for busy people who want to enjoy home
          made food without the hassle of cooking. Why would you cook when you
          don't have to? The Hot Plate makes it easy to eat your favorite home
          cooked food anywhere you want. You deserve to eat great food, whether
          you're at home or on the go.
        </p>
      </div>
      <div className="aboutImage">
        <div className="aboutImage1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIk4zbUuFgiTifhzEeW_RnUzIKKoP4glkShA&usqp=CAU"
            alt=""
            className="aboutImg1"
          />
        </div>
        <div className="aboutImage2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIk4zbUuFgiTifhzEeW_RnUzIKKoP4glkShA&usqp=CAU"
            alt=""
            className="aboutImg2"
          />
        </div>
      </div>
    </div>
  );
}
