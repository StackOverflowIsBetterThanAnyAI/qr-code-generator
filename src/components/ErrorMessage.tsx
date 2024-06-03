import { FC } from 'react'

type ErrorMessageProps = {
    errorAPI: boolean
    errorDownload: boolean
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errorAPI, errorDownload }) => {
    return (
        <>
            {errorAPI && (
                <div className="flex m-auto text-red-600 bg-zinc-50 mt-4 px-2 rounded-sm lg:text-xl sm:text-lg text-md">
                    Error fetching the API!
                </div>
            )}
            {errorDownload && (
                <div className="flex m-auto text-red-600 bg-zinc-50 mt-4 px-2 rounded-sm lg:text-xl sm:text-lg text-md">
                    Error downloading the qr code!
                </div>
            )}
        </>
    )
}

export default ErrorMessage
