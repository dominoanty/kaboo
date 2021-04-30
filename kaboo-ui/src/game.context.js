// src/theme-context.js
import React, { createContext, useState } from "react"
export const GameContext = createContext({gameState: null, setGameState: () => {}})
// create context provider
export function GameProvider({ children }) {
    const [gameState, setGameState] = useState(null);
    const value = {gameState, setGameState};

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}