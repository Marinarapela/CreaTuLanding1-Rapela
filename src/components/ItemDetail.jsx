import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


function ItemDetail ({detail}){
    return(
        <Container>
            <Card className="w-25 h-70">
            <img src={detail?.thumbnail} alt={detail?.title} />
                <Row>
                <h2>{detail?.title}</h2>
                <p>{detail?.description}</p>  
                </Row>
            </Card>
            <ItemCount/>
        </Container>
    )
}


export default ItemDetail