SRC = $(shell find src -name "*.js" -type f)

dist/gameTest.js: $(SRC)
    node_modules/typescript/bin/tsc index.ts --module commonjs --outFile dist/game.js --declaration