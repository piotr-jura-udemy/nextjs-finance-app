'use client'
import Alert from "@/components/alert"
import Input from "@/components/input"
import SubmitButton from "@/components/submit-button"
import { uploadAvatar } from "@/lib/actions"
import {Ban, Check} from 'lucide-react'

export default function Page() {
  return <>
    <h1 className="text-4xl font-semibold mb-8">
      Avatar
    </h1>
    <form className="space-y-4" action={uploadAvatar}>
      <Alert icon={<Ban className="text-red-700 dark:text-red-300 w-6 h-6" />} title={<span className="text-red-700 dark:text-red-300">Hello</span>}><span className="text-red-700 dark:text-red-300">Hello</span></Alert>
      <Alert icon={<Check className="text-green-700 dark:text-green-300 w-6 h-6" />} title={<span className="text-green-700 dark:text-green-300">Hello</span>}><span className="text-green-700 dark:text-green-300">Hello</span></Alert>
      <Input type="file" name="file" id="file" />
      <SubmitButton>Upload Avatar</SubmitButton>
    </form>
  </>
}