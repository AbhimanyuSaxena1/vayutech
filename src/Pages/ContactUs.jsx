
const ContactUs = () => {
  return (
<>
<form className="flex flex-col items-center text-sm py-10 ">
            <h1 className="text-4xl font-semibold text-gray-200 pb-4">Get in touch with us</h1>
            <p className="text-sm text-gray-400 text-center pb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text.</p>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-gray-300" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-700 rounded outline-none bg-[#15161a] text-gray-100 placeholder-gray-400 focus:border-yellow-400" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-gray-300" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-700 rounded outline-none bg-[#15161a] text-gray-100 placeholder-gray-400 focus:border-yellow-400" type="email" required />
                </div>
            </div>
          <div className="mt-6 w-[350px] md:w-[700px]">
                    <label className="text-gray-300" htmlFor="name">Contact Number</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-700 rounded outline-none bg-[#15161a] text-gray-100 placeholder-gray-400 focus:border-yellow-400" type="number" required />
                </div>
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-gray-300" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-700 rounded resize-none outline-none bg-[#15161a] text-gray-100 placeholder-gray-400 focus:border-yellow-400" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-[#ffcf14] hover:scale-105 hover:-translate-y-1 text-black h-12 w-56 px-4 rounded active:scale-95 transition-all cursor-pointer">Send Message</button>
        </form>
</>
)
}

export default ContactUs