"use client"
import Button from "@/components/button";
import Input from "@/components/input";
import { login } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus()
  return <div className="w-full">
    <Button
      className="w-full"
      type="submit"
      size="sm"
      disabled={pending}
    >
      {pending ? "Sending..." : "Sign In with Email"}
    </Button>
  </div>
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, { message: '', error: false })
  return (
    <form action={formAction} className="space-y-2">
      <Input
        type="email"
        placeholder="name@example.com"
        name="email"
        required
      />
      <SubmitButton />
      <p className={`${state?.error ? 'text-red-500' : 'text-green-500'} text-sm text-center`}>{state?.message}</p>
    </form>
  );
}