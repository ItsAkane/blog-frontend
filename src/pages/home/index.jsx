import { Box } from "@mui/material";
import { PostCard } from "../../Components/postCard";
import { Link } from "react-router-dom";


export default function Home() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link to="/post/1" style={{textDecoration: 'none'}}>
                <PostCard />
            </Link>
            <Link to="/post/2" style={{textDecoration: 'none'}}>
                <PostCard />
            </Link>
            <Link to="/post/3" style={{textDecoration: 'none'}}>
                <PostCard />
            </Link>

        </Box>
    );
}