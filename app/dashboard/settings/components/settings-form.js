'use client'
import AlertError from "@/components/alert-error"
import AlertSuccess from "@/components/alert-success"
import Input from "@/components/input"
import SubmitButton from "@/components/submit-button"
import { updateSettings } from "@/lib/actions"
import { useFormState } from 'react-dom'

const initialState = {
  message: '',
  error: false
}

export default function SettingsForm({ defaults }) {
  console.log(defaults)
  const [state, formAction] = useFormState(updateSettings, initialState)
  return <form className="space-y-4" action={formAction}>
    {state?.error && <AlertError>{state?.message}</AlertError>}
    {!state?.error && state?.message.length > 0 && <AlertSuccess>{state?.message}</AlertSuccess>}
    <SubmitButton>Update Settings</SubmitButton>
  </form>
}