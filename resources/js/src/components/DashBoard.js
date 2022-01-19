import { useEffect } from "react";
import api from "../api";

const DashBoard = ({ user }) => {
    useEffect(() => {
        api.getLoggedInUser().then((res) => {
            console.log(res.data);
        });
    });
    return (
        <div>
            {user && (
                <div>
                    <h2 className=" text-xl font-semibold ">
                        {" "}
                        Welcome to your Profile {user.name}
                    </h2>
                </div>
            )}
        </div>
    );
};

export default DashBoard;
