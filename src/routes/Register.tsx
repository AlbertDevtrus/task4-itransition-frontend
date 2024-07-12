import clsx from "clsx";
import { Form, Link, useNavigation } from "react-router-dom"

export const Register = () => {

    const navigation = useNavigation();

    return (
        <section className="bg-[#d9d9d9] flex justify-center items-center w-screen h-screen">
            <div className="border-4 border-[#373A40] w-3/4 md:w-2/4 lg:w-1/4 shadow-comic p-8 bg-[#F5F5F5]">
                <h1 className="text-center text-3xl font-bold font-sans tracking-widest text-[#373A40]">Register</h1>
                <Form className="flex flex-col h-full" method="post">
                    <label htmlFor="name" className="text-lg font-bold text-[#686D76] mt-5">
                        Name:
                    </label>
                    <input
                        type="Text"
                        placeholder="John Smith"
                        className="mt-2 px-2 py-2 rounded-sm text-[#373A40] mb-5"
                        name="name"
                        id="name"
                        required
                    />
                    <label htmlFor="email" className="text-lg font-bold text-[#686D76] ">
                        Email:
                    </label>
                    <input
                        type="email"
                        placeholder="john@email.com"
                        className="mt-2 mb-5 px-2 py-2 rounded-sm text-[#373A40]"
                        name="email"
                        id="email"
                        required
                    />
                    <label htmlFor="password" className="text-lg font-bold text-[#686D76]">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="mt-2 mb-5 px-2 py-2 rounded-sm text-[#373A40]"
                        name="password"
                        id="password"
                        required
                    />
                    <label htmlFor="confirmPassword" className="text-lg font-bold text-[#686D76]">
                        Confirm password:
                    </label>
                    <input
                        type="password"
                        className="mt-2 mb-10 px-2 py-2 rounded-sm text-[#373A40]"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                    />
                    <span className="text-sm text-[#686D76] mb-2">
                        You have an account? 
                        <Link to={"/login"} className="text-black"> log in</Link>
                        !
                    </span>
                    <button
                        type="submit"
                        className={clsx(
                            "justify-self-end shadow-comic-button p-2 border-2 border-[#373A40] text-center text-lg font-bold font-sans tracking-widest text-[#373A40] mt-auto mb-10",
                            {
                                "opacity-55": navigation.state === 'submitting'
                            }
                        )}
                        disabled={navigation.state === 'submitting'}
                    >
                        {navigation.state === 'submitting' ? ". . ." : "Submit"}
                    </button>
                </Form>
            </div>
        </section>
    )
}
