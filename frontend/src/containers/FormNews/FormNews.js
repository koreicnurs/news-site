import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import FileInput from "../../components/UI/FIleInput/FileInput";
import {useDispatch, useSelector} from "react-redux";
import {createNews} from "../../store/actions/newsActions";

const FormNews = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.commentsCombine.loading);
    const news = useSelector(state => state.commentsCombine.news);

    const [state, setState] = useState({
        title: "",
        description: "",
        image: "",
    });

    const submitFormHandler = e => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        dispatch(createNews(formData));
    };

    const inputChangeHandler = e => {
        const {name, value} = e.target;

        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];

        setState(prevState => ({...prevState, [name]: file}));
    };

    return (
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
                        label="Title"
                        name="title"
                        value={state.title}
                        onChange={inputChangeHandler}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        type="text"
                        label="Description"
                        name="description"
                        value={state.description}
                        onChange={inputChangeHandler}
                    />
                </Grid>

                <Grid item>
                    <FileInput
                        label="Image"
                        name="image"
                        onChange={fileChangeHandler}
                    />
                </Grid>

                <Grid item>
                    <Button type="submit" color="primary" variant="contained">Create</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default FormNews;