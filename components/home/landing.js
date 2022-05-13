import Button from 'react-bootstrap/Button';
export default function Landing() {
  return (
    <div className="landing">
      <div className="heading">
        <h1 className="heading-text">Start Your Day Off Right</h1>
        <h1 className="heading-sub">
          Become <span>Happyr</span>
        </h1>
        <Button className="heading-btn" variant="outline-light">Get Started</Button>
      </div>
    </div>
  );
}
