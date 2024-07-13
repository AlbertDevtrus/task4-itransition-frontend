import { Form } from "react-router-dom"
import { InputAuth } from "./InputAuth"
import { SubmitBtn } from "./SubmitBtn";

interface Props {
    state: "idle" | "loading" | "submitting",
    inputs: {
        type: string;
        name: string;
        placeholder: string;
    }[],
    children: React.ReactNode;
}

export const FormAuth = ({ state, inputs, children }: Props) => {
    return (
        <div className="border-4 border-[#373A40] w-3/4 md:w-2/4 lg:w-1/4 shadow-comic p-8 bg-[#F5F5F5]">
            <h1 className="text-center text-3xl font-bold font-sans tracking-widest text-[#373A40]">Login</h1>
            <Form className="flex flex-col h-full" method="post">
                {
                    inputs.map(input => (
                        <InputAuth key={input.name} type={input.type} name={input.name} placeholder={input.placeholder} />
                    ))
                }
                {children}
                <SubmitBtn state={state} />
            </Form>
        </div>
    )
}
