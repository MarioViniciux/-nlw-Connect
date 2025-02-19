import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export default function IconButton(props: ButtonProps) {
  return (
    <button
      className="bg-gray-500 text-blue p-1.5 font-semibold rounded-md transition-colors duration-300 cursor-pointer hover:text-gray-500 hover:bg-blue"
      {...props}
    />
  )
}
