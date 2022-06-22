
export const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});


const user = getUser();
console.log(user);

// Tarea
export const getUserActive = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUserActive('Name');
console.log( usuarioActivo );



