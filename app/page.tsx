import Image from "next/image";
import Link from "next/link";
import ticket from "../public/assets/ticket.png";
import ballon from "../public/assets/ballon.png";
import diamond from "../public/assets/diamond.png";
import medal from "../public/assets/medal.png";
import circle_1 from "../public/assets/circle1.png";
import circle_2 from "../public/assets/circle2.png";
import circle_3 from "../public/assets/circle3.png";
import circle_4 from "../public/assets/circle4.png";
import circle_5 from "../public/assets/circle5.png";
import circle_6 from "../public/assets/circle6.png";
import circle_7 from "../public/assets/circle7.png";
import circle_8 from "../public/assets/circle8.png";
import tourCard_1 from "../public/assets/tourCard1.png";
import tourCard_2 from "../public/assets/tourCard2.png";
import tourCard_3 from "../public/assets/tourCard3.png";
import tourCard_4 from "../public/assets/tourCard4.png";
import tourCard_5 from "../public/assets/tourCard5.png";
import tourCard_6 from "../public/assets/tourCard6.png";
import tourCard_7 from "../public/assets/tourCard7.png";
import tourCard_8 from "../public/assets/tourCard8.png";
import Link_1 from "../public/assets/Link1.png";
import Link_2 from "../public/assets/Link2.png";
import Link_3 from "../public/assets/Link3.png";
import Link_4 from "../public/assets/Link4.png";
import Link_5 from "../public/assets/Link5.png";
import Link_6 from "../public/assets/Link6.png";
import circleGirl from "../public/assets/image (5).png";
import phoneFrame from "../public/assets/Frame-phone.png";
import image_2 from "../public/assets/image (2).png";
import image_3 from "../public/assets/image (3).png";
import image_4 from "../public/assets/image (4).png";

