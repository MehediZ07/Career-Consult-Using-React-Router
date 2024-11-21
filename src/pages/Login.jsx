import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const Login = () => {
  const { userLogin, setUser, handleGoogleLogin,logOut } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  // console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Login Successful!`, {
          position: "top-center",
          autoClose: 2000,
        });
        navigate(location?.state ? location.state : "/profile");
      })
      .catch((err) => {
        setError({ ...error, login: "Envalid Email Password!"});
        toast.error("Envalid Email Password!", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };


const handleSubmitGoogle =() =>{
  handleGoogleLogin(googleProvider)
  .then((result) => {
    setUser(result.user); 
    navigate(location?.state ? location.state : "/profile");
  })
  .catch((error) => {
    console.error("Error during Google Sign-In:", error.message);
  });
}

const togglePasswordVisibility = () => {
  setIsPasswordVisible((prevState) => !prevState);
};
  return (
    <div className="min-h-screen flex justify-center items-center mb-12">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 border-2 border-gray-200 solid">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute  top-[3.25rem] right-4 text-gray-500"
              style={{ border: 'none', background: 'transparent' }}
            >
              {isPasswordVisible ? <FaRegEyeSlash />  : <FaRegEye />}
            </button>
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
            <label className="label">
              <Link to='/auth/resetpass' className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#bbe6dd] hover:bg-[#b5eade] text-gray-500 rounded-none">Login</button>
          </div>
       
        </form>
        <div className="form-control max-w-lg px-8 -mt-6">
        <button className="btn bg-[#bbe6dd] hover:bg-[#b5eade] text-gray-500 rounded-none mb-4" onClick={()=>{handleSubmitGoogle(); }}>Google login</button>
       <button onClick={logOut} className="btn bg-[#faa2a0] hover:bg-[#f99796] text-white rounded-none">
            Log-Out
          </button>
        </div>

        <p className="text-center font-semibold mt-4">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
