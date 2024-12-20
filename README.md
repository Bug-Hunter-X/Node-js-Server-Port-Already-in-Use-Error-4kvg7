# Node.js Server Port Already in Use Error

This repository demonstrates a common error encountered when developing Node.js applications: the `EADDRINUSE` error. This error occurs when a server attempts to bind to a port that's already in use by another process.

## Problem

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If this port is already in use (e.g., by another instance of the server or a different application), the server will fail to start and throw an `EADDRINUSE` error.

## Solution

The `bugSolution.js` file provides a solution that gracefully handles the `EADDRINUSE` error using error handling and retries.