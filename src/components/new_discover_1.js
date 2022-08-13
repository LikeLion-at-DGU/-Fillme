import dummy from "../data.json"
import "../static/css/Discover_card.css"

function First() {
    const rendering_1 = (dummy => {
        const persona_1 = [];
            persona_1.push(dummy[1].persona.map(detail => (
            <div className="persona_data_1_data_in">
                <div>
                    <p key={detail.persona_id}>{detail.persona_name} / {detail.persona_type}</p>
                </div>
            </div>)))
            
        return persona_1;
    })
    return (
        <div>
            <div className="persona_data_1_out">
                {rendering_1(dummy)}
            </div>
        </div>
    )
} export default First;