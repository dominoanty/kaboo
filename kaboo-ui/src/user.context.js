// src/theme-context.js
import React, { createContext } from "react"
// create context
function generateId() { return  "_" + Math.random().toString(36).substr(2, 9); }
function getId() {
    let uuid = localStorage.getItem('kaboo-uuid');
    if(uuid != null) {
        return uuid;
    }
    uuid = generateId();
    localStorage.setItem('kaboo-uuid', uuid)
    return uuid;
}
export const UserContext = createContext({uuid: getId()})
// create context provider
export function UserProvider({ children }) {
  return <UserContext.Provider value={{uuid : getId()}}>{children}</UserContext.Provider>
}