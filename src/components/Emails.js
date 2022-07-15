import React from "react";
import { Email } from "./Email";

import "../styles/emails.css";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

export const Emails = (props) => {
  const {
    emails,
    hideRead,
    currentTab,
    searchInput,
    toggleRead,
    toggleStar,
    selectEmail,
  } = props;

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  if (searchInput)
    filteredEmails = filteredEmails.filter((email) =>
      email.title.toLowerCase().includes(searchInput.toLowerCase())
    );

  return (
    <ul>
      {filteredEmails.map((email, index) => (
        <Email
          key={index}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          selectEmail={selectEmail}
        />
      ))}
    </ul>
  );
};
