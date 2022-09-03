import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import {createNews, getNews} from "../../store/actions/newsActions";
import OneNews from "../../components/OneNews/OneNews";
import {NavLink} from "react-router-dom";

const News = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.newsCombine.loading);
    const news = useSelector(state => state.newsCombine.news);

    const onNewsFormSubmit = async data => {
        await dispatch(createNews(data));
        await dispatch(getNews());
    };

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    return loading ? <Spinner/> : (
        <>
            <div className='image-board-container'>
                {news.map(i => (
                    <OneNews
                        key={i.id}
                        title={i.title}
                        description={i.description}
                        image={i.image}
                    />
                ))}
            </div>
            <NavLink className='btn-link add-link' to='/add'>Add News</NavLink>
        </>
    );
};

export default News;