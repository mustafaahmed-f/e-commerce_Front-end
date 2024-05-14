import {
  FacebookOutlined,
  FavoriteBorder,
  KeyboardArrowDownOutlined,
  NearMeOutlined,
  Person2Outlined,
  SearchOutlined,
  Segment,
  ShoppingBag,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import ProductSearchDiv from "./ProductSearchDiv";
import MainLogo from "./MainLogo";

function DesktopHeader() {
  return (
    <div className="hidden sm:block">
      {/* ////First section for logo, search and main pages//// */}

      <div className="desktop-header-first-section">
        <div className="flex items-center md:gap-40 sm:justify-between md:justify-start">
          <MainLogo />
          <ProductSearchDiv />
        </div>

        <div className="flex items-center sm:justify-between md:justify-end md:gap-32">
          <div className="flex items-center justify-center gap-9 md:gap-11 whitespace-nowrap">
            <Link className="hover:text-sky-600">About us</Link>
            <Link className="hover:text-sky-600">Blog</Link>
            <Link className="hover:text-sky-600">Contact us</Link>
            <Link className="hover:text-sky-600">Help & Support</Link>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a
              className="no-underline cursor-pointer hover:text-sky-600 text-neutral-400"
              href=""
            >
              <InstagramIcon />
            </a>
            <a
              className="no-underline cursor-pointer hover:text-sky-600 text-neutral-400"
              href=""
            >
              <FacebookOutlined />
            </a>
            <a
              className="no-underline cursor-pointer hover:text-sky-600 text-neutral-400"
              href=""
            >
              <NearMeOutlined />
            </a>
          </div>
        </div>
      </div>

      {/* ////Second section for secondary pages ,favourites and cart//// */}

      <div className="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] bg-black text-white py-3">
        <div className="flex items-center justify-center gap-12">
          <div className="flex gap-2 cursor-pointer hover:text-sky-600">
            <div className="-scale-x-100">
              <Segment />
            </div>
            <p className="font-semibold">Categories</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer hover:text-sky-600">
              USD
              <span>
                <KeyboardArrowDownOutlined />
              </span>
            </p>
            <p className="cursor-pointer hover:text-sky-600">
              English
              <span>
                <KeyboardArrowDownOutlined />
              </span>
            </p>
          </div>
        </div>
        <div className="items-center justify-center md:flex sm:hidden border-s-[1px] border-s-neutral-400">
          <img src="../../public/header photo.png" className="w-16 h-16" />
          <div>
            <p>Weekly Men's Toiletries Coupons.</p>
            <p className="text-neutral-400">
              We extend exclusive discounts to our male clientele
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 border-s-[1px] border-s-neutral-400">
          <div className="flex items-center gap-2 cursor-pointer hover:text-sky-600">
            <Person2Outlined />
            <Link>Sign in</Link>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-sky-600">
            <FavoriteBorder />
            <Link>Favorites</Link>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-sky-600">
            <ShoppingBag />
            <Link>Cart</Link>
          </div>
        </div>
      </div>

      {/* ////Third section for categories//// */}

      <div></div>
    </div>
  );
}

export default DesktopHeader;
