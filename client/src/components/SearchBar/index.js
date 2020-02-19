import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search Stuff..."
                    id="search"
                />
                <br></br>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    find stuff
        </button>
            </div>
        </form>
    );
}

export default SearchBar;