export default function Contact() {
  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Get In Contact
        </h1>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-[#F8F9FA] rounded border focus:border-[#ADB5BD] focus:bg-white focus:ring-2 focus:ring-[#ADB5BD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#F8F9FA] rounded border focus:border-[#ADB5BD] focus:bg-white focus:ring-2 focus:ring-[#ADB5BD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-[#F8F9FA] rounded border focus:border-[#ADB5BD] focus:bg-white focus:ring-2 focus:ring-[#ADB5BD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-outt"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-[#001523] rounded-lg text-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
