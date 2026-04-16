# package.json, node_modules, and package-lock.json

## `package.json`
This is the project's core metadata/config file.

It commonly contains:
- project name
- version
- scripts
- dependencies
- devDependencies

Example:
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.0.0"
  }
}
```

## `node_modules`
This is where installed packages live.

Important:
- usually huge
- generated locally
- should not be pushed to GitHub

## `package-lock.json`
Locks exact versions.
Push this file to GitHub.

## Rule
Push:
- `package.json`
- `package-lock.json`

Do not push:
- `node_modules/`
