import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <Carousel className="carauselContainer">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carauselImg"
          src="/01.jpg"
          alt="/01.png"
        />
        <Carousel.Caption className="centeringCaption">
          <div className="d-flex justify-content-between">
            <div className="leftPart">
              <h1>Up Your React Skill</h1>
              <p>Learn React at your own pace</p>
              <Link to="/topics">
                <Button className="boder readBtn" variant="outline-dark">
                  Topics
                </Button>
              </Link>
            </div>
            <div className="d-none d-md-block rightPart">
              <h1>Meet professionals</h1>
              <p>Come in touch with our community</p>
              <Link to="/checkout/03">
                <Button className="boder readBtn" variant="outline-dark">
                  Trail
                </Button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carauselImg"
          src="/02.jpg"
          alt="/02.jpg"
        />
        <Carousel.Caption className="centeringCaption">
          <div className="d-flex justify-content-between">
            <div className="leftPart">
              <h1>Up Your React Skill</h1>
              <p>Learn React at your own pace</p>
              <Link to="/topics">
                <Button className="boder readBtn" variant="outline-dark">
                  Topics
                </Button>
              </Link>
            </div>
            <div className="d-none d-lg-block rightPart">
              <h1>Meet professionals</h1>
              <p>Come in touch with our community</p>
              <Link to="/checkout/03">
                <Button className="boder readBtn" variant="outline-dark">
                  Trail
                </Button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carauselImg"
          src="/03.jpg"
          alt="/03.jpg"
        />
        <Carousel.Caption className="centeringCaption">
          <div className="d-flex justify-content-between">
            <div className="leftPart">
              <h1>Up Your React Skill</h1>
              <p>Learn React at your own pace</p>
              <Link to="/topics">
                <Button className="boder readBtn" variant="outline-dark">
                  Topics
                </Button>
              </Link>
            </div>
            <div className="d-none d-md-block rightPart">
              <h1>Meet professionals</h1>
              <p>Come in touch with our community</p>
              <Link to="/checkout/03">
                <Button className="boder readBtn" variant="outline-dark">
                  Trail
                </Button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
