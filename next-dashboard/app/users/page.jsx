import Link from "next/link"

const page = () => {
  return (
    <div className=" h-fit rounded-xl m-4 bg-blue-900 flex flex-col gap-4 px-8 py-4 text-white">
      <Link href='/users/add' className="btn btn-square bg-blue-950 px-3 text-white w-fit text-xl">Add new</Link>

      <div className=" w-full flex flex-col gap-3 text-gray-300 max-h-[65vh] overflow-y-scroll">
        <div className=" grid grid-cols-6 text-md text-white mb-2">
          <h1>Name</h1>
          <h1>Email</h1>
          <h1>Created At</h1>
          <h1>Role</h1>
          <h1>Status</h1>
          <h1>Action</h1>
        </div>
        <div className=" grid grid-cols-6 text-md">
          <h1>Abx</h1>
          <h1>abx@gmail.com</h1>
          <h1>31-05-2024</h1>
          <h1>Admin</h1>
          <h1>Active</h1>
          <div className=" flex gap-0.5"><Link href='/users/test' className=" w-fit px-1 rounded-md badge-primary cursor-pointer">View</Link><h1 className=" w-fit px-1 rounded-md badge-error cursor-pointer">Delete</h1></div>
        </div>
        <div className=" grid grid-cols-6 text-md">
          <h1>Abx</h1>
          <h1>abx@gmail.com</h1>
          <h1>31-05-2024</h1>
          <h1>Admin</h1>
          <h1>Active</h1>
          <div className=" flex gap-0.5"><Link href='/users/test' className=" w-fit px-1 rounded-md badge-primary cursor-pointer">View</Link><h1 className=" w-fit px-1 rounded-md badge-error cursor-pointer">Delete</h1></div>
        </div>
        <div className=" grid grid-cols-6 text-md">
          <h1>Abx</h1>
          <h1>abx@gmail.com</h1>
          <h1>31-05-2024</h1>
          <h1>Admin</h1>
          <h1>Active</h1>
          <div className=" flex gap-0.5"><Link href='/users/test' className=" w-fit px-1 rounded-md badge-primary cursor-pointer">View</Link><h1 className=" w-fit px-1 rounded-md badge-error cursor-pointer">Delete</h1></div>
        </div>
        <div className=" grid grid-cols-6 text-md">
          <h1>Abx</h1>
          <h1>abx@gmail.com</h1>
          <h1>31-05-2024</h1>
          <h1>Admin</h1>
          <h1>Active</h1>
          <div className=" flex gap-0.5"><Link href='/users/test' className=" w-fit px-1 rounded-md badge-primary cursor-pointer">View</Link><h1 className=" w-fit px-1 rounded-md badge-error cursor-pointer">Delete</h1></div>
        </div>
      </div>
    </div>
  )
}

export default page