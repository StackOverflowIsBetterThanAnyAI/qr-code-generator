export const getFetchQRCode = async (inputURL: string) => {
    try {
        const response = await fetch(
            `https://api.qrserver.com/v1/create-qr-code/?data=${inputURL}&size=200x200&format=svg`
        )
        if (!response.ok) {
            throw new Error(`${response.status} ${response.url}`)
        }
        return response.url
    } catch (error: any) {
        console.error(
            'The following error occured while trying to fetch the API results',
            error
        )
        return ''
    }
}
