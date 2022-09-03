import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import {deleteNews, getNews, getOneNews} from "../../store/actions/newsActions";
import OneNews from "../../components/OneNews/OneNews";
import {NavLink} from "react-router-dom";

const News = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.newsCombine.loading);
    const news = useSelector(state => state.newsCombine.news);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const deleteNewsSubmit = async (id) => {
        await dispatch(deleteNews(id));
        await dispatch(getNews());
    };

    return loading ? <Spinner/> : (
        <>
            <div className='image-board-container'>
                {news.map(i => (
                    <OneNews
                        key={i.id}
                        title={i.title}
                        date={i.datetime}
                        description={i.description}
                        image={i.image}
                        oneId={i.id}
                        clickMore={() => dispatch(getOneNews(i.id))}
                        clickDelete={() => dispatch(deleteNewsSubmit(i.id))}
                    />
                ))}
            </div>
            <NavLink className='btn-link add-link' to='/add'>Add News</NavLink>
        </>
    );
};

export default News;