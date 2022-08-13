import dummy from "../data.json"
import "../static/css/Discover_card.css"

function Second() {
    const rendering_2 = (dummy => {
        const persona_2 = [];
            persona_2.push(dummy[2].persona.map(detail => (
            <div className="persona_data_2_data_in">
                <div>
                    <p key={detail.persona_id}>{detail.persona_name} / {detail.persona_type}</p>
                </div>
            </div>)))
            
        return persona_2;
    })
    return (
        <div>
            <div className="persona_data_2_out">
                {rendering_2(dummy)}
            </div>
        </div>
    )
} export default Second;