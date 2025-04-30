import { ChevronLeft } from 'lucide-react'


interface ArrowBtnProps {
  onClick: () => void
  disable?: boolean
  className?: string
}

export default function ArrowBtn({
  onClick,
  disable = false,
  className = '',
}: ArrowBtnProps) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`
        bg-[#4c6cb3] hover:bg-[#4c6cb3]/70
        rounded-full
        text-white
        scale-150
        p-1
        absolute
        top-1/2
        -translate-y-1/2
        duration-200
        cursor-pointer
        z-10
        ${className}
    `}
    >
      <ChevronLeft />
    </button>
  )
}
