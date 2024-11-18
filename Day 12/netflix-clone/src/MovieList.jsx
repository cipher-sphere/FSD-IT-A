import "./MovieList.css";
import React, { useState } from "react";
import movies from "./movies";

const MovieList = () => {
    const [sortBy, setSortBy] = useState("title");

    const sortedMovies = [...movies].sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "cost") return parseInt(a.cost.slice(1)) - parseInt(b.cost.slice(1));
        return 0;
    });

    return (
        <div>
            <div>
                <label>Sort By: </label>
                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="title">Title</option>
                    <option value="cost">Budget</option>
                </select>
            </div>
            <div className="movie-list">
                {sortedMovies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>Language: {movie.language}</p>
                        <p>Budget: {movie.cost}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
