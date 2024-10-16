'use client';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addKeyword } from "../../../features/filter/filterSlice";

const SearchBox = () => {
    const { jobList } = useSelector((state) => state.filter);
    const [getKeyWord, setKeyWord] = useState(jobList.keyword);
    const dispatch = useDispatch();
    const router = useRouter();

    // keyword handler
    const keywordHandler = (e) => {
        setKeyWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (getKeyWord) {
            dispatch(addKeyword(getKeyWord));
            router.push(`/job-list?q=${getKeyWord}`);
        }
    };

    const handleClick = () => {
        if (getKeyWord) {
            dispatch(addKeyword(getKeyWord));
            router.push(`/job-list?q=${getKeyWord}`);
        }
    };

    useEffect(() => {
        setKeyWord(jobList.keyword);
    }, [jobList]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-input-container">
                <input
                    type="text"
                    name="listing-search"
                    placeholder="Job title, keywords, or company"
                    value={getKeyWord}
                    onChange={keywordHandler}
                    className="search-input"
                />
                <button 
                    type="submit" 
                    className="search-btn"
                    onClick={handleClick}
                >
                    <span className="icon flaticon-search-3"></span>
                </button>
            </div>
        </form>
    );
};

export default SearchBox;


