import { useEffect } from "react";
import api from "../api";
import WithBottomNav from "./WithBottomNav";

const DashBoard = ({ user }) => {
    useEffect(() => {
        api.getLoggedInUser().then((res) => {
            console.log(res.data);
        });
    });
    return (
        <WithBottomNav>
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
        </WithBottomNav>
    );
};

export default DashBoard;
