import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import './postCard.css';

export function PostCard() {
    const card = (
        <React.Fragment>
            <CardContent className="postCardContent">
                <h1>titulo</h1>
                <Typography>
                    Descricao
                </Typography>
            </CardContent>
            <CardActions className="postCardActions">
                <FavoriteBorderIcon/>
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