/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';


export default function MyProfile() {
    const { user } = useContext(AuthContext);
    const {  updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const name = form.get("name");
      const photo = form.get("photo");
      updateUserProfile({ displayName: name || null, photoURL: photo || null })
      .then(() => {
        toast.success(`Registration Successful!`, {
            position: "top-center",
            autoClose: 2000,
          });
        navigate("/profile");
        e.target.reset();
      })
    };

 
  return (
    <div className='min-h-[600px] mx-auto max-w-7xl w-[90%]'>
               <Helmet>
        <title>{`My Profile | Career Consult`}</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
        <div className='card bg-base-100 w-full mx-auto max-w-lg shrink-0 p-4 sm:p-10 border-2 border-gray-200 solid rounded-lg'>
        <div className='flex items-center gap-4 px-8'>
           <div className='w-20 h-20 rounded-full'>
           <img className='w-full h-full rounded-full' src={user?.photoURL} alt={user? user.displayName: ''} />
           </div>
            <div>
                <h1 className='text-[#97e5d4] font-semibold text-xl'>{user? user.displayName: ''}</h1>
                <p className='text-gray-500 italic' >{user? user.email: ''}</p>
            </div>
        </div>
        <div>
            <h1 className='mx-8 p-2 mt-8 -mb-8 border-2 solid border-gray-200 rounded-xl text-center text-lg text-[#faa2a0] font-semibold' >You wants to update your profile?</h1>
        </div>
      <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Update Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              
            />
          </div>
          {error.name && (
            <label className="label text-sx text-red-500">{error.name}</label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Update Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              
            />
          </div>


          <div className="form-control mt-6">
            <button className="btn bg-[#faa2a0] hover:bg-[#f99796] text-white rounded-none">Update Profile</button>
          </div>
        </form>
        <div>
     
        </div>
     
        </div>
        <ToastContainer />
    </div>
  )
}
