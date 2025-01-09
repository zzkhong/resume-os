"use client";

import React from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

const ContentTerminal: React.FC = () => {
  const terminalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (terminalRef.current) {
      const term = new Terminal({
        cols: 20,
        rows: 20,
        cursorBlink: true,
        theme: {
          background: "black",
          foreground: "white",
        },
      });

      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon); // Attach the fit addon
      term.open(terminalRef.current);

      fitAddon.fit();

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

  return <div ref={terminalRef} className="w-full h-full" />;
};

export default ContentTerminal;
