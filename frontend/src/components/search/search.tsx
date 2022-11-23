import { FC, useEffect, useState } from "react";
import { SearchWrapper } from "./styles/search.styled";
import { FaCheck, FaSearch } from "react-icons/fa";
import {
  AddressSuggestion,
  getLocationInfo,
  getSuggestions,
} from "../../addresses";
import NearestDrivers from "../drivers/nearestDrivers";

export interface SearchProps {
  mockSearchValue?: string;
}
export const Search: FC<SearchProps> = ({ mockSearchValue }) => {
  const [results, setResults] = useState<AddressSuggestion[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locationInfo, setlocationInfo] = useState({});
  const [query, setQuery] = useState(mockSearchValue ?? "");
  const [suggestionView, setSuggestionView] = useState(false);

  useEffect(() => {
    let isMounted = true; // check if component is mounted -> fixes jest error ( should be fixed in react 18)
    getSuggestions(query)
      .then((data) => isMounted && setResults(data))
      .catch((error) => console.log(error));

    // clear up
    return () => {
      isMounted = false;
    };
  }, [query]);

  useEffect(() => {
    selectedLocation !== "" &&
      getLocationInfo(selectedLocation).then((result) =>
        setlocationInfo(result)
      );
  }, [selectedLocation]);

  const inputHandler = (selected: string): void => {
    setSelectedLocation(selected);
    setSuggestionView(false);
    setQuery(selected);
  };


  return (
    <div>
      <SearchWrapper data-testid="SearchWrapper">
        <div className="searchTitle">
          <h1>Search for an address</h1>
        </div>

        <div className="searchContainer">
          <div className="search">
            <i>{selectedLocation !== "" ? <FaCheck /> : <FaSearch />}</i>
            <input
              type="text"
              id="searchBar"
              placeholder="Pickup location..."
              onChange={(e) => {
                setQuery(e.target.value);
                setSuggestionView(true);
              }}
              value={query}
            />
          </div>
          {results.length > 0 && (
            <div className={`${suggestionView ? "searchResults" : "d-none"}`}>
              {Object.values(results).map((result, i) => {
                return (
                  <div
                    onClick={() => {
                      inputHandler(result.label);
                    }}
                    key={i}
                  >
                    {result.label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </SearchWrapper>
      {Object.keys(locationInfo).length > 0 && (
        <NearestDrivers locationInfo={locationInfo} />
      )}
    </div>
  );
};
