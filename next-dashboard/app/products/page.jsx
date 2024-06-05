import Link from "next/link";

const page = () => {
  return (
    <div className=" h-fit rounded-xl m-4 bg-blue-900 flex flex-col gap-4 px-8 py-4 text-white">
      <Link href='/products/add' className="btn btn-square bg-blue-950 px-3 text-white w-fit text-xl">Add new</Link>

      <div className=" w-full flex flex-col gap-3 text-gray-300 overflow-y-scroll max-h-[65vh]">
        <div className=" product-grid text-md text-white mb-2">
          <h1>Title</h1>
          <h1>Description</h1>
          <h1>Price</h1>
          <h1>Created At</h1>
          <h1>Stock</h1>
          <h1>Action</h1>
        </div>
        <div className=" product-grid text-md">
          <h1>Abx</h1>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h1>$700</h1>
          <h1>31-05-2024</h1>
          <h1>Available</h1>
          <div className=" flex gap-1"><Link href='/products/test' className=" w-fit px-1 rounded-md badge-primary cursor-pointer">View</Link><h1 className=" w-fit px-1 rounded-md badge-error cursor-pointer">Delete</h1></div>
        </div>
        <div className=" product-grid text-md">
          <h1>Abx</h1>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h1>$700</h1>
          <h1>31-05-2024</h1>
          <h1>Available</h1>
          <div className=" flex gap-1"><Link href='/products/test' className=" w-fit px-1 rounded-md badge-primary cursor-pointer">View</Link><h1 className=" w-fit px-1 rounded-md badge-error cursor-pointer">Delete</h1></div>
        </div>
        <div className=" product-grid text-md">
          <h1>Abx</h1>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h1>$700</h1>
          <h1>31-05-2024</h1>
          <h1>Available</h1>
          <div className=" flex gap-1"><Link href='/products/test' className=" w-fit px-1 rounded-md badge-primary cursor-pointer">View</Link><h1 className=" w-fit px-1 rounded-md badge-error cursor-pointer">Delete</h1></div>
        </div>
      </div>
    </div>
  )
}

export default page