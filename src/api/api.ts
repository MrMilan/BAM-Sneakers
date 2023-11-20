
const API_URL = 'https://crudcrud.com/api/f762765ad73a4a48aaebc35a95194d79'

const getRequestUrl = (path: string) => `${API_URL}${path}`

const getBaseHeader = (accessToken: string | null) => ({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    ...(accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {}),
})

const get = async (path: string, accessToken: string | null) => {
    try {
        const requestUrl = getRequestUrl(path)
        const config: RequestInit = {
            method: 'GET',
            headers: getBaseHeader(accessToken),
        }
        const response = await fetch(requestUrl, config)
        const status = response.status
        const responseData = await response.json()
        return { status, responseData }
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message, e)
        } else if (typeof e === 'string') {
            console.error(e.toUpperCase())
        } else {
            console.error('Unknown error: ', e)
        }
    }
}

const post = async<TResponse>(path: string, accessToken: string | null, body = {}) => {
    try {
        const requestUrl = getRequestUrl(path)
        const config: RequestInit = {
            method: 'POST',
            headers: getBaseHeader(accessToken),
            body: JSON.stringify(body),
        }
        const response = await fetch(requestUrl, config)
        const status = response.status
        const responseData = (await response.json()) as TResponse
        return { status, responseData }
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message, e)
        } else if (typeof e === 'string') {
            console.error(e.toUpperCase())
        } else {
            console.error('Unknown error: ', e)
        }
    }
}

const postForm = async (path: string, variables: Record<string, unknown>) => {
    try {
        const requestUrl = getRequestUrl(path)
        const formData = new FormData()
        Object.entries(variables).forEach(([key, value]) => {
            formData.append(key, value as string)
        })
        const config: RequestInit = {
            method: 'POST',
            body: formData,
        }
        const response = await fetch(requestUrl, config)
        const status = response.status
        const responseData = await response.json()
        return { status, responseData }
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message, e)
        } else if (typeof e === 'string') {
            console.error(e.toUpperCase())
        } else {
            console.error('Unknown error: ', e)
        }
    }
}

const deleteApi = async (path: string, accessToken: string | null) => {
    try {
        const requestUrl = getRequestUrl(path)
        const config: RequestInit = {
            method: 'DELETE',
            headers: getBaseHeader(accessToken),
        }
        const response = await fetch(requestUrl, config)
        const status = response.status
        const responseData = await response.json()
        return { status, responseData }
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message, e)
        } else if (typeof e === 'string') {
            console.error(e.toUpperCase())
        } else {
            console.error('Unknown error: ', e)
        }
    }
}

export { get, post, postForm, deleteApi }
