import { useQuery } from '@tanstack/react-query'
import { MDBRow, MDBCol, MDBSpinner } from 'mdb-react-ui-kit'
import { v4 as uuidv4 } from 'uuid'

import { IProduct } from '../../types/IProduct'
import ProductCard from '../ProductCard/ProductCard'
import { useState, useEffect } from 'react'

export function CardsList() {
    const [limit, setLimit] = useState(12)

    const { data, isLoading, error } = useQuery({
        queryKey: ['pizzas', limit],
        queryFn: async () => {
            const response = await fetch(
                `http://localhost:5000/pizzas/?limit=${limit}`
            )
            return await response.json()
        },
    })

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return
        setLimit((prevLimit) => prevLimit + 6) // Увеличиваем лимит
    }

    // Добавляем обработчик события при монтировании и удаляем при размонтировании
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (isLoading) {
        return (
            <MDBSpinner role="status">
                <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
        )
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <MDBRow>
            {data.map((product: IProduct) => (
                <MDBCol className="col-4 p-0" key={uuidv4()}>
                    <ProductCard product={product} />
                </MDBCol>
            ))}
        </MDBRow>
    )
}
