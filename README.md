# Enviar Email

Backend en express para realizar envio de email con el proveedor gmail

## Pre-requisitos

* Node v22.7.0
* NPM v10.8.2
* La cuenta de gmail debe tener activo el doble factor de autenticacion y tener la contraseña de aplicacion en gmail

## Instalación
Instalar las dependencias del archivo package.json

```Bash
$ npm install
```

## Variables de entorno
* PORT: Puerto donde se despliega la aplicacion
* EMAIL_USER: Email desde el cual se hara el envio del correo
* EMAIL_PASS: Contraseña de aplicacion en gmail

## Despliegue

### Local
```Bash
$ node ./index.js
```

## API
Peticion tipo POST al endpoint /send-lamp-report ej: http://localhost:3000/api/send-lamp-report 

Request:

* to: donde sera enviado el email
* subject: titulo
* text: texto del email