import { useState, useEffect } from "react";
import useSuggestionStore from "../../store/useSuggestionStore";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const { suggestions, fetchSuggestions, clearSuggestions } = useSuggestionStore();

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (query.trim() === "") {
                clearSuggestions();
            } else {
                fetchSuggestions(query);
            }
        }, 300);

        return () => clearTimeout(debounce);
    }, [query, fetchSuggestions, clearSuggestions]);

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {suggestions.length > 0 && (
                <div className="suggestion-list">
                    {suggestions.map((item) => (
                        <Link to={`/detail/${item._id}`} key={item._id}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
