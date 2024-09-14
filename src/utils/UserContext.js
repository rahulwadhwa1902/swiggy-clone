import { createContext } from "react";

// Context, sothat we use this data anywhere we want
const UserContext = createContext({
    loggedInUser : "Default User"
});
export default UserContext;
