"use client";

import React, { useState, useEffect, useRef } from "react";

const ContentTerminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim().toLowerCase() === "clear") {
        setOutput([]); // Reset the terminal output when "clear" is typed
      } else {
        setOutput((prevOutput) => [
          ...prevOutput,
          `user@ubuntu:~$ ${input}`,
          "Permission denied. Need sudo access.",
        ]);
      }
      setInput("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={terminalRef}
      className="terminal"
      onClick={handleTerminalClick}
      style={{
        fontFamily: "monospace",
        background: "black",
        color: "white",
        padding: "8px",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <div style={{ whiteSpace: "pre-wrap" }}>
        <div>© CK Chin. All Rights Reserved.</div>

        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span>user@ubuntu:~$ </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          autoComplete="off"
          autoFocus
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            outline: "none",
            width: "90%",
            display: "inline",
            marginLeft: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default ContentTerminal;
