import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import EachPeep from "./EachPeep";

const SinglePeep = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [peep, setPeep] = useState(null);
    const [replies, setReplies] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        api.addPeep({ message, parentID: Number(id) })
            .then((res) => {
                setMessage("");
                getPeepAndReplies();
            })
            .catch((err) => console.error(err));
    };

    const getPeepAndReplies = () => {
        api.getSinglePeep(id)
            .then((res) => {
                setPeep(res.data.peep);
                setReplies(res.data.replies);

                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => getPeepAndReplies(), [id]);
    return (
        <>
            <div className=" p-3 ">
                <button className="" onClick={() => navigate(-1)}>
                    {" "}
                    <i className="fa fa-chevron-left  mr-2 "></i> back
                </button>
                {!isLoading && (
                    <div className="   grid grid-cols-10 gap-3 border border-gray-400 rounded-md my-3 p-3 ">
                        <div className=" col-span-1">
                            <i className="fa fa-user fa-2x text-gray-600"></i>
                        </div>
                        <div className=" col-span-9">
                            <h2 className=" font-semibold text-base mb-2">
                                John Doe
                            </h2>
                            <p className=" mb-2 text-lg">{peep.message}</p>
                            <div className=" flex justify-between items-center w-full">
                                <button>
                                    {" "}
                                    <i className="fa fa-bookmark-o mr-2 "></i>{" "}
                                    save
                                </button>
                                <button>
                                    {" "}
                                    <i className="fa fa-comment-o mr-2"></i> 23
                                    comments
                                </button>
                            </div>
                        </div>
                    </div>
                )}{" "}
            </div>
            <div className=" p-3">
                <h3 className=" font-semibold text-base my-4">Replies</h3>
                {!isLoading &&
                    replies.map((reply) => (
                        <EachPeep key={reply.id} peep={reply} />
                    ))}
            </div>
            <form
                onSubmit={handleSubmit}
                action=" "
                className=" "
                className=" fixed bottom-0 w-full flex items-center border-t-2 border-purple-600 h-12 p-2 bg-gray-100"
            >
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    className=" w-full bg-gray-200 p-2 outline-none  rounded-md"
                />
                <button className=" bg-purple-600 py-2 px-3 rounded-md ml-2">
                    {" "}
                    <i className="fa fa-arrow-up"></i>
                </button>
            </form>
        </>
    );
};

export default SinglePeep;
