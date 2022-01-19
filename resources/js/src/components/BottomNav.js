import { useLocation } from "react-router-dom";

const BottomNav = () => {
    const location = useLocation();

    return location.pathname === "/register" ||
        location.pathname === "/login" ? (
        ""
    ) : (
        <div>
            <div className=" flex justify-around items-center p-3 fixed bottom-0 w-full bg-gray-200 shadow-lg rounded-t-lg">
                <button>
                    {" "}
                    <i className="fa fa-home fa-2x text-gray-700"></i>
                </button>
                <button>
                    {" "}
                    <i className="fa fa-pencil fa-2x text-gray-700"></i>
                </button>
                <button>
                    {" "}
                    <i className="fa fa-user-circle fa-2x text-gray-700"></i>
                </button>
            </div>
        </div>
    );
};

export default BottomNav;
