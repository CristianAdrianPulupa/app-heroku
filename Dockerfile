# Imagen base
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto donde corre tu app
EXPOSE 3000

# Comando para ejecutar tu app
CMD ["node", "index.js"]
