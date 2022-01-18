# Notes

## Dependencies

I.e. yarn add

express dotenv cors helmet

## Dev Dependencies

I.e. yarn add --dev

typescript ts-node-dev morgan mongodb

### Types

I.e. yarn add --dev

@types/node @types/express @types/dotenv @types/cors @types/helmet @types/morgan

## Initialise tsconfig.json file for typescript

npx tsc --init

## Scripts

"scripts": {
    "dev": "ts-node-dev --respawn --pretty --transpile-only src/index.ts"
}
