import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

function Record(props) {
    return (
        <Collapse in={props.open} timeout={0}>
            <Card>
                <Card.Header>{props.data.question}</Card.Header>
                <Card.Body>{props.data.answer}</Card.Body>
            </Card>
        </Collapse>
    );
}

export default Record;
