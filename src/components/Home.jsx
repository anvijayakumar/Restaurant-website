import React from "react";
import tomato from "../assets/tomato-icon.png";
import profile from "../assets/profile.png";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import spoon from "../assets/spoon-icon.png";
import groups from "../assets/Group-icons.png";
import vector from "../assets/vectorbg.png";
import biriyani from "../assets/briyani.png";
import Chicken from "../assets/chicken.png";
import burger from "../assets/burger.png";
import kabab from "../assets/kabab.png";
import juice from "../assets/juice.png";
import desert from "../assets/desert.png";
import noodels from "../assets/noodels.png";
import grill from "../assets/grill.png";
import heart from "../assets/heart-icon.png";
import eye from "../assets/eye-icon.png";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";
import chef4 from "../assets/chef4.png";
import spoons from "../assets/spoons.png";
import icons from "../assets/icons.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import playstore from "../assets/playstore-icon.png";
import apple from "../assets/apple-icon.png";
import line2 from "../assets/line2.png";
import line3 from "../assets/line3.png";
import line4 from "../assets/line4.png";
import line5 from "../assets/line5.png";
import reviewprofile from "../assets/review-profile.png";
import reviewvec from "../assets/review-img.png";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";



const Home = () => {
  return (
    <div className="main-div">
      <div className="flex space-x-8 text-4xl bg-hero bg-no-repeat h-[550px] bg-cover p-20">
        <img src={tomato} alt="image" className="w-32 h-32" />
        <div className="text-white font-interTight pl-20 space-y-3 pr-20">
          <p className="font-Bangers text-orangeclr text-xl">
            SATISFY YOUR CRAVINGS
          </p>
          <h1 className="text-5xl font-extrabold">
            Delicious Foods With <br />
            Wonderful Eating
          </h1>
          <p className="text-xl font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            fugit <br />
            minimaet debitis ut distinctio optio.
          </p>
          <div>
            <input
              type="text"
              placeholder="Search here"
              className="placeholder:text-xl  pl-10 rounded-full w-[550px] h-14"
            />
            <button className="bg-orangeclr w-20 h-9 text-xl rounded-full relative right-24 bottom-1">
              Search
            </button>
          </div>
        </div>
        <div>
          <div className="bg-orangeclr relative top-32 right-10 rounded-full h-32 w-32 border-solid border-4 border-white text-white text-3xl text-center p-5 font-bold">
            35% <br />
            OFF
          </div>
          <img src={profile} alt="img" className="w-72 h-72" />
        </div>
      </div>

      <div className="bg-offerbg w-100% h-[450px]">
        <div className="flex font-Bangers text-orangeclr pl-10 pt-12 space-x-2">
          <p>DAILY OFFER</p>
          <img src={spoon} alt="spoon icon" />
        </div>
        <p className="text-black font-extrabold pl-10 text-2xl px-4">
          Up To 75% Off For This Day
        </p>
        <div className="flex p-10">
          <div className="bg-orangeclr relative left-24 top-8 rounded-full h-16 w-20 p-2 border-solid border-4 border-white text-white text-xm text-center font-bold">
            45% <br />
            Off
          </div>
          <div className="flex bg-white w-[450px] h-40 m-14">
            <img src={grid1} alt="image" />
            <div className="font-poppins pl-5 p-3 text-lg">
              <p className="font-bold">Beef Masala</p>
              <p className="text-xs pb-3">
                Enim ipsam voluptat in quia volptas sit aspe rnatry aut odit
                aut.
              </p>
              <img src={groups} alt="icons" className="h-4 mt-4" />
            </div>
          </div>
          <div className="bg-orangeclr relative left-24 top-8 rounded-full h-16 w-20 p-2 border-solid border-4 border-white text-white text-xm text-center font-bold">
            37% <br />
            Off
          </div>
          <div className="flex bg-white w-[450px] h-40 m-14">
            <img src={grid2} alt="image" />
            <div className="font-poppins pl-5 p-3 text-lg">
              <p className="font-bold">Chicken Nuggets</p>
              <p className="text-xs pb-3">
                Enim ipsam voluptat in quia volptas sit aspe rnatry aut odit
                aut.
              </p>
              <img src={groups} alt="icons" className="h-4" />
            </div>
          </div>
          <div className="bg-orangeclr relative left-24 top-8 rounded-full h-16 w-20 p-2 border-solid border-4 border-white text-white text-xm text-center font-bold">
            40% <br />
            Off
          </div>
          <div className="flex bg-white w-[450px] h-40 m-14">
            <img src={grid1} alt="image" />
            <div className="font-poppins pl-5 p-3 text-lg">
              <p className="font-bold">Beef Masala</p>
              <p className="text-xs pb-3">
                Enim ipsam voluptat in quia volptas sit aspe rnatry aut odit aut.
              </p>
              <img src={groups} alt="icons" className="h-4 mt-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-formbg pl-96 h-[600px] bg-cover border-white border-solid border-x-[120px] border-y-[80px]">
  <div className="bg-orangeclr/90 rounded-tl-full pt-10 pl-60 h-[440px] font-poppins">
    <h1 className="text-center text-4xl text-white">Book A Table</h1>
    <hr className="w-[600px]" />
    <form action="" className="grid grid-cols-2 gap-y-8 pt-5 font-medium">
      <div>
        <label htmlFor="name" className="text-white">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="w-72 h-10 pl-3 rounded-lg placeholder:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-white">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-72 h-10 pl-3 rounded-lg placeholder:text-sm"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-white">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          className="w-72 h-10 pl-3 rounded-lg placeholder:text-sm"
        />
      </div>
      <div>
        <label htmlFor="date" className="text-white">Select Date</label>
        <input
          type="date"
          id="date"
          className="w-72 h-10 pl-3 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="time" className="text-white">Select Time</label>
        <input
          type="time"
          id="time"
          className="w-72 h-10 pl-3 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="persons" className="text-white">Select Person</label>
        <input
          type="number"
          id="persons"
          className="w-72 h-10 pl-3 rounded-lg"
        />
      </div>
    </form>
    <div className="text-center pt-6">
      <button className="text-white w-[500px] h-8 rounded-md bg-blue-900">
        Confirm
      </button>
    </div>
  </div>
</div>


      <div>
        <div className="flex space-x-2 text-orangeclr font-Bangers text-xl font-bold pl-10">
          <p>FOOD MENU</p>
          <img src={spoon} alt="spoon icon" />
        </div>
        <div className="flex justify-between text-orangeclr pl-10 space-x-8">
          <p className="text-black font-extrabold text-2xl">
            Popular Delicious Foods
          </p>
          <div className="space-x-2 pr-20">
            <button className="text-white bg-orangeclr w-24 h-8 rounded-md">
              All Menu
            </button>
            <button className="border-solid border-2 w-24 h-8 rounded-md border-orangeclr">
              Burger
            </button>
            <button className="border-solid border-2 w-24 h-8 rounded-md border-orangeclr">
              Chicken
            </button>
            <button className="border-solid border-2 w-24 h-8 rounded-md border-orangeclr">
              Pizza
            </button>
            <button className="border-solid border-2 w-24 h-8 rounded-md border-orangeclr">
              Dreserts
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 p-10 pl-40 space-y-10">
          <div className="bg-white shadow-xl w-52 h-96 mt-10 rounded-lg">
            <img src={biriyani} alt="image" className="w-52" />
            <p className="text-white text-center bg-orangeclr w-20 h-8 relative left-32 bottom-5">Biryani</p>
            <div className="text-center text-orangeclr space-y-3">
              <p className="font-extrabold text-black">Hyderabadi Biryani</p>
              <p>★★★★</p>
              <p>$65.00 <del className="text-gray-500">$90.00</del></p>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-3">
              <p className="text-white bg-orangeclr w-24 h-7 text-center rounded-md">Add To Cart</p>
              <img src={heart} alt="heart icon" className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"/>
              <img
                src={eye}
                alt="eye icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
            </div>
          </div>
          <div className="bg-white shadow-xl w-52 h-96 rounded-lg">
            <img src={Chicken} alt="image" className="w-52" />
            <p className="text-white text-center bg-orangeclr w-20 h-8 relative left-32 bottom-5">
              Chicken
            </p>
            <div className="text-center text-orangeclr space-y-3">
              <p className="font-extrabold text-black">Daria Shevtsova</p>
              <p>★★★★★</p>
              <p>$80.00 </p>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-3">
              <p className="text-white bg-orangeclr w-24 h-7 text-center rounded-md">
                Add To Cart
              </p>
              <img
                src={heart}
                alt="heart icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
              <img
                src={eye}
                alt="eye icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
            </div>
          </div>
          <div className="bg-white shadow-xl w-52 h-96 rounded-lg">
            <img src={burger} alt="image" className="w-52" />
            <p className="text-white text-center bg-orangeclr w-20 h-8 relative left-32 bottom-5">
              Burger
            </p>
            <div className="text-center text-orangeclr space-y-3">
              <p className="font-extrabold text-black">Spicy Burger</p>
              <p>★★★★</p>
              <p>
                $100.00 <del className="text-gray-500">$110.00</del>
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-3">
              <p className="text-white bg-orangeclr w-24 h-7 text-center rounded-md">
                Add To Cart
              </p>
              <img
                src={heart}
                alt="heart icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
              <img
                src={eye}
                alt="eye icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
            </div>
          </div>
          <div className="bg-white shadow-xl w-52 h-96 rounded-lg">
            <img src={desert} alt="image" className="w-52" />
            <p className="text-white text-center bg-orangeclr w-20 h-8 relative left-32 bottom-5">
              desert
            </p>
            <div className="text-center text-orangeclr space-y-3">
              <p className="font-extrabold text-black">Fried Chicken</p>
              <p>★★★★</p>
              <p>$99.00</p>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-3">
              <p className="text-white bg-orangeclr w-24 h-7 text-center rounded-md">
                Add To Cart
              </p>
              <img
                src={heart}
                alt="heart icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
              <img
                src={eye}
                alt="eye icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
            </div>
          </div>
          <div className="bg-white shadow-xl w-52 h-96 rounded-lg">
            <img src={kabab} alt="image" className="w-52" />
            <p className="text-white text-center bg-orangeclr w-20 h-8 relative left-32 bottom-5">
              Kabab
            </p>
            <div className="text-center text-orangeclr space-y-3">
              <p className="font-extrabold text-black">Mozzerella sticks</p>
              <p>★★★★</p>
              <p>$75.00</p>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-3">
              <p className="text-white bg-orangeclr w-24 h-7 text-center rounded-md">
                Add To Cart
              </p>
              <img
                src={heart}
                alt="heart icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
              <img
                src={eye}
                alt="eye icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
            </div>
          </div>
          <div className="bg-white shadow-xl w-52 h-96 rounded-lg">
            <img src={juice} alt="image" className="w-52" />
            <p className="text-white text-center bg-orangeclr w-20 h-8 relative left-32 bottom-5">
              Kacchi
            </p>
            <div className="text-center text-orangeclr space-y-3">
              <p className="font-extrabold text-black">Popcon Chicken</p>
              <p>★★★★</p>
              <p>
                $69.00 <del className="text-gray-500">$80.00</del>
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-3">
              <p className="text-white bg-orangeclr w-24 h-7 text-center rounded-md">
                Add To Cart
              </p>
              <img
                src={heart}
                alt="heart icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
              <img
                src={eye}
                alt="eye icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
            </div>
          </div>
          <div className="bg-white shadow-xl w-52 h-96 rounded-lg">
            <img src={noodels} alt="image" className="w-52" />
            <p className="text-white text-center bg-orangeclr w-20 h-8 relative left-32 bottom-5">
              Noodels
            </p>
            <div className="text-center text-orangeclr space-y-3">
              <p className="font-extrabold text-black">Chicken Wings</p>
              <p>★★★</p>
              <p>
                $79.00 <del className="text-gray-500">$90.00</del>
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-3">
              <p className="text-white bg-orangeclr w-24 h-7 text-center rounded-md">
                Add To Cart
              </p>
              <img
                src={heart}
                alt="heart icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
              <img
                src={eye}
                alt="eye icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
            </div>
          </div>
          <div className="bg-white shadow-xl w-52 h-96 rounded-lg">
            <img src={grill} alt="image" className="w-52" />
            <p className="text-white text-center bg-orangeclr w-20 h-8 relative left-32 bottom-5">
              Grill
            </p>
            <div className="text-center text-orangeclr space-y-3">
              <p className="font-extrabold text-black">Onion Rings</p>
              <p>★★★★★</p>
              <p>$110.00</p>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-3">
              <p className="text-white bg-orangeclr w-24 h-7 text-center rounded-md">
                Add To Cart
              </p>
              <img
                src={heart}
                alt="heart icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
              <img
                src={eye}
                alt="eye icon"
                className="border-solid border-2 w-7 h-7 border-orangeclr rounded-lg p-1.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-offerbg h-[600px] p-10">
        <div className="flex text-orangeclr font-bold ">
          <p>OUR TEAM</p>
          <img src={spoon} alt="spoon icon" className="pl-4" />
        </div>
        <h2 className="text-3xl font-extrabold">Meet Our Expert Chefs</h2>
        <div className="flex justify-between p-20">
            <div className="bg-white w-60 h-80 overflow-hidden rounded-xl">
              <div className="relative bottom-32 ">
                <hr className="border-solid border-4 border-orangeclr w-60 h-60 bg-orangeclr rotate-45 " />
              </div>
              <div className="relative bottom-44 left-[70px]">
                <img src={chef1} alt="chef image" />
              </div>
              <div className="relative bottom-36 flex font-poppins text-gray-600">
                <img src={spoons} alt="spoons icons" className="absolute w-20 h-20 -left-7"/>
                <div className="relative left-16 space-y-2 text-center text-xl">
                  <p>Naurin Nipu</p>
                  <p className="text-sm">Senior Chef</p>
                  <img src={icons} alt="social-media icons" className="w-28 pt-5"/>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 h-80 overflow-hidden rounded-xl">
              <div className="relative bottom-32 ">
                <hr className="border-solid border-4 border-orangeclr w-60 h-60 bg-orangeclr rotate-45 " />
              </div>
              <div className="relative bottom-44 left-[70px]">
                <img src={chef2} alt="chef image" />
              </div>
              <div className="relative bottom-36 flex font-poppins text-gray-600">
                <img src={spoons} alt="spoons icons" className="absolute w-20 h-20 -left-7"/>
                <div className="relative left-16 space-y-2 text-center text-xl">
                  <p>Ismat Joha</p>
                  <p className="text-sm">Senior Chef</p>
                  <img src={icons} alt="social-media icons" className="w-28 pt-5"/>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 h-80 overflow-hidden rounded-xl">
              <div className="relative bottom-32 ">
                <hr className="border-solid border-4 border-orangeclr w-60 h-60 bg-orangeclr rotate-45 " />
              </div>
              <div className="relative bottom-44 left-[70px]">
                <img src={chef3} alt="chef image" />
              </div>
              <div className="relative bottom-36 flex font-poppins text-gray-600">
                <img src={spoons} alt="spoons icons" className="absolute w-20 h-20 -left-7"/>
                <div className="relative left-16 space-y-2 text-center text-xl">
                  <p>Arun Chandra</p>
                  <p className="text-sm">Senior Chef</p>
                  <img src={icons} alt="social-media icons" className="w-28 pt-5"/>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 h-80 overflow-hidden rounded-xl">
              <div className="relative bottom-32 ">
                <hr className="border-solid border-4 border-orangeclr w-60 h-60 bg-orangeclr rotate-45 " />
              </div>
              <div className="relative bottom-44 left-[70px]">
                <img src={chef4} alt="chef image" />
              </div>
              <div className="relative bottom-36 flex font-poppins text-gray-600">
                <img src={spoons} alt="spoons icons" className="absolute w-20 h-20 -left-7"/>
                <div className="relative left-16 space-y-2 text-center text-xl">
                  <p>Isita Rahman</p>
                  <p className="text-sm">Senior Chef</p>
                  <img src={icons} alt="social-media icons" className="w-28 pt-5"/>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="flex h-96 justify-around">
        <div className="flex m-20 bg-bgclr1 w-[600px]">
          <div className="p-9 text-gray-600 text-xs">
            <p className="text-orangeclr font-poppins">Weekly Best Seller</p>
            <h3 className="text-2xl font-extrabold">Fried Chicken</h3>
            <p>Neque porro quisquam est qui dolor <br />ipsum quia dolor sit ametsed.</p>
            <div className="text-sm font-bold pt-5">
              <a href="">Shop Now →</a>
            </div>
          </div>
          <div className="flex items-center ">
            <img src={img1} alt="image" className="w-40 h-40 relative left-20"/>
            <hr className="border-solid border-2 h-40 w-40 bg-circle1 rounded-full static"/>
          </div>
        </div>
        <div className="flex m-20 bg-bgclr2 w-[600px]">
          <div className="pl-10 pt-10 text-gray-600 text-xs">
            <p className="text-orangeclr font-poppins">Daily Offer</p>
            <h3 className="text-2xl font-extrabold">Hyderbadi Biriyani</h3>
            <p>Neque porro quisquam est qui dolor <br />ipsum quia dolor sit ametsed.</p>
            <div className="text-sm font-bold pt-5">
              <a href="">Shop Now →</a>
            </div>
          </div>
          <div className="flex items-center ">
            <img src={img2} alt="image" className="w-40 h-40 relative left-20"/>
            <hr className="border-solid border-2 h-40 w-40 bg-circle2 rounded-full static"/>
          </div>
        </div>
      </div>

      <div className="flex h-[500px] justify-between">
        <div className="bg-bggridimg text-white w-[400px] bg-cover">
          <div className="bg-blue-950/50 w-full h-full font-poppins font-extrabold text-3xl text-center pt-20">
            <p className="text-orangeclr text-xl font-bold">$5.00 Cashback</p>
            <h1>Easy To Order Our All Food</h1>
            <div className="flex text-xs items-center pt-20">
              <div className="flex bg-orangeclr m-5 rounded-md">
                <img src={playstore} alt="playstore icon" className="p-2"/>
                <p >Avilable on the <span className="text-base">Google Play</span></p>
              </div>
              <div className="flex bg-orangeclr m-5 rounded-md">
                <img src={apple} alt="apple icon" className="p-2"/>
                <p>Avilable on the <span className="text-base">Apple Store</span></p>
              </div>
            </div>
          </div>
        </div>
        <img src={line2} alt="image" />
        <img src={line3} alt="image" />
        <img src={line4} alt="image" />
        <img src={line5} alt="image" />
      </div>

      <div className="p-10 h-[600px]">
        <div className="flex space-x-4 font-Bangers text-orangeclr">
          <p>Testimonial</p>
          <img src={spoon} alt="spoon icon" />
        </div>
        <h1 className="font-extrabold text-2xl ">Our Customar Feedbacks</h1>
        <div className="flex space-x-40 pt-10 pr-40 justify-evenly text-center text-white">
          <div className="bg-orangeclr p-6 rounded-lg w-[250px] h-68">
            <div className="bg-navbg w-[500px] rounded-lg h-64 ">
              <img src={reviewprofile} alt="image" className="border-solid border-white border-4 rounded-full relative left-48 bottom-10"/>
              <h4 className="text-2xl">Isita Islam</h4>
              <p>NYC USA</p>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus 
              presentium quaerat nihil magnam a porro eaque numquam</p>
              <p className="text-orangeclr pt-5">★★★★★</p>
            </div>
          </div>
          <div className="bg-orangeclr p-6 rounded-lg w-[250px] h-68">
            <div className="bg-navbg w-[500px] rounded-lg h-64">
              <img src={reviewprofile} alt="image" className="border-solid border-white border-4 rounded-full relative left-48 bottom-10"/>
              <h4 className="text-2xl">Isita Islam</h4>
              <p>NYC USA</p>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus 
              presentium quaerat nihil magnam a porro eaque numquam</p>
              <p className="text-orangeclr pt-5">★★★★★</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-reviewimg h-96 bg-cover">
        <div className="bg-blue-800/30 h-full flex items-center justify-evenly text-white">
        <div className="text-center">
          <img src={reviewvec} alt="image" />
          <div className="relative space-y-6 bottom-24">
          <p>85,000+</p>
          <img src={r1} alt="icon" className="inline-block bg-orangeclr border-solid border-orangeclr border-8 rounded-full"/>
          </div>
          <p className="text-2xl">Customer Serve</p>
        </div>
        <div className="text-center">
          <img src={reviewvec} alt="image" />
          <div className="relative space-y-6 bottom-24">
          <p>120+</p>
          <img src={r2} alt="icon" className="inline-block  bg-orangeclr border-solid border-orangeclr border-8 rounded-full"/>
          </div>
          <p className="text-2xl">Experience Chef</p>
        </div>
        <div className="text-center">
          <img src={reviewvec} alt="image" />
          <div className="relative space-y-6 bottom-24">
          <p>72,000+</p>
          <img src={r3} alt="icon" className="inline-block bg-orangeclr border-solid border-orangeclr border-8 rounded-full"/>
          </div>
          <p className="text-2xl">Happy Customer</p>
        </div>
        <div className="text-center">
          <img src={reviewvec} alt="image" />
          <div className="relative space-y-6 bottom-24">
          <p>30+</p>
          <img src={r4} alt="icon" className="inline-block  bg-orangeclr border-solid border-orangeclr border-8 rounded-full"/>
          </div>
          <p className="text-2xl">Winning Award</p>
        </div>
      </div>
      </div>

      <div className="p-10">
        <div className="flex space-x-4 font-semibold font-poppins text-orangeclr">
          <p>NEWS & BLOGS</p>
          <img src={spoon} alt="icon" />
        </div>
        <h1 className="text-2xl font-extrabold">Our Latest Foods Blog</h1>
        <div className="flex justify-evenly p-10 ">
        <div className="bg-white shadow-xl w-72 h-[600px]">
          <img src={juice} alt="image" className="w-72 h-72"/>
          <p className="text-white bg-orangeclr text-center h-8 w-20 rounded-sm relative left-52 bottom-5">Food</p>
          <div className="flex space-x-5">
            <img src={reviewprofile} alt="image" className="w-14 h-14"/>
            <p>Jakal Talma <br /><span className="text-orangeclr text-xs">20 apr 2023</span></p>
          </div >
          <div className="p-5 text-lg font-semibold">
          <h3>Summer Water Rose + Bubbly Rose is Hear!</h3>
          <p className="text-xs text-gray-600 py-2">Lorem ipsum dolor sir amer consecrutr adipisicing elid. venaim odiy besuty seqiu...</p>
          <hr className="border-solid border-orangeclr py-3"/>
          <a href="">Read More →</a>
        </div>
        </div>
        <div className="bg-white shadow-xl w-72 h-[600px]">
          <img src={noodels} alt="image" className="w-72 h-72"/>
          <p className="text-white bg-orangeclr text-center h-8 w-24 rounded-sm relative left-48 bottom-5">Restaurent</p>
          <div className="flex space-x-5">
            <img src={reviewprofile} alt="image" className="w-14 h-14"/>
            <p>Jakal Talma <br /><span className="text-orangeclr text-xs">20 apr 2023</span></p>
          </div>
          <div className="p-5 text-lg font-semibold">
          <h3>Summer Water Rose + Bubbly Rose is Hear!</h3>
          <p className="text-xs text-gray-600 py-2">Lorem ipsum dolor sir amer consecrutr adipisicing elid. venaim odiy besuty seqiu...</p>
          <hr className="border-solid border-orangeclr py-3"/>
          <a href="">Read More →</a>
        </div>
        </div>
        <div className="bg-white shadow-xl w-72 h-[600px]">
          <img src={grill} alt="image" className="w-72 h-72"/>
          <p className="text-white bg-orangeclr text-center h-8 w-20 rounded-sm relative left-52 bottom-5">Resort</p>
          <div className="flex space-x-5">
            <img src={reviewprofile} alt="image" className="w-14 h-14"/>
            <p>Jakal Talma <br /><span className="text-orangeclr text-xs">20 apr 2023</span></p>
          </div>
          <div className="p-5 text-lg font-semibold">
          <h3>Summer Water Rose + Bubbly Rose is Hear!</h3>
          <p className="text-xs text-gray-600  py-2">Lorem ipsum dolor sir amer consecrutr adipisicing elid. venaim odiy besuty seqiu...</p>
          <hr className="border-solid border-orangeclr py-3"/>
          <a href="">Read More →</a>
        </div>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
