# Git and What to Push

## Push these
- source code
- `package.json`
- `package-lock.json`
- `.gitignore`
- `README.md`

## Usually do not push these
- `node_modules/`
- `.env`
- `dist/` unless your workflow explicitly needs it

## Example `.gitignore`
```gitignore
node_modules/
dist/
.env
```

## Why `node_modules` should not be pushed
- too large
- makes repo bloated
- everyone can recreate it with `npm install`

## Reality check
A project should work on a clean machine with:
```bash
npm install
npm run dev
```

If not, your setup is weak.
