import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const AddPeep = ({ openMessageBox }) => {
    const navigate = useNavigate();

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        api.addPeep({ message })
            .then((res) => {
                setMessage("");
                openMessageBox(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className=" fixed bg-gray-800 bg-opacity-60  h-full w-full z-30 top-0 left-0  text-gray-700 ">
            <div className=" p-3 absolute  bg-gray-50   bottom-0 w-full rounded-t-lg">
                <button
                    className=" font-extrabold m-3 bg-gray-300 rounded-full py-1 px-3 block text-xl float-right "
                    onClick={() => openMessageBox(false)}
                >
                    X
                </button>
                <h2 className=" font-semibold text-lg ">Submit your Peep</h2>
                <form action="" onSubmit={handleSubmit} className=" space-y-3">
                    <div>
                        <textarea
                            className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2"
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className=" bg-purple-700 w-full rounded-md uppercase p-2 font-bold text-white"
                    >
                        Sumbit post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPeep;
