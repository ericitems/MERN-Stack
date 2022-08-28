import { Link } from "react-router-dom";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

const Navbar = () => {
  const { theme, dispatch } = useWorkoutsContext();

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <header>
      <div className="container">
        <Link to="/" className="nav-link">
          <svg
            width="70"
            height="70"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_2)">
              <path
                d="M0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50"
                fill="#1AAC83"
              />
              <path
                d="M28 39H34V61H28V53H26V47H28V39ZM58 47H42V33H36V67H42V53H58V67H64V33H58V47ZM72 47V39H66V61H72V53H74V47H72Z"
                fill="#002A4A"
              />
              <path
                opacity="0.1"
                d="M85.355 14.645L14.644 85.355C34.17 104.881 65.829 104.881 85.355 85.355C104.882 65.83 104.882 34.171 85.355 14.645Z"
                fill="black"
              />
              <path
                opacity="0.1"
                d="M50 0V100C77.614 100 100 77.614 100 50C100 22.386 77.614 0 50 0Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_2">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1>Workout Buddy</h1>
        </Link>
        <span
          className="dark-mode-button material-symbols-outlined"
          onClick={handleThemeToggle}
        >
          {theme ? "dark_mode" : "light_mode"}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
