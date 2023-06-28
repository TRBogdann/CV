import "./home.css";
import catImg from ".././media/cat.jpg"

function Home() {
  return (
    <div className="smt">
      <div className="homeContainer">
        <div className="frontInfo">
         
          <div class="shortAboutme">
          <div className="circleHome">
          <img src={catImg} className="myphoto"></img>
          </div>
            <div className="textboxHome">
              <div className="textHome">
                <h3>Title</h3>
                <h1>Name1 Name2 Name3</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet egestas nisl et rutrum. Vestibulum risus velit, molestie at tortor vel, blandit suscipit lacus. Donec dictum a libero a placerat. Quisque accumsan risus condimentum, interdum erat quis, efficitur elit. Donec vehicula dolor dui, et tincidunt ex convallis at. Donec dapibus ante purus, non malesuada tellus maximus fringilla. Phasellus vel aliquet urna, nec ullamcorper augue. Vestibulum eleifend pretium augue et scelerisque.
                </p>
              </div>
              <div className="buttonsHome">
              <button className="buttonHome">Download CV</button>
              <button className="buttonHome">Contact</button>
              </div>
            </div>
          </div>
          <div class="skills">
        <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
