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
const getName = async () => {
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



