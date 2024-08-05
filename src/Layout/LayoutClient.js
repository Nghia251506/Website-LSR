import HeaderComponent from "../component/Header";
import Footer from "../component/Footer";

function LayoutClient ({children}){
    return(
        <>
            <HeaderComponent/>
            {children}
            <Footer/>
        </>
    );
}
export default LayoutClient;