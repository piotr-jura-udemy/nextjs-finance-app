import Button from "./button"
import { useFormStatus } from "react-dom"
import { Loader } from "lucide-react"

export default function SubmitButton(props) {
  const { pending } = useFormStatus()
  return <Button {...props} className={`${props.className} flex items-center justify-center space-x-1`} disabled={pending}>
    {pending && <Loader className="animate-spin w-4 h-4" />}
    <span>{props.children}</span>
  </Button>
}