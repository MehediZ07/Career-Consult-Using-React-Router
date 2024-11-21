import { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';


export default function MyProfile() {
 
    const { handleForgotPassword} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState();
   
    const handleReset = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        handleForgotPassword(email)
        .then(() => {
            navigate("/auth/login");
            toast.success(`Check your email`, {
                position: "top-center",
                autoClose: 2000,
              });
          })
          .catch((error) => {
            toast.error("Enter valid email!", {
              position: "top-center",
              autoClose: 2000,
            });
          setError(error)
          });
      };
  return (
    <div className='min-h-[600px] mx-auto max-w-7xl w-[90%] flex items-center'>
               <Helmet>
        <title>{`Reset Pass | Career Consult`}</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
        <div className='card bg-base-100 w-full mx-auto max-w-lg shrink-0 rounded-none p-10 border-2 border-gray-200 solid'>
    
     
        <div>
        <form onSubmit={handleReset} className="card-body">
          {/* email input  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your valid email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#faa2a0] hover:bg-[#f99796] text-white rounded-none">Reset Password</button>
          </div>
          {error && (
            <label className="label text-xs text-red-500">Envalid</label>
          )}
        </form>
        <p className="text-center font-semibold">
          Back to login ?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
        </div>
        </div>
        <ToastContainer />
    </div>
  )
}
