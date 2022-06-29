# ts-node-express

Exemplo para configurar o node com typescript + express + nodemon + sucrase 

## Comandos NPM 

### intalação do typescript:
```
npm i --save-dev typescript
```
### intalação do sucrase:
```
npm i --save-dev sucrase
```
### intalação do nodemon:
```
npm i -g nodemon
```

### intalação do express:
```
npm i --save @types/express
npm i --save express
```
### intalação das definições do typescript para node:
``` 
npm i --save @types/node
```

## Arquivos de Configuração 

tsconfig.json
```json
{
    "compilerOptions": {
        "target": "es2016",                                  
        "module": "commonjs",                                
        "rootDir": "./src",                                  
        "moduleResolution": "node",                       
        "sourceMap": true,                                
        "outDir": "./server",                               
        "esModuleInterop": true,                             
        "forceConsistentCasingInFileNames": true,            
        "strict": true,                                     
        "skipLibCheck": true                                 
    }
}
```

nodemon.json
```json
{
    "watch":["src"],
    "ext":"ts",
    "execMap":{
        "ts":"sucrase-node src/server.ts"
    }
}
```
package.json
```json
{
    ...
    "main": "server/server.js",
    "scripts": {
        "dev": "nodemon src/server.ts",
        "build": "tsc",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
    ...
}
```
