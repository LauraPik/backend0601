import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../../redux/userSlice";

function Header() {
    const { currentUser } = useSelector((state) => state.user);
    console.log(currentUser)
    const dispatch = useDispatch()


const logOut= ()=>{
    dispatch(signoutSuccess())

}

  return (
    <div>
      <p>{currentUser.data.username || "Issilogino"}</p>
      <button onClick={logOut}>Atsijungti</button>
    </div>
  )
}

export default Header
