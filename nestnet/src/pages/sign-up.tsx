import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormAuth } from "@/components/formAuth";


export default function signUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassowrd, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassowrd) {
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

        if (confirmPassowrd != password) {
            setError("The passwords do not match");
            return;
        }

        setError("");
        //Create the fetch for auth and register of user
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
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-amber-800 mb-4">Sign Up</h1>
                <p className="text-neutral-700 mb-8 max-w-md text-xl">
                    Start your NestNet Journey
                </p>

                <form className="md:w-2/5 sm:w-3/5 flex flex-col px-8" onSubmit={handleSubmit}>
                    <label className="text-neutral-700">Name</label>
                    <input type="text" placeholder="Enter your name" className=" h-10 border border-gray-300 rounded px-2 mb-4" value={name} onChange={(e) => setName(e.target.value)} />
                    <label className="text-neutral-700">Email</label>
                    <input type="text" placeholder="Enter your email" className=" h-10 border border-gray-300 rounded px-2 mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="text-neutral-700">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full h-10 border border-gray-300 rounded px-2 mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" className="absolute right-4 top-2.5 text-gray-500 hover:text-gray-700" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                    </div>
                    <label className="text-neutral-700">Confirm Password</label>
                    <div className="relative">
                        <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full h-10 border border-gray-300 rounded px-2 mb-4" value={confirmPassowrd} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button type="button" className="absolute right-4 top-2.5 text-gray-500 hover:text-gray-700" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <Button className="w-full mt-6" type="submit">Create Account</Button>
                </form>
                <span className="text-neutral-500 mt-4 mb-4">Or</span>
                <FormAuth />
                <p className="mb-12">Already have an account? <Link href="#" className="text-amber-800 mx-1 hover:underline">Log in</Link></p>
            </div>
        </div>
    )
}