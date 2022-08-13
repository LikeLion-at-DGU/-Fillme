import dummy from "../data.json"
import "../static/css/Discover_card.css"

function Third() {
    const rendering_3 = (dummy => {
        const persona_3 = [];
            persona_3.push(dummy[3].persona.map(detail => (
            <div className="persona_data_3_data_in">
                <div>
                    <p key={detail.persona_id}>{detail.persona_name} / {detail.persona_type}</p>
                </div>
            </div>)))
            
        return persona_3;
    })
    return (
        <div>
            <div className="persona_data_3_out">
                {rendering_3(dummy)}
            </div>
        </div>
    )
} export default Third;