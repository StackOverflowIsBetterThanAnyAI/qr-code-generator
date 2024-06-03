import { FC } from 'react'

type URLInputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleGenerate: (e: React.KeyboardEvent<HTMLInputElement>) => void
    inputURL: string
}

const URLInput: FC<URLInputProps> = ({
    handleChange,
    handleGenerate,
    inputURL,
}) => {
    return (
        <>
            <label
                htmlFor="urlInput"
                className="pt-4 pb-2 lg:text-lg sm:text-md text-sm m-auto"
            >
                Paste your URL here:
            </label>
            <input
                type="text"
                id="urlInput"
                className="rounded-md lg:text-lg sm:text-md text-sm text-zinc-800 bg-zinc-100 px-2 py-1 my-1 caret-violet-800 w-2/3 m-auto
                focus:outline focus:outline-4 focus:outline-violet-800
                hover:cursor-text hover:bg-zinc-200"
                onChange={handleChange}
                onKeyDown={handleGenerate}
                value={inputURL}
                title={inputURL}
                autoFocus
            />
        </>
    )
}

export default URLInput
