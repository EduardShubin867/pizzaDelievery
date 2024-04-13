import { MDBRow, MDBCol } from 'mdb-react-ui-kit'

import { CardsList } from '../components/CardsList/CardsList'

export function Home() {
    return (
        <MDBRow>
            <MDBCol sm="4" className="h-25">
                <CardsList />
            </MDBCol>
        </MDBRow>
    )
}
