import { useState, useEffect, useRef } from "react";
import useSuggestionStore from "../../store/useSuggestionStore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import formatCurrency from "../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const { suggestions, fetchSuggestions, clearSuggestions } = useSuggestionStore();
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsFocused(false); // Ẩn suggest nhưng KHÔNG xóa data
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="search-container" ref={searchRef}>
            <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && query.trim() !== "") {
                        navigate(`/products?q=${query}`);
                        setIsFocused(false);
                    }
                }}
            />
            <Link
                onClick={() => setIsFocused(false)}
                to={`/products?q=${query}`}
                className="search-icon-container">
                <MagnifyingGlassIcon className="search-icon" />
            </Link>
            {isFocused && query && suggestions.length > 0 && (
                <div className="suggestion-list">
                    {suggestions.map((item) => (
                        <Link
                            className="suggestion-item"
                            to={`/detail/${item._id}`}
                            key={item._id}
                            onClick={() => setQuery("")}>
                            <div className="suggestion-info">
                                <span style={{ fontWeight: 400 }} className="suggestion-name">
                                    {item.name}
                                </span>
                                <span
                                    style={{ fontWeight: 700, color: "#02457a" }}
                                    className="suggestion-price">
                                    {formatCurrency(
                                        Number(item.price) * (1 - Number(item.discount) / 100)
                                    )}
                                </span>
                            </div>
                            <img className="suggestion-img" src={item.img_obj.productimg}></img>
                        </Link>
                    ))}
                    {suggestions.length >= 5 && (
                        <Link
                            to={`/products?q=${query}`}
                            className="view-all-button"
                            onClick={() => {
                                clearSuggestions();
                            }}>
                            Xem thêm sản phẩm
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}
