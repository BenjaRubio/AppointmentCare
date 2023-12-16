# AppointmentCare   

<br />

## como correr el proyecto   

<br />

<br />

Para correr el proyecto se deben abrir dos consolas por separado, una para ejecutar el frontend y otra para ejecutar el backend.

### Backend  
El backend del proyecto se ejecuta con Docker, por lo que desde la carpeta raíz se debe iniciar y ejecutar con los siguientes comandos:  

```sudo service docker start```

```sudo docker compose up --build```

<br />


### Frontend

El frontend del proyecto esta hecho en React, para ejecutarlo debemos movernos a otra carpeta y ejecutar la aplicación, con los siguientes comandos:


```cd frontend```


```npm start```

Luego, se abrirá en el navegador ```http://localhost:3000```, y se tendrá acceso al proyecto.

<br />

<br />

## Esquema de base de datos

<br />

<br />


### Modelos:

<br />

**Patient**:  
- id  (int, primaryKey)   
- name  (string)  
- lastname   (string)  
- email   (string)  
- password   (string)  
- role   (string)  


**Professional**:  
- id  (int, primaryKey)  
- name   (string)  
- lastname   (string)  
- email   (string)  
- password   (string)  
- role   (string)  
- specialty   (string)  



**AvailableDate**:  
- id  (int, primaryKey)  
- professionalId  (int, foreignKey)  
- day   (date)  
- block  (int)  
- available  (boolean)  



**Appointment**:  
- id (int, primaryKey)  
- patientId (int, foreignKey)  
- professionalId (int, foreignKey)  
- day  (date)  
- block (int)   
  

### Asociaciones  

<br />

Patient **hasMany** Appointment  

Professional **hasMany** AvailableDate  
Professional **hasMany** Appointment  

AvailableDate **belongsTo** Professional  

Appointment **belongsTo** Patient  
Appointment **belongsTo** Professional  

























