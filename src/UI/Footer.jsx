import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Icon } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FacebookOutlined, NearMeOutlined } from "@mui/icons-material";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="relative sm:mt-28 whitespace-nowrap">
      <div className="bg-[#7296ab] hidden sm:flex flex-col gap-4 w-fit px-6 py-3 items-center rounded-md absolute top-0 right-1/2 translate-x-1/2 translate-y-[-50%]">
        <h2 className="text-3xl text-white">
          Luminae <span className="text-footer">Store</span>
        </h2>
        <p className="text-center text-white">
          Register your email not to miss the last minutes off+ Free delivery
        </p>
        <div className="relative w-fit">
          <input
            placeholder="Enter your email"
            className="py-2 rounded-sm ps-2 pe-7"
          />
          <div className="absolute inset-y-0 right-0 flex items-center justify-center">
            <NearMeOutlined />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-main">
          <div className="flex flex-col gap-y-[25px]">
            <p className="font-bold ">Company</p>
            <ul className="list-none flex flex-col gap-[15px] capitalize">
              <li className="text-textGrey">About us</li>
              <li>Our store</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[25px]">
            <p className="font-bold ">Career opportunities</p>
            <ul className="list-none flex flex-col gap-[15px] capitalize">
              <li className="font-normal ">Selling programs</li>
              <li>Advertise</li>
              <li>Cooperation</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[25px]">
            <p className="font-bold ">How to buy</p>
            <ul className="list-none flex flex-col gap-[15px] capitalize">
              <li className="font-normal ">Making payments</li>
              <li>Delivery Options</li>
              <li>Buyer Protection</li>
              <li>New user guide</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[25px]">
            <p className="font-bold ">Help</p>
            <ul className="list-none flex flex-col gap-[15px] capitalize">
              <li className="font-normal ">Contact Us</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-6 py-4 bg-white">
        <div className="flex flex-row items-center justify-center gap-3 sm:pb-2 sm:mb-3 sm:border-b-2">
          <div>
            <img className="h-4 w-14" src="../../public/VISA.png"></img>
          </div>
          <div>
            <img className="h-6 w-14" src="../../public/mastercard.png"></img>
          </div>
          <div>
            <img className="w-16 h-6" src="../../public/paypal.png"></img>
          </div>
        </div>
        <div className="flex-row items-center justify-between hidden sm:flex ">
          <p>102 main st., Giza, Egypt</p>
          <p className="text-textGrey">
            @2024 copyright in reserved for Mustafa Ahmed
          </p>
          <div className="flex gap-2">
            <a className="no-underline cursor-pointer" href="">
              <InstagramIcon />
            </a>
            <div>
              <FacebookOutlined />
            </div>
            <div>
              <NearMeOutlined />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
