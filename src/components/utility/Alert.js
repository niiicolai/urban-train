import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';

function AlertMessage(props) {
    const [error, setError] = useState({});

    useEffect(() => {
        if (props.error.message != null) {
            setError(props.error);
        }
    });

    if (error.message == null) {
        return <></>;
    } else {
        return <Alert variant="danger" className="mt-3">{error.message}</Alert>;
    }    
}

export default AlertMessage;
