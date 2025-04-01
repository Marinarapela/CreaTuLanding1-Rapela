import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router'

function Item ( {item} ) {
    return( 
        <Col md={6} lg={3}> 
            <Card className= 'mb-4'>
                <Card.Img variant="top" src= {item.thumbnail}/>
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text> {item.category}</Card.Text>
                <Button 
                as={Link}
                to= {`/product/${item.id}`}
                >
                    Más info
                </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item