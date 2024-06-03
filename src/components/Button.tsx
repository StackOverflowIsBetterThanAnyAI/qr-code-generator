import { forwardRef } from 'react'

type ButtonProps = {
    children: string
    disabled: boolean
    onClick?: () => void
    ref: React.RefObject<HTMLButtonElement>
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, disabled, onClick }, ref) => {
        const className = `bg-violet-800 rounded-xl px-4 py-2 lg:text-2xl sm:text-xl text-lg ${
            !disabled
                ? 'hover:cursor-pointer hover:bg-violet-700 focus:outline focus:outline-2 focus:outline-zinc-200 active:bg-violet-600 active:outline-zinc-300'
                : 'cursor-not-allowed opacity-75'
        }`
        return (
            <button
                className={className}
                onClick={onClick}
                disabled={disabled}
                aria-disabled={disabled}
                title={`${children} ${disabled ? 'disabled' : ''}`}
                ref={ref}
            >
                {children}
            </button>
        )
    }
)

export default Button
