import BottomNav from "./BottomNav";
import NavBar from "./NavBar";

const WithBottomNav = ({ children }) => {
    return (
        <>
            {children}
            <BottomNav />
        </>
    );
};

export default WithBottomNav;
