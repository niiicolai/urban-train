import { useEffect, useState } from "react";

import ListGroup from 'react-bootstrap/ListGroup';
import Record from './Record';

function Records(props) {
    const [name, setName] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setName(props.responseName);

        if (props.countries != null) {
            setCountries(props.countries);
        }
    });

    if (props.countries.length > 0) {
        return (
            <>
                <hr />
                <h6>Resultat:</h6>
                <p>Input navn: {name}</p>
                <ListGroup>
                    {countries.map((country, index) => {
                        return <Record key={index} country={country} />;
                    })}
                </ListGroup>
            </>
        );
    } else {
        return <></>;
    }
}

export default Records;
