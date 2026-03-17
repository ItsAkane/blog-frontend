import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';

export function PostCard() {
    const card = (
        <React.Fragment >
            <CardContent sx={{background: '#1E293B'}}>
                <h1>titulo</h1>
                <Typography>
                    Descricao
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'left', gap:4, background: '#1E293B'}}>
                <FavoriteBorderIcon/>
                <CommentIcon />
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{ minWidth: 700 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}