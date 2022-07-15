import React from "react";
import { Email } from "./Email";

import "../styles/emails.css";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

export const Emails = (props) => {
  const { emails, hideRead, currentTab, toggleRead, toggleStar } = props;

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <ul>
      {filteredEmails.map((email, index) => (
        <Email
          email={email}
          index={index}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      ))}
    </ul>
  );
};
