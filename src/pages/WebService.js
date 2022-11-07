import { useState } from 'react';
import { getNationality } from '../helpers/nationalize';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AlertMessage from '../components/utility/Alert';
import Records from '../components/webservice/Records';

const WebService = () => {
    const [name, setName] = useState("");
    const [responseName, setResponseName] = useState("");
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState({});

    const fetchNationality = () => {
        const empty = name.length === 0;
        const error = empty ? {message: "Indtast et navn!"} : {};
        setError(error);
        if (empty) return;

        getNationality(name).then((result) => {
			setCountries(result.country);
            setResponseName(result.name);
		});
    };
        
    return (
        <>
            <AlertMessage error={error} />

            <h5 className="mt-3">Her kan du teste den valgte webservice.</h5>
            <h6 className="mb-3">Bestem nationalitet ud fra navn.</h6>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                    type="text" 
                    placeholder="Indtast navn" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            
            <Button 
                variant="primary" 
                type="submit"
                onClick={fetchNationality}>
                Send
            </Button>

            <Records countries={countries} responseName={responseName} />
        </>
    );
};

export default WebService;



//
