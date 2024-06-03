export const getSaveFile = async (url: string) => {
    try {
        const response = await fetch(url)
        const blob = await response.blob()
        const filename = url.substring(url.lastIndexOf('/') + 1).split('?')[0]
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = filename
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        return false
    } catch (error: any) {
        console.error('Error downloading the qr code:', error)
        return true
    }
}
