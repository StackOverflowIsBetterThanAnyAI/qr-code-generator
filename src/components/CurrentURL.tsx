import { FC } from 'react'

type CurrentURLProps = {
    currentURL: string
}

const CurrentURL: FC<CurrentURLProps> = ({ currentURL }) => {
    return (
        <p className="flex m-auto pb-4 lg:text-xl sm:text-lg text-md">
            {currentURL}
        </p>
    )
}

export default CurrentURL
