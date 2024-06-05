const page = () => {
    return (
        <div className=" p-2 px-4">
            <div className=" h-[80vh] bg-blue-950 rounded-md flex flex-col items-center">
                <div className=" pt-8 w-full h-fit grid grid-cols-2 place-items-center gap-8">
                    <input type="text" placeholder="Username" className="input input-bordered input-info w-full max-w-sm" />
                    <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-sm" />
                    <input type="text" placeholder="Phone" className="input input-bordered input-info w-full max-w-sm" />
                    <input type="text" placeholder="Password" className="input input-bordered input-info w-full max-w-sm" />
                    <select className="select select-info w-full max-w-sm">
                        <option disabled selected>Is Admin?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <select className="select select-info w-full max-w-sm">
                        <option disabled selected>Is Active?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>

                <div className=" px-8 pt-6 pb-2 w-full">
                    <textarea className=" w-full textarea textarea-info" placeholder="Address" rows={4} ></textarea>
                </div>

                <button className="btn btn-wide btn-outline btn-info">Update</button>
            </div>
        </div>
    )
}

export default page