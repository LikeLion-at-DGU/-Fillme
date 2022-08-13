import dummy from "../data.json"
import "../static/css/Discover_card.css"

function Fourth() {
    const rendering_4 = (dummy => {
        const persona_4 = [];
            persona_4.push(dummy[4].persona.map(detail => (
            <div className="persona_data_4_data_in">
                <div>
                    <p key={detail.persona_id}>{detail.persona_name} / {detail.persona_type}</p>
                </div>
            </div>)))
            
        return persona_4;
    })
    return (
        <div>
            <div className="persona_data_4_out">
                {rendering_4(dummy)}
            </div>
        </div>
    )
} export default Fourth;