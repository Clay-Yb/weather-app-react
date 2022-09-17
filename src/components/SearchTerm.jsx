import React from "react";
import { useGlobalContext } from "../provider/ContextProvider";
import "./SearchTerm.scss";
const SearchTerm = () => {
	const { searchTerm, setSearchTerm, loading, cities, handleClick } =
		useGlobalContext();
	return (
		<div className="input_control container">
			<input
				type="text"
				placeholder="Search cities..."
				autoComplete="off"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			{searchTerm && loading && (
				<ul>
					<li>Loading...</li>
				</ul>
			)}
			{searchTerm && !loading && (
				<ul>
					{cities?.map((item, index) => (
						<li
							key={index}
							onClick={() =>
								handleClick(
									item.latitude,
									item.longitude,
									item.city,
									item.countryCode
								)
							}
						>
							{item.city}, {item.countryCode}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchTerm;
