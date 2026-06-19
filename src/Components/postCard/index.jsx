import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './postCard.css';

export function PostCard() {

    var title = "titulo"

    var postContent = "descricao"

    const card = (
        <React.Fragment>
            <CardContent className="postCardContent">
                <h1>{title}</h1>
                <Typography>
                    {postContent}
                </Typography>
            </CardContent>
            <CardActions className="postCardActions">
                <ArrowUpwardIcon />
                <ArrowDownwardIcon />
                <CommentIcon />
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box className="postCardContainer">
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}