import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signoutSuccess());
  };

  return (
    <>
      {currentUser !== null && currentUser.data !== null ? (
        <>
          <p>{currentUser.data.username || "Issilogino"}</p>
          <button onClick={logOut}>Atsijungti</button>
          {currentUser.data.role === "admin" && (
            <Link to="/adminPage">Admino puslapis</Link>
          )}
        </>
      ) : (
        <p>Neprisijunges</p>
      )}
    </>
  );
}

export default Header;
