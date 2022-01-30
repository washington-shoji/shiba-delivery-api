# Notes

## Dependencies

I.e. yarn add

express dotenv cors helmet joi express-jwt express-jwt-authz helmet jwks-rsa mongodb

## Dev Dependencies

I.e. yarn add --dev

typescript ts-node-dev morgan mongodb express-jwt jwks-rsa express-jwt-authz

### Types

I.e. yarn add --dev

@types/node @types/express @types/dotenv @types/cors @types/helmet @types/morgan

## Initialise tsconfig.json file for typescript

npx tsc --init

## Scripts

"scripts": {
    "dev": "ts-node-dev --respawn --pretty --transpile-only src/index.ts"
}
