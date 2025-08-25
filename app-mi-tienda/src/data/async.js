export async function getProducts() {
        const response = await fetch('https://68abd0167a0bbe92cbb8534a.mockapi.io/products')
        const data = await response.json()
        return data
    }

export async function getDetailProducts(id) {
    const response = await fetch(`https://68abd0167a0bbe92cbb8534a.mockapi.io/products/${id}`)
        const data = await response.json()
        return data
    } 

