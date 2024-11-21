import { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


export default function MyProfile() {
    const { user, logOut } = useContext(AuthContext);
    const { handleForgotPassword, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const name = form.get("name");
      const photo = form.get("photo");
      updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        navigate("/profile");
      })
    };

    const handleReset = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        handleForgotPassword(email)
        .then(() => {
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
          console.log(error)
            // ..
          });
      };
  return (
    <div className='min-h-screen mx-auto max-w-7xl w-[90%]'>
        <div className='card bg-base-100 w-full mx-auto max-w-lg shrink-0 rounded-none p-10'>
        <div className='flex items-center gap-4 px-8'>
           <div className='w-20 h-20 rounded-full'>
           <img className='w-full h-full rounded-full' src={user?.photoURL} alt={user? user.displayName: ''} />
           </div>
            <div>
                <h1 className='text-[#97e5d4] font-semibold text-xl'>{user? user.displayName: ''}</h1>
                <p className='text-gray-500 italic' >{user? user.email: ''}</p>
            </div>
        </div>
      <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-sx text-red-500">{error.name}</label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>


          <div className="form-control mt-6">
            <button className="btn bg-[#faa2a0] hover:bg-[#f99796] text-white rounded-none">Update Profile</button>
          </div>
        </form>
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
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Reset Password</button>
          </div>
        </form>
        </div>
     
        </div>
    </div>
  )
}
