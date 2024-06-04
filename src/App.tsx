import { ChangeEvent, useRef, useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import URLInput from './components/URLInput'
import CurrentURL from './components/CurrentURL'
import { getSaveFile } from './helper/getSaveFile'
import QRImage from './components/QRImage'
import ErrorMessage from './components/ErrorMessage'
import { getFetchQRCode } from './helper/getFetchQRCode'

const App = () => {
    const [imgSrc, setImgSrc] = useState<string>('')
    const [inputURL, setInputURL] = useState('')
    const [currentURL, setCurrentURL] = useState('')
    const [downloadEnabled, setDownloadEnabled] = useState(false)
    const [generateEnabled, setGenerateEnabled] = useState(false)
    const [imgLoaded, setImgLoaded] = useState(false)
    const [errorDownload, setErrorDownload] = useState(false)
    const [errorAPI, setErrorAPI] = useState(false)
    const generateRef = useRef<HTMLButtonElement>(null)
    const downloadRef = useRef<HTMLButtonElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputURL(e.target.value)
        setDownloadEnabled(false)
        setGenerateEnabled(true)
    }
    const handleGenerate = () => {
        generateQRCode()
    }
    const handleGenerateEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') generateQRCode()
    }

    const generateQRCode = async () => {
        try {
            const url = await getFetchQRCode(inputURL)
            if (!url.length) throw new Error()
            setImgSrc(url)
            setCurrentURL(inputURL)
            setDownloadEnabled(true)
            setImgLoaded(false)
            setGenerateEnabled(false)
            setErrorAPI(false)
            setTimeout(() => downloadRef.current?.focus(), 0)
        } catch (error) {
            setErrorAPI(true)
        }
    }

    const handleSave = async () => {
        setErrorDownload(await getSaveFile(imgSrc))
    }

    return (
        <div className="bg-zinc-800 p-8 text-zinc-200 min-w-96">
            <main className="flex flex-col max-w-md m-auto">
                <Header>QR Code Generator</Header>
                <URLInput
                    handleChange={handleChange}
                    inputURL={inputURL}
                    handleGenerate={handleGenerateEnter}
                    placeholder="https://google.com"
                />
                <div
                    className={`mt-4 mb-2 w-1/2 mx-auto aspect-square ${
                        !imgLoaded && 'bg-zinc-200 animate-pulse rounded-md'
                    }`}
                >
                    {imgSrc && (
                        <QRImage
                            currentURL={currentURL}
                            imgSrc={imgSrc}
                            onLoad={() => setImgLoaded(true)}
                        />
                    )}
                </div>
                <CurrentURL currentURL={currentURL} />
                <div className="flex gap-8 m-auto">
                    <Button
                        onClick={handleGenerate}
                        disabled={!inputURL || !generateEnabled}
                        ref={generateRef}
                    >
                        {errorAPI ? 'Retry' : 'Generate'}
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={!downloadEnabled || errorAPI}
                        ref={downloadRef}
                    >
                        Download
                    </Button>
                </div>
                <ErrorMessage
                    errorAPI={errorAPI}
                    errorDownload={errorDownload}
                />
            </main>
        </div>
    )
}

export default App
