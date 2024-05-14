import { KeyboardArrowDownOutlined, SearchOutlined } from "@mui/icons-material";

function ProductSearchDiv() {
  return (
    <div className="flex items-center gap-1 py-1 bg-white rounded-sm w-fit flex-nowrap ring-1 ring-neutral-400">
      <input
        placeholder="Search products"
        className="px-3 py-1 focus:outline-0"
      />
      <p className="flex h-full bg-white cursor-pointer whitespace-nowrap flex-nowrap">
        All categories
        <span>
          <KeyboardArrowDownOutlined />
        </span>
      </p>
      <div className="h-full px-1 bg-white cursor-pointer border-s-2">
        <SearchOutlined />
      </div>
    </div>
  );
}

export default ProductSearchDiv;
