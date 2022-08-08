import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Fillup_component from "../components/Fillup_component";
function Fillup() {
    return (
        <>
            <Header />
            <Navbar />
            <style>
                {`#fillup {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <div className={styles.wrap}>
                <br />
                <h1 className={styles.title}>Fill Up Yourself</h1>
                <br />
                <Fillup_component />
            </div>
            <Footer />
        </>
    );
}
export default Fillup;
