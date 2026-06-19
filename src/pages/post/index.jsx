import "./post.css"
import { Box, CardActions, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom"
import CommentIcon from '@mui/icons-material/Comment';
import ComentaryCard from "../../Components/comentaryCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import UserInfoPost from "../../Components/userInfoPost";

export default function Post() {
    const { id } = useParams();

    const title = "post"
    const postContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut ultricies tellus. Mauris consectetur laoreet tortor sit amet rutrum. Proin magna felis, tincidunt non orci."

    return (
        <>
            <Box sx={{ marginTop: 5 }}>
                <div className="post">
                        <Link to="/">
                            <ArrowBackIcon id="VoltarPost" />
                        </Link>

                        <UserInfoPost image={"https://i.ibb.co/8n55RtLx/sherek.webp"} userName={"User"} comentaryDate={"11/11/2005"} />
                    <div className="postTitle">
                        <h1>{title} {id}</h1>
                    </div>
                    <div className="postContent">
                        <Typography>
                            {postContent}
                        </Typography>
                    </div>
                    <div className="cardActions">
                        <CardActions>
                            <ArrowUpwardIcon />
                            <ArrowDownwardIcon />
                            <CommentIcon />
                        </CardActions>
                    </div>
                </div>


                <div className="Comentaries">
                    <ComentaryCard />
                </div>
            </Box>
        </>
    )
}