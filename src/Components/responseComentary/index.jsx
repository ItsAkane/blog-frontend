import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import UserInfoPost from '../userInfoPost';

export default function ResponseComentary() {
    const image = ""
    const userName = "user"
    const comentaryDate = "01/01/1999"
    const writenResp = "teste"

    return (
        <div className="respComentary">
            <UserInfoPost image={image} userName={userName} comentaryDate={comentaryDate}/>
            <div className="writenCommentary">
                <p>{writenResp}</p>
            </div>

            <div className="comentaryActions">
                <ArrowUpwardIcon/>
                <ArrowDownwardIcon/>
            </div>
        </div>
    )
}