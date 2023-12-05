import Navbar from "./NavbarTest";


function EmptyCart() {
  return (
    <>
    <Navbar/>
      <div className="absolute inset-0 overflow-hidden">
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl mx-auto">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 mx-auto">
        {/* <div className="w-52 h-44">
          <img
            draggable="false"
            className="w-full h-full object-contain"
            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png"
            alt="Empty Cart"
          />
        </div> */}
        <span className="text-lg mb-2">Your cart is empty!</span>
        <p className="text-xs mb-4">Add items to it now.</p>
        <a
          href="/"
          className="bg-green-500 text-sm text-green px-12 py-2 rounded-sm shadow mt-3"
        >
          Shop Now
        </a>
      </div>
      </div>
      </div>
    </>
  );
}
export default EmptyCart;
