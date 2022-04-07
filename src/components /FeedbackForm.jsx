import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setButtonDisabled(true);
      setMessage(null);
    } else if (text.trim().length <= 10) {
      setButtonDisabled(true);
      setMessage("Text must be longer than 10 characters");
    } else {
      setButtonDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleStringLength = () => {};
  return (
    <Card>
      <form>
        <h2>How would you rate our service with us?</h2>
        {/* to do = rating select component  */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={buttonDisabled}>
            Send
          </Button>
          {message && <div class="message">{message}</div>}
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
