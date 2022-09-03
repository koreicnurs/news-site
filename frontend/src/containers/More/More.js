import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, CardMedia, Grid, TextField, Typography} from "@mui/material";
import {createComment} from "../../store/actions/commetsActions";

const More = () => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.newsCombine.loading);
    const oneNews = useSelector(state => state.newsCombine.oneNews);

    const [state, setState] = useState({
        author: "",
        message: "",
        news_id: Number(""),
    });

    const submitFormHandler = e => {
        e.preventDefault();
        dispatch(createComment(state));
    };

    const inputChangeHandler = e => {
        const {name, value} = e.target;

        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return oneNews && (
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
                {oneNews.image ? <CardMedia className='img-board'
                                        component="img"
                                        height="300"
                                        image={oneNews.image}
                                        alt={oneNews.title}
                /> : <CardMedia className='img-board'
                                component="img"
                                height="140"
                                sx={{display: 'none'}}
                />}
            </Card>
            <form
                autoComplete="off"
                onSubmit={submitFormHandler}
                style={{marginBottom: '50px'}}
            >
                <Grid
                    container
                    maxWidth="md"
                    textAlign="center"
                    marginX="auto"
                    direction="column"
                    rowSpacing={2}
                >
                    <Grid item>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Author"
                            name="author"
                            value={state.author}
                            onChange={inputChangeHandler}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            required
                            fullWidth
                            variant="outlined"
                            type="text"
                            label="Message"
                            name="message"
                            value={state.message}
                            onChange={inputChangeHandler}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            required
                            fullWidth
                            variant="outlined"
                            type="number"
                            label="ID"
                            name="news_id"
                            value={state.news_id}
                            onChange={inputChangeHandler}
                        />
                    </Grid>

                    <Grid item>
                        <Button type="submit" color="primary" variant="contained">Create</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default More;