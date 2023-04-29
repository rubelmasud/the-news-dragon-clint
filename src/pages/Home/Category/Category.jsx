import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCard/NewsCart';

const Category = () => {

    const { id } = useParams()
    const newsCategory = useLoaderData()

    return (
        <div>
            {id && <h2>This is category page :{newsCategory.length}</h2>}
            <div className="">
                {
                    newsCategory.map(news =>
                        <NewsCart
                            key={news._id}
                            news={news}
                        ></NewsCart>
                    )
                }
            </div>
        </div>
    );
};

export default Category;