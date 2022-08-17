import dummy from "../data.json";
import "../static/css/Detail_image.css";

function DetailImage({ img }) {
    const BigImage = {  
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };

    // const SmallImage = {
    //     backgroundImage: `url(${imageUrl})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: `no-repeat`,
    //     backgroundPosition: `center`,
    // };

    return (
        <div className="Photo">
            <div className="Big_image" style={BigImage}></div>
        </div>
    );
}
export default DetailImage;
