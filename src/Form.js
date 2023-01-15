import React, { useState } from "react";

export default function Form() {
  //  const [city, setCity] = useState(props.city);
  return (
    // function handleSubmit(event){
    //  event.preventDefault();

    // }
    // function handleCityChange(event){

    // }
    <form
    // onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            value="search city..."
            // onChange={handleCityChange}
          />
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
