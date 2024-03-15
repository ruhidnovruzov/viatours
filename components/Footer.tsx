
function Footer() {
    return (
      <footer className="h-[600px] mx-auto w-[95%] bg-[#f6ecec] mt-10">
        <div className="mx-auto w-[70%]">
        <div className="flex justify-between py-16">
        <p className="text-[19.7px]">Speak to our expert at<span className="text-[#EB662B]">1-800-453-6744</span></p>
        <p>Follow Us</p>
        </div>
        <div className="pt-28 flex text-[14.41px] gap-10">
          <div className="w-[40%] ">
          <h4 className="font-bold">Contact</h4>
          <p className="my-7">328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
          <p>hi@viatours.com</p>
        </div>
        <div>
        <h4 className="font-bold mb-3">About</h4>
        <ul>
          <li>About Us</li>
          <li>Tourz Reviews</li>
          <li>Contact Us</li>
          <li>Travel Guides</li>
          <li>Data Policy</li>
          <li>Cookie Policy</li>
          <li>Legal</li>
          <li>Sitemap</li>
        </ul>
        </div>
        <div>
        <h4 className="font-bold mb-3">Support</h4>
        <ul>
          <li>Get in Touch</li>
          <li>Help center</li>
          <li>Live chat</li>
          <li>How it works</li>
        </ul>
        </div>
        <div className="w-[40%]">
          <h4 className="font-bold mb-3">Newsletter</h4>
          <p>Subscribe to the free newsletter and stay up to date</p>
          <div className="flex gap-3 mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-[12px] pl-2 w-[60%]"
                />
                <button className="h-14 bg-white text-black px-8 rounded-[12px]">
                  Send
                </button>
              </div>
              <h4 className="font-bold mb-3 mt-6">Mobile Apps</h4>
              <ul>
                <li>iOS App</li>
                <li>Android App</li>
              </ul>
        </div>
        </div>
        </div>
        <div>
          
        </div>
      </footer>
    )
  }
  
  export default Footer