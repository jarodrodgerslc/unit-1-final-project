import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  async function fetchToken() {
    const response = await fetch(
      "https://id.twitch.tv/oauth2/token?client_id=hyd4dsmg4k9gfl35t0w6lt1umhahg5&client_secret=9ly3pwp3i652la1qcsgpaxizgao9vt&grant_type=client_credentials",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const data =  await response.json();
    return data.access_token;
  }

  async function getGames() {
    const token = await fetchToken();
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": "hyd4dsmg4k9gfl35t0w6lt1umhahg5",
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/plain",
      },
      body: `fields name, rating, first_release_date; sort rating desc; limit 5;`
    });
    const games = await response.json();
    console.log(games);
  }

  const handleChange = (value) => {
    setInput(value)
    getGames(value)
  }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Search.."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
