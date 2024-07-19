import { FC } from 'react'

type HeaderProps = {
    children: string
}

const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <h1 className="m-auto font-sans lg:text-4xl sm:text-3xl text-2xl font-semibold">
            {children}
        </h1>
    )
}

export default Header
