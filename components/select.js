import { forwardRef } from "react"

export default forwardRef(function Select(props, ref) {
  return <select ref={ref} {...props} className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"></select>
})