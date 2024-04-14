import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBTypography,
} from 'mdb-react-ui-kit'
import { IProduct } from '../../types/IProduct'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
    product: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <MDBCard className={`${styles.cardContainer} shadow-3-strong p-0 m-4`}>
            <MDBCardImage
                src={`http://localhost:5000/image/pizzas/${product.image}.webp`}
                position="top"
                alt={product.name}
                className={styles.cardImage}
            />
            <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardText>{product.description}</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
                <MDBRow className="justify-content-between align-items-center">
                    <MDBCol>
                        <MDBTypography tag="strong">
                            {`${product.price} $`}
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn>Add to cart</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardFooter>
        </MDBCard>
    )
}

export default ProductCard
