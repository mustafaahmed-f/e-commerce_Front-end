function MainLogo() {
  return (
    <div className="flex flex-row items-center gap-2">
      <img
        src="./public/cart.png"
        className="w-10 h-10 md:w-12 md:h-12 -scale-x-100"
      />
      <p className="text-2xl font-semibold md:text-3xl">Luminae</p>
    </div>
  );
}

export default MainLogo;
