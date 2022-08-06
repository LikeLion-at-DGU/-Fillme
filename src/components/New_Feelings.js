import newStyle from "./Newfeeling.module.css";

function New_Feelings({ id, user_id, persona_id, name, persona_name, image }) {
    const newfeeling_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`

    }
    return (
        <div
            className={newStyle.newfeeling}
            id={"feelings" + id}
            style={newfeeling_style}>
        </div>
    );
}

export default New_Feelings