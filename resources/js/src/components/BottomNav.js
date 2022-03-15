import { useLocation, useParams, matchPath } from "react-router-dom";

const BottomNav = ({ openMessageBox }) => {
    const location = useLocation();
    const { id } = useParams();

    console.log(id);
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
                <button onClick={() => openMessageBox()}>
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
// ||     matchPath(location.pathname, { path: "/peeps/:id" })
export default BottomNav;
