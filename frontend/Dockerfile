# Usa la imagen oficial de Node.js como base
FROM node:16-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios para la instalación de dependencias
COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .
# Instala las dependencias
RUN npm run build
RUN npm install -g serve

# Copia el resto de la aplicación


EXPOSE 3000

CMD ["serve", "-s", "build"]