export default function Home() {
  return (
    <div className="px-8 pt-24">
      <div className="w-full h-[700px] flex gap-8 flex-col items-center justify-center bg-[url('../public/assets/Section.png')] rounded-t-[12px]">
        <div className="">
          <h1 className="text-[60px] text-white font-bold text-center">
            Your world of joy
          </h1>
          <p className="text-white text-center">
            From local escapes to far-flung adventures, find what makes you
            happy anytime, anywhere
          </p>
        </div>
        <div className="w-[60%] h-24 bg-white rounded-[12px] flex items-center justify-center">
          <div className="flex gap-3">
            <div className="w-16 h-16 border-2 rounded-[12px] border-[#E7E6E6]"></div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-[15px]">Where</h3>
              <p className="text-[#717171]">Search destinations</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-16 h-16 border-2 rounded-[12px] border-[#E7E6E6]"></div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-[15px]">When</h3>
              <p className="text-[#717171]">February 05 ~ March 14</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-16 h-16 border-2 rounded-[12px] border-[#E7E6E6]"></div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-[15px]">Tour Type</h3>
              <p className="text-[#717171]">All tour</p>
            </div>
          </div>
          <div className="ml-10">
            <button className="bg-[#EB662B] text-white h-16 w-28 rounded-[12px]">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-80 mx-auto mt-32">
        <h2 className="font-bold text-2xl">Why choose Tourz</h2>
        <div className="flex gap-12 mt-10">
          <div className="w-[25%]">
            <Image src={ticket} alt="" width={50} height={50} />
            <h3 className="text-[18px] font-bold my-4">Ultimate flexibility</h3>
            <p>
              You're in control, with free cancellation and payment options to
              satisfy any plan or budget.
            </p>
          </div>
          <div className="w-[25%]">
            <Image src={ballon} alt="" width={50} height={50} />
            <h3 className="text-[18px] font-bold my-4">
              Memorable experiences
            </h3>
            <p>
              Browse and book tours and activities so incredible, you'll want to
              tell your friends.
            </p>
          </div>
          <div className="w-[25%]">
            <Image src={diamond} alt="" width={50} height={50} />
            <h3 className="text-[18px] font-bold my-4">Quality at our core</h3>
            <p>High-quality standards. Millions of reviews. A tourz company.</p>
          </div>
          <div className="w-[25%]">
            <Image src={medal} alt="" width={50} height={50} />
            <h3 className="text-[18px] font-bold my-4">
              Award-winning support
            </h3>
            <p>New price? New plan? No problem. We're here to help, 24/7.</p>
          </div>
        </div>
      </div>

      <div className="w-[70%] h-80 mx-auto mt-32">
        <h2 className="font-bold text-2xl">Trending destinations</h2>
        <div className="flex gap-12 mt-10">
          <div className="flex flex-col gap-1 items-center w-[12.5%]">
            <Image src={circle_1} alt="" width={150} height={150} />
            <p className="text-[15.5px]">Paris</p>
            <p className="text-[15.5px]">100+ Tours</p>
          </div>
          <div className="flex flex-col gap-1 items-center w-[12.5%]">
            <Image src={circle_2} alt="" width={150} height={150} />
            <p className="text-[15.5px]">Singapore</p>
            <p className="text-[15.5px]">300+ Tours</p>
          </div>
          <div className="flex flex-col gap-1 items-center w-[12.5%]">
            <Image src={circle_3} alt="" width={150} height={150} />
            <p className="text-[15.5px]">Roma</p>
            <p className="text-[15.5px]">400+ Tours</p>
          </div>
          <div className="flex flex-col gap-1 items-center w-[12.5%]">
            <Image src={circle_4} alt="" width={150} height={150} />
            <p className="text-[15.5px]">Bangkok</p>
            <p className="text-[15.5px]">100+ Tours</p>
          </div>
          <div className="flex flex-col gap-1 items-center w-[12.5%]">
            <Image src={circle_5} alt="" width={150} height={150} />
            <p className="text-[15.5px]">Bali</p>
            <p className="text-[15.5px]">600+ Tours</p>
          </div>
          <div className="flex flex-col gap-1 items-center w-[12.5%]">
            <Image src={circle_6} alt="" width={150} height={150} />
            <p className="text-[15.5px]">Phuket</p>
            <p className="text-[15.5px]">200+ Tours</p>
          </div>
          <div className="flex flex-col gap-1 items-center w-[12.5%]">
            <Image src={circle_7} alt="" width={150} height={150} />
            <p className="text-[15.5px]">Tokyo</p>
            <p className="text-[15.5px]">700+ Tours</p>
          </div>
          <div className="flex flex-col gap-1 items-center w-[12.5%]">
            <Image src={circle_8} alt="" width={150} height={150} />
            <p className="text-[15.5px]">Cappadocia</p>
            <p className="text-[15.5px]">900+ Tours</p>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-80 mx-auto mt-32">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-bold text-2xl">Find Popular Tours</h2>
          <Link href='/list'>See all</Link>
        </div>
        <div className="mt-10 flex flex-col">
          <div className="flex gap-3">
            <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
              <Image src={tourCard_1} alt="" width={250} height={250} />
              <p className="text-[13px] text-[#717171] ml-3 py-2">
                Paris, France
              </p>
              <h3 className="font-bold text-[16px]">
                Centipede Tour - Guided Arizona Desert Tour by ATV
              </h3>
              <p className="text-center text-[13px]">4.8 (243)</p>
              <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
                <p className="text-[13px]">4 days</p>
                <p>
                  <span className="text-[13px]">From </span>
                  <span className="font-bold text-[14.5px] ml-2">$189.25</span>
                </p>
              </div>
            </div>
            <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
              <Image src={tourCard_2} alt="" width={250} height={250} />
              <p className="text-[13px] text-[#717171] ml-3 py-2">
                New York, USA
              </p>
              <h3 className="font-bold text-[16px]">
                Molokini and Turtle Town Snorkeling Adventure Aboard
              </h3>
              <p className="text-center text-[13px]">4.8 (243)</p>
              <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
                <p className="text-[13px]">4 days</p>
                <p>
                  <span className="text-[13px]">From </span>
                  <span className="font-bold text-[14.5px] ml-2">$225</span>
                </p>
              </div>
            </div>
            <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
              <Image src={tourCard_3} alt="" width={250} height={250} />
              <p className="text-[13px] text-[#717171] ml-3 py-2">London, UK</p>
              <h3 className="font-bold text-[16px]">
                Westminster Walking Tour &Westminster Abbey Entry
              </h3>
              <p className="text-center text-[13px]">4.8 (243)</p>
              <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
                <p className="text-[13px]">4 days</p>
                <p>
                  <span className="text-[13px]">From </span>
                  <span className="font-bold text-[14.5px] ml-2">$943</span>
                </p>
              </div>
            </div>
            <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
              <Image src={tourCard_4} alt="" width={250} height={250} />
              <p className="text-[13px] text-[#717171] ml-3 py-2">
                New York, USA
              </p>
              <h3 className="font-bold text-[16px]">
                All Inclusive Ultimate Circle Island Day Tour with Lunch
              </h3>
              <p className="text-center text-[13px]">4.8 (243)</p>
              <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
                <p className="text-[13px]">4 days</p>
                <p>
                  <span className="text-[13px]">From </span>
                  <span className="font-bold text-[14.5px] ml-2">$771</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
              <Image src={tourCard_5} alt="" width={250} height={250} />
              <p className="text-[13px] text-[#717171] ml-3 py-2">
                Paris, France
              </p>
              <h3 className="font-bold text-[16px]">
                Space Center Houston AdmissionTicket
              </h3>
              <p className="text-center text-[13px]">4.8 (243)</p>
              <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
                <p className="text-[13px]">4 days</p>
                <p>
                  <span className="text-[13px]">From </span>
                  <span className="font-bold text-[14.5px] ml-2">$189.25</span>
                </p>
              </div>
            </div>
            <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
              <Image src={tourCard_6} alt="" width={250} height={250} />
              <p className="text-[13px] text-[#717171] ml-3 py-2">
                New York, USA
              </p>
              <h3 className="font-bold text-[16px]">
                Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area
              </h3>
              <p className="text-center text-[13px]">4.8 (243)</p>
              <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
                <p className="text-[13px]">4 days</p>
                <p>
                  <span className="text-[13px]">From </span>
                  <span className="font-bold text-[14.5px] ml-2">$225</span>
                </p>
              </div>
            </div>
            <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
              <Image src={tourCard_7} alt="" width={250} height={250} />
              <p className="text-[13px] text-[#717171] ml-3 py-2">London, UK</p>
              <h3 className="font-bold text-[16px]">
                History and Hauntings of Salemc Guided Walking Tour
              </h3>
              <p className="text-center text-[13px]">4.8 (243)</p>
              <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
                <p className="text-[13px]">4 days</p>
                <p>
                  <span className="text-[13px]">From </span>
                  <span className="font-bold text-[14.5px] ml-2">$943</span>
                </p>
              </div>
            </div>
            <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
              <Image src={tourCard_8} alt="" width={250} height={250} />
              <p className="text-[13px] text-[#717171] ml-3 py-2">
                New York, USA
              </p>
              <h3 className="font-bold text-[16px]">
                Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona
                Waikoloa Pick Up{" "}
              </h3>
              <p className="text-center text-[13px]">4.8 (243)</p>
              <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
                <p className="text-[13px]">4 days</p>
                <p>
                  <span className="text-[13px]">From </span>
                  <span className="font-bold text-[14.5px] ml-2">$771</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-[650px]">
        <div className="bg-[url('../public/assets/Frame.png')] bg-contain h-[500px] w-full bg-no-repeat pt-16  pl-16">
          <div className="w-[40%]">
            <h1 className="text-[40px] font-bold">
              Grab up to <span className="text-[#EB662B]">35% off</span> on your
              favorite Destination
            </h1>
            <p className="text-[14.77px] my-6">
              Limited time offer, don't miss the opportunity
            </p>
            <button className="bg-[#EB662B] text-white px-5 h-12 rounded-[12px]">
              Book now
            </button>
          </div>
        </div>
      </div>

      <div className="w-[70%] mx-auto">
        <h2 className="font-bold text-2xl">Popular things to do</h2>
        <div className="mt-10 flex gap-7">
          <div className="flex flex-col gap-7">
            <Image src={Link_1} width={250} height={250} alt="" />
            <Image src={Link_2} width={250} height={250} alt="" />
          </div>
          <div>
            <Image src={Link_3} width={345} height={345} alt="" />
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <Image src={Link_4} width={395} height={395} alt="" />
            </div>
            <div className="flex gap-7 justify-between">
              <Image src={Link_5} width={170} height={170} alt="" />
              <Image src={Link_6} width={170} height={170} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto mt-32 bg-[#F5F5F5] p-24 rounded-[12px]">
        <h2 className="font-bold text-2xl">Top Trending</h2>
        <div className="flex gap-3 mt-10">
          <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
            <Image src={tourCard_1} alt="" width={250} height={250} />
            <p className="text-[13px] text-[#717171] ml-3 py-2">
              Paris, France
            </p>
            <h3 className="font-bold text-[16px]">
              Centipede Tour - Guided Arizona Desert Tour by ATV
            </h3>
            <p className="text-center text-[13px]">4.8 (243)</p>
            <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
              <p className="text-[13px]">4 days</p>
              <p>
                <span className="text-[13px]">From </span>
                <span className="font-bold text-[14.5px] ml-2">$189.25</span>
              </p>
            </div>
          </div>
          <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
            <Image src={tourCard_2} alt="" width={250} height={250} />
            <p className="text-[13px] text-[#717171] ml-3 py-2">
              New York, USA
            </p>
            <h3 className="font-bold text-[16px]">
              Molokini and Turtle Town Snorkeling Adventure Aboard
            </h3>
            <p className="text-center text-[13px]">4.8 (243)</p>
            <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
              <p className="text-[13px]">4 days</p>
              <p>
                <span className="text-[13px]">From </span>
                <span className="font-bold text-[14.5px] ml-2">$225</span>
              </p>
            </div>
          </div>
          <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
            <Image src={tourCard_3} alt="" width={250} height={250} />
            <p className="text-[13px] text-[#717171] ml-3 py-2">London, UK</p>
            <h3 className="font-bold text-[16px]">
              Westminster Walking Tour &Westminster Abbey Entry
            </h3>
            <p className="text-center text-[13px]">4.8 (243)</p>
            <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
              <p className="text-[13px]">4 days</p>
              <p>
                <span className="text-[13px]">From </span>
                <span className="font-bold text-[14.5px] ml-2">$943</span>
              </p>
            </div>
          </div>
          <div className="w-[25%] border-[1px] border-[#E7E6E6] rounded-[12px] p-4">
            <Image src={tourCard_4} alt="" width={250} height={250} />
            <p className="text-[13px] text-[#717171] ml-3 py-2">
              New York, USA
            </p>
            <h3 className="font-bold text-[16px]">
              All Inclusive Ultimate Circle Island Day Tour with Lunch
            </h3>
            <p className="text-center text-[13px]">4.8 (243)</p>
            <div className="flex w-full border-t-[1px] border-[#E7E6E6] py-2 justify-between mt-5">
              <p className="text-[13px]">4 days</p>
              <p>
                <span className="text-[13px]">From </span>
                <span className="font-bold text-[14.5px] ml-2">$771</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto pt-32">
        <div className="bg-[url('../public/assets/Frame-2.png')] h-[600px] bg-cover w-full bg-no-repeat">
          <h1 className="font-bold text-2xl text-center">Customer Reviews</h1>
          <div className="w-full flex flex-col items-center">
            <div className="mt-8">
              <Image
                src={circleGirl}
                width={100}
                height={100}
                alt=""
                className=" m-4"
              />
            </div>
            <div className="text-center w-[50%]">
              <p className="text-[#EB662B]">Excellent Service!</p>
              <h4 className="font-bold text-[17px] my-6">
                I had an amazing experience with this company. The service was
                top-notch, and the staff was incredibly friendly. I highly{" "}
                <br /> recommend them!
              </h4>
              <p className="text-[16px]">John Smith</p>
              <p className="text-[14px]">Traveler</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto pt-14">
        <div className="bg-[url('../public/assets/text.png')] w-full h-[350px] bg-contain bg-no-repeat">
          <div className="flex items-center justify-center h-[350px] ">
            <div className="w-[40%]">
              <h1 className="text-[39.53px] font-bold text-white">
                Get 5% off your 1st app booking
              </h1>
              <p className="text-white my-2">
                Booking's better on the app. Use promo code "TourBooking" to
                save!
              </p>
              <p className="text-white mt-7">
                Get a magic link sent to your email
              </p>
              <div className="flex gap-6 mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-[12px] pl-2 w-[90%]"
                />
                <button className="h-14 bg-white text-black px-8 rounded-[12px]">
                  Send
                </button>
              </div>
            </div>
            <Image
              src={phoneFrame}
              width={445}
              height={445}
              alt=""
              className="ml-10"
            />
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto pt-14">
        <h2 className="font-bold text-2xl">Travel Articles</h2>
        <div className="mt-10 flex gap-10">
          <div className="w-[35%]">
            <Image src={image_2} alt="" width={300} height={300} />
            <div className="flex gap-4 my-4">
            <p className="text-[13.89px]">April 06 2023</p> <p className="text-[13.89px]">By Ali Tufan</p></div>
            <h4 className="text-[17.3px]">
              Kenya vs Tanzania Safari: The Better African Safari Experience
            </h4>
          </div>
          <div className="w-[35%]">
            <Image src={image_3} alt="" width={300} height={300} />
            <div className="flex gap-4 my-4">
            <p className="text-[13.89px]">April 06 2023</p> <p className="text-[13.89px]">By Ali Tufan</p></div>
            <h4 className="text-[17.3px]">
              Kenya vs Tanzania Safari: The Better African Safari Experience
            </h4>
          </div>
          <div className="w-[35%]">
            <Image src={image_4} alt="" width={300} height={300} />
            <div className="flex gap-4 my-4">
            <p className="text-[13.89px]">April 06 2023</p> <p className="text-[13.89px]">By Ali Tufan</p></div>
            <h4 className="text-[17.3px]">
              Kenya vs Tanzania Safari: The Better African Safari Experience
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
