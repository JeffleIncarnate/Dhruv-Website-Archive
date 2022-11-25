import "./Light_To_Dark.css"
import {FaSun, FaMoon} from "react-icons/fa"
import {useState} from "react";
import Navbar from "../Navbar/Navbar";

// Images
import Logo_light_NoText from "../../images/Logo_Light.png";

function Light_To_Dark() {
    const [isThemeDark, setIsThemeDark] = useState(true)

    return (
        <>
            <Navbar img={Logo_light_NoText} alt="Logo" isDarkImg={isThemeDark}/>
            <div className="light_to_dark_wrapper" onClick={() => {
                setIsThemeDark(!isThemeDark);
                if (isThemeDark) {
                    document.documentElement.style.setProperty("--white", "#181818")
                    document.documentElement.style.setProperty("--black", "#fff")
                    document.documentElement.style.setProperty("--black-2", "#edf0f1")
                } else {
                    document.documentElement.style.setProperty("--white", "#fff")
                    document.documentElement.style.setProperty("--black", "#181818")
                    document.documentElement.style.setProperty("--black-2", "#202020")
                }
            }}>
                {isThemeDark ? <FaSun/> : <FaMoon/>}
            </div>
        </>
    )
}

export default Light_To_Dark;