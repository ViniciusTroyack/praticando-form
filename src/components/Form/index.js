import './styles.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Form = () => {
    const schema = yup.object().shape({
        nickName: yup.string().required("Nick obrigatório"),
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória").matches('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/', 'Senha Invalida'),
        confirmPassword: yup.string().required("As senhas devem ser iguais").matches('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/', 'Senha Invalida')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = (data) => console.log(data);

    return (
        <div className="container">
            <h1>Cadastro de Usuario</h1>
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
                <input placeholder="Nome de Usuario*" {...register("nickName")} />
                {errors.name?.message}
                <input placeholder="Nome Completo*" {...register("name")} />
                {errors.name?.message}
                <input placeholder="Email*" {...register("email")} />
                {errors.email?.message}
                <input placeholder="Senha*" {...register("password")} />
                {errors.password?.message}
                <input placeholder="Confirme sua senha*" {...register("confirmPassword")} />
                {errors.confirmPassword?.message}
                <button type="submit">Cadastrar Usuario</button>
            </form>
        </div>
    );
}

export default Form;