# AppSALUD
PLUGINS  a instalar:
Primero se debe instalar el complemento de firebase pára angular con el siguiente comando:
npm install firebase
Luego se debe ejecutar el segundo comando para instalar todas dependencias de angular fire
npm install @angular/fire firebase --save

Conexion con base de datos:
Lo primero es ir a la pagina de firebase https://console.firebase.google.com/u/0/?hl=es,
crear una cuenta o iniciar sesion si ya posee una.
crear un proyecto, si desea mantiene la opcion de google analityx en caso de que no solo apriete continuar.
al crerse su proyecto debera hacer click en la opcion de web que se señala con el sig simbolo </>
asignarle un nombre y registrar su app,
copiar el aparte que dice 
"// Your web app's Firebase configuration"
y apretar ir a la consola,

el codigo que se copio se debera de copiar en el archivo
 environment.ts y se le debera de borrar la palabra const y cambiar el signo = por :, tambien borrar el ; final

apretar en authentication y hacer click en comenzar.
seleccionar la opcion correo electronico, habilitar solamente la opcion de arriba y dar click en guardar.
luego hacer click en firestore database y hacer click en crear base de datos, seleccionar la opcion comenzar en modo de prueba y continuar luego en habilitar y ya esta lista la base de datos


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# HealthApp

PLUGINS to install:
First you must install the firebase plugin for angular with the following command:
npm install firebase
Then the second command must be run to install all dependencies of angular fire
npm install @ angular / fire firebase --save

Database connection:
The first thing is to go to the firebase page https://console.firebase.google.com/u/0/?hl=es,
create an account or login if you already have one.
create a project, if you want to keep the google analityx option in case you don't just press continue.
When creating your project, you must click on the web option that is indicated with the following symbol </>
assign a name and register your app,
copy the apart that says
"// Your web app's Firebase configuration"
and press go to the console,

the code that was copied should be copied into the file
 environment.ts and you should delete the word const and change the = sign to:, also delete the; final

click on authentication and click on start.
select the email option, enable only the option above and click save.
then click on firestore database and click on create database, select the option to start in test mode and then continue to enable and the database is ready
