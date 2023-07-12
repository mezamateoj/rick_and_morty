import React from "react";
import { useLocation } from "react-router-dom";

export default function SearchBar({ onSearch }) {
	const [id, setId] = React.useState("");

	const location = useLocation();

	if (location.pathname === "/") {
		return null;
	}

	function handleChange(e) {
		setId(e.target.value);
	}

	// Remember to reset id after calling onSearch,
	// so that the input field gets cleared after each search
	// This will clear the input field once the button is clicked
	function handleOnClick() {
		onSearch(id);
		setId("");
	}

	function randomId() {
		const randomId = Math.floor(Math.random() * 826);
		onSearch(randomId);
	}

	return (
		<div className="search-container">
			<label htmlFor=""></label>
			<input
				className="field-search"
				type="search"
				placeholder=" 🔍 ID..."
				value={id}
				onChange={handleChange}
			/>

			<button className="btn-nav" onClick={handleOnClick}>
				Add
			</button>

			<button className="btn-nav" onClick={randomId}>
				Random
			</button>
		</div>
	);
}
