import { FC } from 'react'

type QRImageProps = {
    currentURL: string
    imgSrc: string
    onLoad: () => void
}

const QRImage: FC<QRImageProps> = ({ currentURL, imgSrc, onLoad }) => {
    return (
        <img
            src={imgSrc}
            alt={`qr code for ${currentURL}`}
            title={`qr code for ${currentURL}`}
            loading="lazy"
            onLoad={onLoad}
            className="w-full"
        />
    )
}

export default QRImage
