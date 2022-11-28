import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  //show the Spinner icon, otherwise the text.
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hiddden">Loading...</span>
    </Spinner>
  );
}
