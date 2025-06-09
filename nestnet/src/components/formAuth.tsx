import { signIn } from "next-auth/react";
import Image from "next/image";

export function FormAuth() {
    return (
        <div className="md:w-2/5 sm:w-3/5 px-8 flex flex-col gap-4 mb-8">
            <button onClick={() => signIn("google")} className="bg-gray-200 h-10 border rounded px-4 flex items-center justify-center gap-2">
                <Image
                    src="/google.svg"
                    alt="google logo"
                    width={24}
                    height={24}
                />
                <span className="text-sm">Continue with Google</span>
            </button>
            <button onClick={() => signIn("apple")} className="bg-gray-200 h-10 border rounded px-4 flex items-center justify-center gap-2">
                <Image
                    src="/apple.svg"
                    alt="apple logo"
                    width={24}
                    height={24}
                />
                <span className="text-sm">Continue with Apple</span>
            </button>
            <button onClick={() => signIn("facebook")} className="bg-gray-200 h-10 border rounded px-4 flex items-center justify-center gap-2">
                <Image
                    src="/facebook.svg"
                    alt="facebook logo"
                    width={24}
                    height={24}
                />
                <span className="text-sm">Continue with Facebook</span>
            </button>
        </div>
    )
}