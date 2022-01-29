import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const SinglePeep = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [peep, setPeep] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getSinglePeep(id)
            .then((res) => {
                setPeep(res.data.data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
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
                                <i className="fa fa-bookmark-o mr-2 "></i> save
                            </button>
                            <button>
                                {" "}
                                <i className="fa fa-comment-o mr-2"></i> 23
                                comments
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePeep;
