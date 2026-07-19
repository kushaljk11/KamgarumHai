import react from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/section/Hero";
import WhyYadgarum from "../components/section/WhyUs";
import HowItWorks from "../components/section/Howitworks";

export default function Home() {
    return(
        <>
        < Navbar />
        < Hero />
        < WhyYadgarum />
        < HowItWorks />
        < Footer />
        </>
    )
}