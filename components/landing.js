import Section from "./section";
import Navigation from "./navigation";
import Button from "react-bootstrap/Button";
export default function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <Navigation />
        <div className="heading d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-3">Start Your Day Off Right</h1>
          <h1 className="display-4" style={{ fontWeight: "100" }}>
            Become <span>Happyr</span>
          </h1>
          <Button className="heading-btn" href="#about" variant="outline-light">
           Learn More 
          </Button>
        </div>
      </div>
    </div>
  );
}
