import { Link, useNavigation } from "react-router-dom"
import { FormAuth } from "../components/form-components/FormAuth";

const inputs = [
    {
        type: "text",
        name: "name",
        placeholder: "John Smith"
    },
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
    {
        type: "password",
        name: "confirmPassword",
        placeholder: ""
    },
]


export const Register = () => {

    const navigation = useNavigation();

    return (
        <section className="bg-[#d9d9d9] flex justify-center items-center w-screen h-screen">
            <FormAuth state={navigation.state} inputs={inputs} >
                <span className="text-sm text-[#686D76] mb-2">
                    You have an account?
                    <Link to={"/login"} className="text-black"> log in</Link>
                    !
                </span>
            </FormAuth>
        </section>
    )
}
