import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="notfoundWrapper">
        <h1>404</h1>

        <h2>Page not found</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <br />
        <Link to="/">Go back to home</Link>
      </div>
    </>
  );
}
