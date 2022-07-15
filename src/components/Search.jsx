import styles from "./Search.module.css";
import React from "react";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from "react-router";
import useQuery from "../hooks/useQuery";

export function Search() {
    const navigate = useNavigate();
    const query = useQuery();
    const search = query.get("search");

    // useEffect(() => {
    //     setSearchText(search || "");
    // }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //navigate("/?search="+ searchText);
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={search} 
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;
                        //return setSearchText(value);
                        navigate("/?search=" + value);
                    }} 
                />
                <FaSearch size={20} color="black" className={styles.searchButton} />
            </div>
        </form>
    )
}
