import dummy from "../data.json"
import "../static/css/Discover_card.css"

function Zero() {
    const rendering_0 = (dummy => {
        const persona_0 = [];
            persona_0.push(dummy[0].persona.map(detail => (
            <div className="persona_data_0_data_in">
                <div>
                    <p key={detail.persona_id}>{detail.persona_name} / {detail.persona_type}</p>
                </div>
            </div>)))
            
        return persona_0;
    })
    return (
        <div>
            <div className="persona_data_0_out">
                {rendering_0(dummy)}
            </div>
        </div>
    )
} export default Zero;