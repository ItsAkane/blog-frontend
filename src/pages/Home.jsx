import { Box } from "@mui/material";
import { PostCard } from "../Components/postCard";
import { Link } from "react-router-dom";


export default function Home() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link to="/post" style={{textDecoration: 'none'}}>
                <PostCard />
            </Link>
            <Link to="/post" style={{textDecoration: 'none'}}>
                <PostCard />
            </Link>
            <Link to="/post" style={{textDecoration: 'none'}}>
                <PostCard />
            </Link>

        </Box>
    );
}