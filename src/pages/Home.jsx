import { Box } from "@mui/material";
import { PostCard } from "../Components/postCard";
import { Navigate } from "react-router-dom";


export default function Home() {

    function directToPage() {
        Navigate('/Post');
    }


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <PostCard onclick={directToPage} />
            <PostCard />
            <PostCard />

        </Box>
    );
}