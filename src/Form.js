import React from "react";

export default function Form() {
  return (
    <form>
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            value="search city..."
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
