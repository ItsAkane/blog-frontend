import "./post.css"
import { CardActions, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ComentaryCard from "../../Components/comentaryCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Post() {
    const { id } = useParams();

    const title = "post"
    const postContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut ultricies tellus. Mauris consectetur laoreet tortor sit amet rutrum. Proin magna felis, tincidunt non orci."

    return (
        <>
            <div className="post">
                <Link to="/">
                    <ArrowBackIcon id="VoltarPost" />
                </Link>
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
                        <FavoriteBorderIcon />
                        <CommentIcon />
                    </CardActions>
                </div>
            </div>


            <div className="Comentaries">
                <ComentaryCard />
            </div>
        </>
    )
}