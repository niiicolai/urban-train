import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Record(props) {
    const [countryId, setCountryId] = useState("");
    const [probability, setProbability] = useState(0);

    useEffect(() => {
        if (props.country != null) {
            setCountryId(props.country.country_id);
            setProbability(Math.round(props.country.probability * 100))
        }
    });

    return (
        <ListGroup.Item>
            <strong>Country: </strong> 
            <span>{countryId}</span><br />
            <strong>Probability: </strong> 
            <span>{probability}%</span>
        </ListGroup.Item>
    );
}

export default Record;
