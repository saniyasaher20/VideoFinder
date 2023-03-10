import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxMagnifyingGlass, RxPerson } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import YoutubeLogo from "../assets/img/YouTube-Logo.png";
import { Link } from "react-router-dom";
import { SEARCH_SUGGESTIONS_API, SEARCH_RESULTS_API } from "../constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Subscribe to the store.search 
  const searchCache = useSelector(store => store.search);

  // Search Input Debouncing
  useEffect(() => {
    // if difference between two key strokes is less than 200ms - decline API call
    // const timer = setTimeout(() => getSearchSuggestions(), 150)

    const timer = setTimeout(() => {
      // Optimize the API calls, if data is present in cache don't call api
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions();
      }
    }
      , 150)

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery])

  // Handle menu toggle function
  const handleToggleMenu = () => {
    // dispatch an action
    dispatch(toggleMenu())
  }

  // Search suggestions API call fn
  const getSearchSuggestions = async () => {
    const response = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);

    // dispatch the cache result into the store
    dispatch(
      cacheResults({
        [searchQuery]: json[1]
      })
    )
  }

  // Search Results API call fn
  // const getSearchResults = async () => {
  //   const response = await fetch(SEARCH_RESULTS_API + searchQuery + "&key=" + process.env.REACT_APP_GOOGLE_AUTH_KEY)
  //   const json = await response.json();
  //   setSuggestions()
  // }

  return (
    <div className="flex justify-between items-center py-2" id="header">

      <span className="flex items-center gap-4 text-2xl">
        <span className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggleMenu()}>
          <RxHamburgerMenu />
        </span>
        {/* error if using Link tag: Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null.
        
        <Link to="home"> */}
        <img className="cursor-pointer" src={YoutubeLogo} alt="Youtube Logo" width={90} />
        {/* </Link> */}
      </span>

      {/* Search Bar */}
      <span className="mx-auto basis-1/3 relative">
        <p className="text-xs ml-3 mb-1 text-gray-500">Type "javascript" to see it work, if you do not have CORS extension enabled.</p>
        <span className="flex">
          <input
            className="rounded-l-full w-4/6 border border-gray-300 shadow-inner px-5 py-2 focus-visible:border-blue-400 focus-visible:outline-0"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => { setShowSuggestions(true) }}
            onBlur={() => { setShowSuggestions(false) }}
          />
          <button className="border-gray-300 rounded-r-full text-xl bg-gray-100 px-5 hover:bg-gray-200">
            <RxMagnifyingGlass />
          </button>
        </span>
        {showSuggestions && <ul className="w-4/6 shadow-md rounded-lg ml-3 absolute bg-white">{suggestions.map(s => <li key={suggestions.indexOf(s)} className="my-1 hover:bg-gray-100 px-2 py-1 cursor-pointer">{s}</li>)}</ul>}
      </span>

      <span className="text-2xl">
        <RxPerson />
      </span>
    </div>
  );
};

export default Header;
