# Usa la imagen oficial de Node.js como base
FROM node:16-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios para la instalación de dependencias
COPY package*.json ./
COPY .env ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 8080
EXPOSE 8080

CMD ["npm", "run", "start"]
