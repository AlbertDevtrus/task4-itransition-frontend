import { Link, useNavigation } from "react-router-dom"
import { FormAuth } from "../components/form-components/FormAuth";

const inputs = [
    {
        type: "email",
        name: "email",
        placeholder: "john@email.com"
    },
    {
        type: "password",
        name: "password",
        placeholder: ""
    },
]

export const Login = () => {
    const navigation = useNavigation();

    return (
        <section className="bg-[#d9d9d9] flex justify-center items-center w-screen h-screen">
            <FormAuth state={navigation.state} inputs={inputs}>
                <span className="text-sm text-[#686D76] mt-auto mb-2">
                    You don't have an account?
                    <Link to={"/register"} className="text-black"> register</Link>
                    !
                </span>
            </FormAuth>
        </section>
    )
}
