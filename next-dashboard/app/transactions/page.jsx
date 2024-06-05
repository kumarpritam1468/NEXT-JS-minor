const page = () => {
  return (
    <div className=" h-fit rounded-xl m-4 bg-blue-900 flex flex-col gap-4 px-8 py-4 text-white">
      <h1 className=" text-2xl">All Transactions</h1>

      <div className=" w-full flex flex-col gap-3 text-gray-300 overflow-y-scroll max-h-[65vh]">
        <div className=" grid grid-cols-4 text-lg text-white mb-2">
          <h1>Name</h1>
          <h1>Status</h1>
          <h1>Date</h1>
          <h1>Amount</h1>
        </div>
        <div className=" grid grid-cols-4 text-lg">
          <h1>Abx</h1>
          <h1 className=" w-fit px-1 rounded-md badge-success cursor-pointer">Status</h1>
          <h1>31-05-2024</h1>
          <h1>$3,600</h1>
        </div>
        <div className=" grid grid-cols-4 text-lg">
          <h1>Abx</h1>
          <h1 className=" w-fit px-1 rounded-md badge-warning cursor-pointer">Status</h1>
          <h1>31-05-2024</h1>
          <h1>$3,600</h1>
        </div>
        <div className=" grid grid-cols-4 text-lg">
          <h1>Abx</h1>
          <h1 className=" w-fit px-1 rounded-md badge-error cursor-pointer">Status</h1>
          <h1>31-05-2024</h1>
          <h1>$3,600</h1>
        </div>
        <div className=" grid grid-cols-4 text-lg">
          <h1>Abx</h1>
          <h1 className=" w-fit px-1 rounded-md badge-warning cursor-pointer">Status</h1>
          <h1>31-05-2024</h1>
          <h1>$3,600</h1>
        </div>
      </div>
    </div>
  )
}

export default page