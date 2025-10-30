import { Box } from "@mui/material";
import { PostCard } from "../Components/postCard";


export default function Home() {


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <PostCard />
            <PostCard />
            <PostCard />
        </Box>
    );
}