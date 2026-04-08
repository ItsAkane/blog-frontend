import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./comentaryCard.css";
import ResponseComentary from '../responseComentary';
import UserInfoPost from '../userInfoPost';

export default function ComentaryCard() {
    const userName = "User";
    const comentaryDate = "02/04/2026";
    const image = "https://i.ibb.co/8n55RtLx/sherek.webp";
    const writenComentary = "Esse post foi muito legal!";

    return (
        <>
            <div className="comentary">
                <UserInfoPost userName={userName} comentaryDate={comentaryDate} image={image}/>
                <div className="writenCommentary">
                    <p>{writenComentary}</p>
                </div>
                <div className="comentaryActions">
                    <ArrowUpwardIcon />
                    <ArrowDownwardIcon />
                </div>

                <div className="resp">
                    <ResponseComentary/>
                </div>

            </div>
        </>
    )
}