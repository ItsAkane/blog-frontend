import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import * as React from 'react';
import Typography from '@mui/material/Typography';

export function PostCard() {
    const card = (
        <React.Fragment>
            <CardContent>
                <h1>teste</h1>
            </CardContent>
            <CardActions>
                
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{ minWidth: 700 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}