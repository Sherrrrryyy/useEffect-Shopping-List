import React from 'react'

export async function getProducts() {
    try {
        const products = await fetch
            ('https://api.escuelajs.co/api/v1/products').then((res) => res.json())
        return products;
    } catch (error) {
        throw Error("Something went wrong 404")
    }

}

