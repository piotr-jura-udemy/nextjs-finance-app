import LoginForm from "./components/login-form"

export default function Page() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] py-40">
      <div className="flex flex-col space-y-8 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your email to sign in to/create your account. No password required.
        </p>
      </div>
      <LoginForm />
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">If you don&apos;t have an account yet, type your email above to create one.</p>
    </div>
  );
}
