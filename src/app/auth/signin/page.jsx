import "../../globals.css";
import SignInForm from "@/app/components/forms/SignInForm";

function SignIn() {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-32 appearing">
      <div className="w-fit p-14 rounded-xl bg-neutral-900 shadow-lg shadow-sky-800">
        <h1 className="font-bold text-xl mb-6">Start managing your tasks</h1>

        <SignInForm />

        <p className="mt-16">
          Don't have an account yet?{" "}
          <a
            href="/auth/signup"
            className="text-emerald-400 hover:text-emerald-500 transition-all"
          >
            Create one
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default SignIn;
