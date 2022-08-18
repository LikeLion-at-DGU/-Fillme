import "../static/css/Footer.css";
function Footer() {
    return (
        <div className="Footer" style={footer_style}>
            <div id="footer_left">
                <p id="footer_logo">Fill Me</p>
                <p id="footer_detail">What is your Multi-Persona?</p>
            </div>
            <div id="copyright">ⓒ 동국대학교 멋쟁이사자처럼 Team. 후유</div>
            <div id="created">
                <div id="role">
                    <p>Planner & Designer </p>
                    <p>Frontend Developer</p>
                    <p>Backend Developer</p>
                </div>
                <div id="contribute">
                    <p>이영서</p>
                    <p>김윤성 오준서 이예나</p>
                    <p>박영신 정준홍</p>
                </div>
            </div>
        </div>
    );
}

function Footer2() {
    return (
        <div className="Footer2" style={footer_style2}>
            <div id="footer_left">
                <p id="footer_logo">Fill Me</p>
                <p id="footer_detail">What is your Multi-Persona?</p>
            </div>
            <div id="copyright">ⓒ 동국대학교 멋쟁이사자처럼 Team. 후유</div>
            <div id="created">
                <div id="role">
                    <p>Planner & Designer </p>
                    <p>Frontend Developer</p>
                    <p>Backend Developer</p>
                </div>
                <div id="contribute">
                    <p>이영서</p>
                    <p>김윤성 오준서 이예나</p>
                    <p>박영신 정준홍</p>
                </div>
            </div>
        </div>
    );
}
export { Footer, Footer2 };

const footer_style = {
    bottom: 0,
    left: 0,
    display: `flex`,
    width: `100%`,
    background: `#3CDA9F`,
    height: `20vh`,
};

const footer_style2 = {
    position: `absolute`,
    bottom: 0,
    left: 0,
    width: `100%`,
    display: `flex`,
    background: `#3CDA9F`,
    height: `20vh`,
};
