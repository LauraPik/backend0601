import { useState } from "react"
import * as authService from "../../services/auth"
import { useDispatch } from "react-redux";
import { signInStart, signInSuccess } from "../../redux/userSlice";

const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password:''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const data = await authService.login(form)
            dispatch(signInSuccess(data))
            console.log('sekme')

        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" onChange={handleChange} value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" onChange={handleChange} value={form.password} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
