**Aplicando Seguridad para input Usuarios**
----

  Con esta Api comprendemos el uso de hash para proteger las contraseñas de los usuarios de cualquie aplicación.
  la funcion de hash es una funcion que encripta la contraseña de forma irreversible.

  <br/>

**Registro de usuario nuevo**
  
  Este endpoint registra a los usuarios nuevos de una aplicación

* **URL**

 /register

* **Method:**

  `Esta Api recibe llamadas del tipo POST el body que solicita es el siguiente`

      `{"username":"ejemplo","password":"ejemplo"}`


 
* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"menssage":"Usuario creado con exito!!!"}`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{"message":"El body no es correcto..."}`


----
**Loggin de usuario registrado**
 este endpoint nos permite logear al usuario a una cuanta en la que ya esta registrado

* **URL**

 /loggin

* **Method:**

  `Esta Api recibe llamadas del tipo POST el body que solicita es el siguiente`

 `{"username":"ejemplo","password":"ejemplo"}`


*  **URL Params**
 
* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"message":"Se ha loggeado con éxito!"}`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{"message":"Error, usuario o contraseña no son correctas..."}`





