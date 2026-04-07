import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./comentaryCard.css";

export default function ComentaryCard() {
    const userName = "User";
    const comentaryDate = "02/04/2026";
    const image = "https://i.ibb.co/8n55RtLx/sherek.webp";
    const writenComentary = "Esse post foi muito legal!";

    return (
        <>
            <div className="comentary">
                <div className="UserInfo">
                    <div className="userPhoto">
                        <img src={image} alt="sherek" border="0" />
                    </div>
                    <div className="username">
                        {userName}
                    </div>
                    <div className="comentaryDate">{comentaryDate}</div>
                </div>
                <div className="writenCommentary">
                    <p>{writenComentary}</p>
                </div>
                <div className="comentaryActions">
                    <ArrowUpwardIcon />
                    <ArrowDownwardIcon />
                </div>

            </div>
        </>
    )
}