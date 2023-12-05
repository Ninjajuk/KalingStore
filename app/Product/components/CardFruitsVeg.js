


 function CategoryCard (){
    const categories = [
        {
          title: 'Carrots',
          description: 'Explore the latest additions to our collection.',
          thumbnail: 'https://www.bigbasket.com/media/uploads/p/l/10000070_15-fresho-carrot-orange.jpg?tr=w-640,q=80',
          price:25,
          TotalPrice:35
        },
        {
          title: 'Capsicum',
          description: 'Boost your productivity with these essentials.',
          thumbnail: 'https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80',
          price:36,
          TotalPrice:50
        },
        {
          title: 'Tomato',
          description: 'Create your ideal workspace with our curated selection.',
          thumbnail: 'https://www.bigbasket.com/media/uploads/p/m/10000203_16-fresho-tomato-local.jpg?tr=w-3840,q=80',
          price:45,
          TotalPrice:70
        },
        {
          title: 'Potato',
          description: 'Fresho Potato',
          thumbnail: 'https://www.bigbasket.com/media/uploads/p/l/40048459_8-fresho-potato-new-crop.jpg?tr=w-640,q=80',
          price:15,
          TotalPrice:35
        //   image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
        },
      ];
    
      const weightOptions = [1, 2, 3, 5]; // You can modify the weight options as needed
    
    
  
    return (
    
      <div className="bg-white p-6 rounded-lg shadow-md mb-4 min-w-[14rem] flex flex-col ">
        {categories.map((item)=>
        <>
        <div className="w-full h-2/3">
          <img
            src={item.thumbnail}
            alt={item.title}
            className=" rounded-md w-full h-full object-cover"
          />
        </div>
  
        <div>
          <p className="text-md text-slate-800 font-semibold ">Fresh</p>
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <div className="py-2">
            {/* <label htmlFor={`${title}-weight`} className="text-gray-700">
              Select Weight:
            </label> */}
            <select
              id={`${item.title}-weight`}
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              {weightOptions.map((weight, index) => (
                <option key={index} value={weight}>
                  {weight} kg
                </option>
              ))}
            </select>
          </div>
          <p className="text-gray-700 flex items-center">
            <span className="text-lg font-bold">₹{item.price}<sub>/kg</sub></span>
            <span className="ml-2 line-through">₹{item.TotalPrice}</span>
          </p>
        </div>
  
        <div className="w-full flex items-center justify-center ring-1 rounded-md ring-red-500 my-2 hover:bg-red-500 hover:text-white cursor-pointer">
          <button type="button" className="px-4 py-2 ">
            Add
          </button>
        </div>
        </>
        )}

      </div>
    );
  };
  export default CategoryCard