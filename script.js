//Ejemplo sencillo
/* const getName = () => {
    return 'Ossany';
}

console.log(getName()); */
//Ejemplo con promesas
/* const getName = () => {
    return new Promise((resolve, reject) => {
        resolve('Ossany');
    });
}

getName().then(res => console.log(res)); */
//Ejemplo con Async Await
/* const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ossany');
        },1500)
        
    });
}

getName().then(res => console.log(res)); */
//Llamando a la funcion desde otra funcion para mostrar la necesidad de usar async cuando llamamos a API
/* const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ossany');
        },1500)
        
    });
}

const sayHello = async () => {
  const name = await getName();
  return `Hello ${name}`;
}

sayHello().then(res => console.log(res));
 */

//Ejemplo sencillo del ejercicio de promesas para llevarlo a Asyn Await
const users = [
    {
        id:1,
        name:'Ossany'
    },
    {
        id:2,
        name:'Esteban'
    },
    {
        id:3,
        name:'Maria Caridad'
    }
];

const emails = [
    {
        id:1,
        email:'ossany@gmail.com'
    },
    {
        id:2,
        email:'esteban@gmail.com'
    }
];

const getUser = async (id) => {
  const user = users.find((user) => user.id == id);

    if(!user) throw new Error(`No existe un usuario con id ${id}`);
    else return user;
}

const getEmail = async (user) => {
   const email = emails.find((email) => email.id == user.id);
   
    if(!email) throw new Error(`No existe un email para ${user.name}`);
    else return ({
        id:user.id,
        name: user.name,
        email:email.email
    });
}

//Debemos de hacer uso de una nueva funcion para poder ejecutar getEmail
const getInfo = async (id) => {
    try{
        const user = await getUser(id);
        return await getEmail(user);
       }
       catch(error){
        console.log(error);
       }
}
//Asi devuelve una promesa por lo tanto hay que usar el then
//console.log(getInfo())

getInfo(1).then(res => console.log(res));

