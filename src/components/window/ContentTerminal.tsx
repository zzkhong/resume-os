"use client";

import React from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

const ContentTerminal: React.FC = () => {
  const terminalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (terminalRef.current) {
      const term = new Terminal({
        cols: 80,
        rows: 24,
        cursorBlink: true,
        theme: {
          background: "black",
          foreground: "white",
        },
      });

      term.open(terminalRef.current);

      term.writeln("© CK Chin. All Rights Reserved.");
      displayPrompt(term);

      term.onData((data) => {
        // Simulating 'Permission Denied' for every input
        if (data === "\r") {
          term.writeln("\r\nPermission denied. Need sudo access.");
        } else {
          term.write(data === "\u007f" ? "\b \b" : data);
        }
      });

      return () => {
        term.dispose();
      };
    }
  }, []);

  const displayPrompt = (term: Terminal) => {
    term.write("user@ubuntu:~$ ");
  };

  return (
    <div
      ref={terminalRef}
      style={{
        height: "400px",
        width: "600px",
        border: "1px solid #ccc",
        margin: "0 auto",
      }}
    />
  );
};

export default ContentTerminal;
