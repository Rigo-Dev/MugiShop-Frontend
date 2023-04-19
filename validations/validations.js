import * as yup from 'yup' 

export const userSchema = yup.object().shape(({
    email: yup.string().email().required("Ingrese un email valido"),
    password: yup.string().min(4).max(100).required("Ingrese una contraseña valida")
}))
