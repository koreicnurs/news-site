import React from 'react';
import {Button, Card, CardActions, CardMedia, Typography} from "@mui/material";
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
                At {props.date}
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
            <CardActions>
                <Button size="small" onClick={props.clickMore}>Read more</Button>
                <Button size="small" onClick={props.clickDelete}>Delete</Button>
            </CardActions>
        </Card>
    );
};
export default OneNews;