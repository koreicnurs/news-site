import React from 'react';
import {Card, CardMedia, Typography} from "@mui/material";
import {apiUrl} from "../../config";

const OneNews = (props) => {
    let newsImage = null;
    if (props.image) {
        newsImage = apiUrl + '/uploads/' + props.image;
    }

    return (
        <Card className='image-board-card'>
            <Typography gutterBottom variant="h5" component="div" className='author'>
                Author: {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='message'>
                Message: {props.description}
            </Typography>
            {newsImage ? <CardMedia className='img-board'
                                     component="img"
                                     height="300"
                                     image={newsImage}
                                     alt={props.title}
            /> : <CardMedia className='img-board'

                            component="img"
                            height="140"
                            sx={{display: 'none'}}
            />}
        </Card>
    );
};
export default OneNews;