# Usa una versión estable de Node y Alpine
FROM node:18-alpine3.18

# Instalar herramientas necesarias para compilar sqlite3
RUN apk add --no-cache python3 py3-pip py3-setuptools make g++ sqlite

# Crear carpeta de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de dependencias
COPY package*.json ./

# Recompilar e instalar sqlite3 dentro del contenedor
RUN npm install sqlite3 --build-from-source

# Instalar el resto de dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto de la API
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]
