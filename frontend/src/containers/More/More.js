import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card, CardMedia, Typography} from "@mui/material";
import {apiUrl} from "../../config";

const More = () => {


    const dispatch = useDispatch();
    const loading = useSelector(state => state.newsCombine.loading);
    const oneNews = useSelector(state => state.newsCombine.oneNews);

    const deleteNewsSubmit = async (id) => {

    };

    let newsImage = null;
    if (oneNews.image) {
        newsImage = apiUrl + '/uploads/' + oneNews.image;
    }

    return (
        <>
            <Card className='image-board-card'>
                <Typography gutterBottom variant="h5" component="div" className='author'>
                    Author: {oneNews.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='message'>
                    At {oneNews.datetime}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='message'>
                    Message: {oneNews.description}
                </Typography>
                {newsImage ? <CardMedia className='img-board'
                                        component="img"
                                        height="300"
                                        image={newsImage}
                                        alt={oneNews.title}
                /> : <CardMedia className='img-board'

                                component="img"
                                height="140"
                                sx={{display: 'none'}}
                />}
            </Card>
        </>
    );
};

export default More;