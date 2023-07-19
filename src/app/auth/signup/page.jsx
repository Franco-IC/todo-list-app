import "../../globals.css";
import SignUpForm from "@/app/components/forms/SignUpForm";

function SignUp() {
  return (
    <section className="flex flex-col justify-center items-center mt-32 text-center appearing">
      <div className="w-fit p-14 rounded-xl bg-neutral-900 shadow-lg shadow-emerald-800">
        <h1 className="font-bold text-xl mb-6">Create your account</h1>

        <SignUpForm />

        <p className="mt-16 ">
          Already registered?{" "}
          <a
            href="/auth/signin"
            className="text-blue-500 hover:text-blue-700 transition-all"
          >
            Sign In
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default SignUp;
