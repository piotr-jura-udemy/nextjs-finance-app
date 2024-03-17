'use client'
import AlertError from "@/components/alert-error"
import AlertSuccess from "@/components/alert-success"
import Input from "@/components/input"
import Label from "@/components/label"
import Select from "@/components/select"
import SubmitButton from "@/components/submit-button"
import { updateSettings } from "@/lib/actions"
import { useFormState } from 'react-dom'

const initialState = {
  message: '',
  error: false,
}

export default function SettingsForm({defaults}) {
  const [state, action] = useFormState(updateSettings, initialState)

  return <form className="space-y-4" action={action}>
    {state?.error && <AlertError>{state?.message}</AlertError>}
    {!state?.error && state?.message.length > 0 && <AlertSuccess>{state?.message}</AlertSuccess>}
    <Label>User name</Label>
    <Input type="text" name="fullName" id="fullName" placeholder="User Name" defaultValue={defaults?.fullName} />
    <Label>Default transactions view</Label>
    <Select name="defaultView" defaultValue={defaults?.defaultView}>
      <option value="last24hours">Last 24 hours</option>
      <option value="last7days">Last 7 days</option>
      <option value="last30days">Last 30 days</option>
      <option value="last12months">Last 12 months</option>
    </Select>
    <SubmitButton>Update Settings</SubmitButton>
  </form>
}