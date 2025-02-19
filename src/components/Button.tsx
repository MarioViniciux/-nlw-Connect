import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="bg-gray-500 text-blue flex items-center justify-between px-5 w-full h-12 font-semibold rounded-xl transition-colors duration-300 cursor-pointer hover:text-gray-500 hover:bg-blue"
      {...props}
    />
  )
}
