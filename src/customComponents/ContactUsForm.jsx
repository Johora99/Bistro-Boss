import { FaTelegramPlane } from "react-icons/fa";

export default function ContactUsForm() {
  return (
    <div className="bg-whisperGray inter mb-20">
      <div className="p-10">
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        <label className="form-control w-full ">
      <div className="label">
      <span className="label-text formLabel">Name*</span>
     </div>
      <input type="text" name="name" placeholder="Enter your name" className="input input-bordered formInput" />
     </label>
        <label className="form-control w-full ">
      <div className="label">
      <span className="label-text">Email*</span>
     </div>
      <input type="text" name="email" placeholder="Enter your email" className="input input-bordered formInput" />
     </label>
          </div>
          <div className="my-5">
            <label className="form-control w-full ">
      <div className="label">
      <span className="label-text">Phone*</span>
     </div>
      <input type="text" name="phone" placeholder="Enter your phone number" className="input input-bordered formInput" />
     </label>
          </div>
          <div>
            <label className="form-control w-full ">
      <div className="label">
      <span className="label-text">Message*</span>
     </div>
      <textarea className="formInput" rows={10}></textarea>
     </label>
          </div>
          <div>
            Chapcha
          </div>
          <div>
            <button className="flex items-center gap-2 text-white text-xl font-bold btnBg py-3 px-5 mx-auto mt-32">
              Send Message
              <FaTelegramPlane />
            </button>
          </div>
      </form>
      </div>
    </div>
  )
}
