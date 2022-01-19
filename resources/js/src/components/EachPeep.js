const EachPeep = ({ peep }) => {
    return (
        <div className=" grid grid-cols-10 gap-3 border border-gray-400 rounded-md my-3 p-3">
            <div className=" col-span-1">
                <i className="fa fa-user fa-2x text-gray-600"></i>
            </div>
            <div className=" col-span-9">
                <h2 className=" font-semibold text-base mb-2">John Doe</h2>
                <p className=" mb-2">{peep.message}</p>
                <div className=" flex justify-between items-center w-full">
                    <button>
                        {" "}
                        <i className="fa fa-heart-o"></i>
                    </button>
                    <button>
                        {" "}
                        <i className="fa fa-comment-o"></i>
                    </button>
                    <button>
                        {" "}
                        <i className="fa fa-bookmark-o"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EachPeep;
