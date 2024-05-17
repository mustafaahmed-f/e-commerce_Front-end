import { Shop } from "@mui/icons-material";
import FlashSalesCard from "../UI/FlashSalesCard";
import HomeHeadlines from "../UI/HomeHeadlines";
import TrendingMustHaveCard from "../UI/TrendingMustHaveCard";
import Top100Card from "../UI/Top100Card";

function Home() {
  const cardNums = [1, 2, 3, 4];

  return (
    <div className="flex flex-col w-full">
      {/* //// First main section //// */}

      <div className="sm:grid hidden grid-cols-[1fr_2fr] gap-0 w-full ">
        <div className="relative">
          <div className="absolute right-0 flex-col hidden translate-x-1/2 translate-y-1/2 md:flex bottom-1/2">
            <div className="flex flex-col items-center justify-center gap-3 px-3 py-6 bg-white">
              <p className="font-semibold">Summer Essentials</p>
              <p className="text-red-500">20% off</p>
            </div>
            <div className="py-3 text-white bg-black px-9">16 may - 17 may</div>
          </div>
          <img className="w-full" src="../../public/left.png" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-white md:text-2xl sm:text-xl bg-sky-600">
          <p className="font-semibold">Kimonos, Caftans & Pareos</p>
          <p>Poolside glam included From $4.99</p>
          <button className="px-4 py-2 text-sm text-white rounded-sm cursor-pointer bg-sky-700 hover:text-sky-300">
            <div className="flex flex-row items-center justify-center gap-2 w-fit">
              <Shop />
              <span>SHOP NOW</span>
            </div>
          </button>
        </div>
      </div>
      {/* //// Second main section */}

      <div className="flex flex-col gap-16 px-5 sm:px-16 sm:pt-16 ">
        {/* ////First sub section : flash sales */}

        <div>
          <HomeHeadlines headline="flash sales" />
          <div className="grid flashSalesSection md:grid-cols-[1fr_1fr_1fr_1fr] overflow-x-scroll sm:gap-4 gap-2 sm:grid-cols-[1fr_1fr] sm:grid-rows-[1fr_1fr] md:grid-rows-[1fr] grid-rows-[1fr] grid-cols-[1fr_1fr_1fr_1fr] p-1">
            {cardNums.map((el) => {
              return <FlashSalesCard cardNum={el} key={el} />;
            })}
          </div>
        </div>

        {/* ////Second sub section : trending must have */}

        <div>
          <HomeHeadlines headline="trending must have" />
          <div className="grid flashSalesSection md:grid-cols-[1fr_1fr_1fr] overflow-x-scroll sm:gap-4 gap-3 sm:grid-cols-[1fr] sm:grid-rows-[1fr_1fr_1fr] md:grid-rows-[1fr] grid-rows-[1fr] grid-cols-[auto_auto_auto] p-1">
            {cardNums.slice(0, 3).map((el) => {
              return <TrendingMustHaveCard cardNum={el} key={el} />;
            })}
          </div>
        </div>

        {/* ////Third sub section : top 100 */}

        <div>
          <HomeHeadlines headline="top 100" />
          <div>
            <HomeHeadlines headline="flash sales" />
            <div className="grid flashSalesSection md:grid-cols-[1fr_1fr_1fr_1fr] overflow-x-scroll sm:gap-4 gap-2 sm:grid-cols-[1fr_1fr] sm:grid-rows-[1fr_1fr] md:grid-rows-[1fr] grid-rows-[1fr] grid-cols-[1fr_1fr_1fr_1fr] p-1">
              {cardNums.map((el) => {
                return <Top100Card key={el} />;
              })}
            </div>
          </div>
        </div>

        {/* ////Fourth sub section ( Desktop and tablets only )*/}
      </div>
    </div>
  );
}
export default Home;
