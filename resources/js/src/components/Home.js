import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import EachPeep from "./EachPeep";

const Home = ({ peeps }) => {
    // const [peeps, setPeeps] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     api.getAllPeeps().then((res) => {
    //         const results = res.data;

    //         setIsLoading(false);
    //         setPeeps(results.data);
    //     });
    // }, []);
    return (
        <div className="p-3 max-w-4xl mx-auto">
            <h2 className=" font-semibold text-lg">
                Latest Peeps from developers
            </h2>

            {peeps &&
                peeps.map((peep) => <EachPeep key={peep.id} peep={peep} />)}
        </div>
    );
};

export default Home;
