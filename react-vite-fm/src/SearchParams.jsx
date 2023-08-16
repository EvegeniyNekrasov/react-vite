import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");

  return (
    <div>
      <form action="">
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="location"
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
