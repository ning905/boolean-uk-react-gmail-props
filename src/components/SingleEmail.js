import React from "react";
import "../styles/singleEmail.css";

export const SingleEmail = (props) => {
  const { email, toggleStar, unselectEmail } = props;

  return (
    <div className="selected-email email">
      <button className="back" onClick={unselectEmail}>
        Back
      </button>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={() => {
            console.log(email);

            toggleStar(email);
          }}
        />
      </div>

      <h2 className="email-title">{email.title}</h2>
      <h3 className="email-sender">{email.sender}</h3>
    </div>
  );
};
