import React from "react";

export default function Form({ handleSubmit, setValue, input }) {
  return (
    <form>
      <input
        value={input}
        type="text"
        onChange={(event) => setValue(event.target.value)}
      />
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
}
