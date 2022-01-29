import { Link } from "react-router-dom";
const EachPeep = ({ peep }) => {
    return (
        <div className="  grid grid-cols-10 gap-3 border-2 border-gray-400 rounded-md my-3 p-3 hover:border-purple-600 hover:text-gray-700">
            <div className=" col-span-1">
                <i className="fa fa-user fa-2x text-gray-600"></i>
            </div>
            <div className=" col-span-9">
                <h2 className=" font-semibold text-base mb-2">John Doe</h2>
                <p className=" mb-2">
                    <Link to={`/peeps/${peep.id}`}>{peep.message}</Link>
                </p>
                <div className=" flex justify-between items-center w-full">
                    <button
                        className=" bg-gray-200 rounded-md p-1 px-3"
                        onClick={() => alert("sure")}
                    >
                        {" "}
                        <i className="fa fa-bookmark-o mr-2 "></i> save
                    </button>
                    <Link to={`/peeps/${peep.id}`}>
                        {" "}
                        <i className="fa fa-comment-o mr-2"></i> 23 replies{" "}
                        <i className="fa fa-chevron-right ml-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EachPeep;
