import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import FileInput from "../UI/FIleInput/FileInput";

const FormNews = ({createImageBoard}) => {
    const [state, setState] = useState({
        author: "",
        message: "",
        image: "",
    });

    const submitFormHandler = e => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        createImageBoard(formData);
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