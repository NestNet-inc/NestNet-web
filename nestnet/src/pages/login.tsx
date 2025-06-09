import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormAuth } from "@/components/formAuth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !password) {
            setError("all fields are required");
            return;
        }

        if (!email.includes("@")) {
            setError("Invalid Email");
            return;
        }

        if (password.length < 8) {
            setError("The password must be at least 8 characters long");
            return;
        }

        setError("");
        //Create the fetch for auth of user
    }
    return (
        <div className="min-h-screen bg-white">
            <div className="w-full flex justify-between items-center px-12 py-4">
                <div>
                    <Image
                        src="/Nestnet logo.png"
                        alt="Nestnet logo"
                        width={72}
                        height={72}
                        className="object-contain"
                    />
                </div>
                <div className="space-x-4">
                    <Button variant="ghost" className="text-amber-800">Login</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>

            <div className="mt-12 flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-amber-800 mb-4">Sign In</h1>
                <p className="text-neutral-700 mb-8 max-w-md text-xl">
                    Enter your details to Log in your account
                </p>

                <form className="md:w-2/5 sm:w-3/5 flex flex-col px-8" onSubmit={handleSubmit}>
                    <label className="text-neutral-700">Email</label>
                    <input type="text" placeholder="Enter your email" className=" h-10 border border-gray-300 rounded px-2 mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="text-neutral-700">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full h-10 border border-gray-300 rounded px-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" className="absolute right-4 top-2.5 text-gray-500 hover:text-gray-700" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                    </div>
                    <Link href="#" className="text-sm ml-auto text-amber-800 hover:underline">forgot password?</Link>
                    <Button className="w-full mt-8" type="submit">Log In</Button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
                <span className="mt-4 mb-4 text-neutral-500">Or</span>
                <FormAuth />
                <p className="mb-12">Don't have an account? <Link href="#" className="text-amber-800 mx-1 hover:underline">Log in</Link></p>
            </div>
        </div>
    )
}