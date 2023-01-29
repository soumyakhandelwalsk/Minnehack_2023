import React from "react";

const UserContext = React.createContext({
  username: "",
  signedIn: ""
});

export default UserContext;