import Header from "../components/Header";
import "../static/css/Feed.css";
// import Fill_feelings from "../components/Fill_Feelings"
import New_Feelings from "./../components/New_Feelings";
import Fill_feelings from "../components/Fill_Feelings";

function Feed() {
    return (
        <>
            <Header />
            <div className="Feed">
                <br />
                <h1 className="title">New Feelings</h1>
                <div className="new_feelings">
                    {persona.map((per) => (
                        <New_Feelings
                            key={per.id}
                            user_id={per.user_id}
                            persona_id={per.persona_id}
                            persona_name={per.persona_name}
                            image={per.image}
                        />
                    ))}
                </div>

                <h1 className="title">Fill the Feelings</h1>
                <div className="fill_the_feelings">
                    {feed.map(render_fill_feelings)}
                </div>
            </div>
        </>
    );
}
export default Feed;

function render_fill_feelings(fill) {
    return (
        <Fill_feelings
            key={fill.id}
            user_id={fill.user_id}
            index={fill.index}
            image={fill.image}
            persona={fill.persona}
            title={fill.title}
            body={fill.body}
            date_time={fill.date_time}
        />
    );
}

// New Feelings json data example
const persona = [
    {
        id: 10,
        user_id: "taeoh94",
        persona_id: "actor94",
        name: "시니영",
        persona_name: "감정을 나누는 배우",
        image: "images/ImgSample1.jfif",
        // <img src="images/ImgSample1.jfif" />
    },
    {
        id: 11,
        user_id: "rommy",
        persona_id: "rommy_hap",
        name: "로미",
        persona_name: "행복한 강아지 로미",
        image: "images/ImgSample2.jfif",
    },
    {
        id: 12,
        user_id: "jamy",
        persona_id: "jamy_kids",
        name: "제이미",
        persona_name: "노는게 좋은 뽀로로",
        image: "images/ImgSample3.jfif",
    },
    {
        id: 13,
        user_id: "foodlover",
        persona_id: "foodlife",
        name: "고기맨",
        persona_name: "고기를 주지 마세요",
        image: "images/ImgSample4.jfif",
    },
    {
        id: 14,
        user_id: "sammy",
        persona_id: "sammy_dad",
        name: "세미",
        persona_name: "세미 아빠",
        image: "images/ImgSample5.jfif",
    },
    {
        id: 15,
        user_id: "wnstj701",
        persona_id: "photo",
        name: "Junseo",
        persona_name: "Asher",
        image: "images/ImgSample4.jfif",
    },
    {
        id: 16,
        user_id: "wnstj701",
        persona_id: "photo",
        name: "Junseo",
        persona_name: "Asher",
        image: "images/ImgSample4.jfif",
    },
    {
        id: 17,
        user_id: "wnstj701",
        persona_id: "photo",
        name: "Junseo",
        persona_name: "Asher",
        image: "images/ImgSample4.jfif",
    },
];

// json 데이터베이스 예시

const feed = [
    {
        id: 1,
        user_id: "strongminsu",
        image: "https://t1.daumcdn.net/cfile/tistory/994827455F1187B004",
        persona: "splash",
        title: "미루고 미루던 하와이 가족 여행!",
        body: "드디어 코로나 규제가 어느 정도 풀려서 2019년부터 미루고 미뤘던 가족 여행을 다녀왔습니다! 너무 신났어요ㅎㅎ 부모님과 동생까지 네 식구가 다 함께했어요! 가장 먼저 바닷가로 향해서 스노클링을 했답니다~ 바닷가 근처에 숙소를 잡아서 트롤리를 이용하지 않고 걸어가도 충분했어요! 저는 무서워서 깊은 곳까진 못 가겠던데... 동생은 신났는지 튜브 하나 끼고서 잘 돌아다니더라구요~ 물고기도 보고 맛있는 것도 먹고 최고였어요! 날씨도 너무 좋았어요!",
        date_time: "2022-07-30",
    },
    {
        id: 2,
        user_id: "minkyu_97",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=768:*",
        persona: "갱얼쥐가 세상을 구한다",
        title: "울 집 강아지 최고!",
        body: "강아지는 너무 기여워 갱얼쥐 최고 골든리트리버 쵝오 넘넘넘넘 기여운 놈들",
        date_time: "2022-08-04",
    },

    {
        id: 3,
        user_id: "o_sinnine",
        image: "http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg",
        persona: "design the life",
        title: "이케아 쇼룸에서 영감 얻기",
        body: "오늘은 이케아 쇼룸에 다녀왔습니다! 인테리어 아이디어가 떠오르지 않을 때 이미 다들 너무 잘 아시는, 그리고 잘 활용하시는 방법이죠! 백문이불여일견! 오늘은 이만 말을 줄이고 바로 사진으로 보여드릴게요~ design the life가 엄선한 2022 S/S 셀프 인테리어 레퍼런스 TOP 10입니다.",
        date_time: "2022-08-01",
    },
    {
        id: 4,
        user_id: "o_seo_j",
        image: "http://media.fastcampus.co.kr/wp-content/uploads/2021/03/fastcampus-media-coding-img-1-1030x539.png",
        persona: "기린이",
        title: "해커톤 첫 번째 미팅과 아이데이션",
        body: "해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄",
        date_time: "2022-08-03",
    },
    {
        id: 5,
        user_id: "o_seo_j",
        image: "http://media.fastcampus.co.kr/wp-content/uploads/2021/03/fastcampus-media-coding-img-1-1030x539.png",
        persona: "기린이",
        title: "해커톤 첫 번째 미팅과 아이데이션",
        body: "해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄해커톤 첫 미팅 라라라라라랄",
        date_time: "2022-08-03",
    },
    {
        id: 6,
        user_id: "strongminsu",
        image: "https://t1.daumcdn.net/cfile/tistory/994827455F1187B004",
        persona: "splash",
        title: "미루고 미루던 하와이 가족 여행!",
        body: "드디어 코로나 규제가 어느 정도 풀려서 2019년부터 미루고 미뤘던 가족 여행을 다녀왔습니다! 너무 신났어요ㅎㅎ 부모님과 동생까지 네 식구가 다 함께했어요! 가장 먼저 바닷가로 향해서 스노클링을 했답니다~ 바닷가 근처에 숙소를 잡아서 트롤리를 이용하지 않고 걸어가도 충분했어요! 저는 무서워서 깊은 곳까진 못 가겠던데... 동생은 신났는지 튜브 하나 끼고서 잘 돌아다니더라구요~ 물고기도 보고 맛있는 것도 먹고 최고였어요! 날씨도 너무 좋았어요!",
        date_time: "2022-07-30",
    },
    {
        id: 7,
        user_id: "yaena_99",
        image: "http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg",
        persona: "design the life",
        title: "이케아 쇼룸에서 영감 얻기",
        body: "오늘은 이케아 쇼룸에 다녀왔습니다! 인테리어 아이디어가 떠오르지 않을 때 이미 다들 너무 잘 아시는, 그리고 잘 활용하시는 방법이죠! 백문이불여일견! 오늘은 이만 말을 줄이고 바로 사진으로 보여드릴게요~ design the life가 엄선한 2022 S/S 셀프 인테리어 레퍼런스 TOP 10입니다.",
        date_time: "2022-08-01",
    },
];
