# Modify Header

An Express.js HTTPS server for testing custom HTTP request and response header behavior. Useful for exploring how headers are sent, received, and processed by browsers and proxies.

## Tech Stack

- Node.js / Express
- HTTPS (HTTP/2 capable)
- JWT (`jsonwebtoken`)
- Morgan request logging
- Static frontend in `public/`

## Setup

Install dependencies:

```bash
npm install
```

Generate SSL certificates:

```bash
./cert-install.sh
```

## Running

```bash
./run.sh
```

Or directly:

```bash
node server.js
```

The server runs on port `8080` over HTTPS.
