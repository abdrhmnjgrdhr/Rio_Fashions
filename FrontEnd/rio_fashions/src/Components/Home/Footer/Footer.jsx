import { MdOutlineLocationOn } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import MainLogo from "../../../assets/Logo/BrandLogo.jpg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="bg-black text-gray-400 p-10 text-[0.9rem] flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-16 md:gap-28 justify-center">
        <div className="flex flex-col gap-5 ">
          <div className="flex gap-5">
            <img src={MainLogo} width={"40px"} alt="" />
            <h2 className="text-[1.5rem] font-bold font-[times] text-white">
              <a href="#">
                <span className="text-red-600">Rio</span> Fashions
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <MdOutlineLocationOn className="text-xl" />
              <h6>Chennai</h6>
            </div>
            <div className="flex items-center gap-3">
              <IoMailOpenOutline className="text-gray-400" />
              <h6>rioapparels@gmail.com</h6>
            </div>
            <div className="flex items-center gap-3">
              <LuPhoneCall className="text-[1rem]" />
              <h2>+91 82708 35874</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[1.2rem] text-white">Category</h2>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">Men's wear</li>
            <li className="cursor-pointer">Men's Accessories</li>
            <li className="cursor-pointer">Gadgets</li>
            <li className="cursor-pointer">Watches</li>
            <li className="cursor-pointer">Shoes</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[1.2rem] text-white">About</h2>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Blogs</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[1.2rem] text-white">Legal</h2>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">
              <Link to={"/privacy"}>Privacy Policy</Link>
            </li>
            <li className="cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p>
          &#169; {year} <span className="text-red-600">Rio</span> Apparels. All
          Rights Reserved.
        </p>
        <p>
          Developed by{" "}
          <a href="https://www.linkedin.com/in/jagirdhar2412/" className="text-blue-500">
            Jagirdhar.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
