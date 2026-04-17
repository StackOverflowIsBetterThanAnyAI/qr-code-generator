export const getSaveFile = async (url: string) => {
    try {
        const response = await fetch(url)
        const blob = await response.blob()
        const filename = 'qrcode.svg'
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = filename
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(link.href)
        return false
    } catch (error: any) {
        console.error('Error downloading the qr code:', error)
        return true
    }
}
