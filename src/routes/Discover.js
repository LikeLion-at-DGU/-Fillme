
import Header from "../components/Header";
import "../static/css/Discover.css"
import render_Discover_feelings from "../components/Discover_Feelings";
// import Discover from './Discover';

function Discover(){
    return(
        <> 
        <Header/>
        <div className = "Discover">
            <h1 className = "title">Discover Feelings</h1>


            <div className = "fill_the_feelings">
                {feed.map(render_Discover_feelings)}
            </div>
        </div>
        </>
    )
    
}export default Discover;


// json
const feed = [
    {
        id : 1,
        user_id : "is_bell.harper",
        name : "Isabella Harper",
        image : "https://t1.daumcdn.net/cfile/tistory/994827455F1187B004",
        intro : "dance your life, dance the moment",
    },
    {
        id:2,
        user_id:"kto940620",
        name : "강태오",
        image : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=768:*",
        intro : "인생은 한 번뿐 이 순간을 즐기자",
    },

    {
        id : 3,
        user_id : "woodz_dwnm",
        name : "조승연",
        image : "http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg",
        intro : "식물을 사랑하는 실내 환경 디자이너",
    },
    {
        id : 4,
        user_id : "kt.mayson_lifelog",
        name : "Kate Mayson",
        image : "http://media.fastcampus.co.kr/wp-content/uploads/2021/03/fastcampus-media-coding-img-1-1030x539.png",
        intro : "Find my Apollo 11, sulf my ocean",
    },
    {
        id : 5,
        user_id : "irene_is_good",
        name : "Irene Jackson",
        image : "http://media.fastcampus.co.kr/wp-content/uploads/2021/03/fastcampus-media-coding-img-1-1030x539.png",
        intro : "It's me because, it's me",
    },

]