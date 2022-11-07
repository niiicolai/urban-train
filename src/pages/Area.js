import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Record from '../components/area/Record';

const Area = (props) => {

    let { id } = useParams();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [information, setInformation] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (props.data != null && props.data.record != null) {
            setInformation(props.data.record[id].information);
            setTitle(props.data.record[id].title);
        }
    });
    
    return (
        <>
            <h5 className="mt-3">{title}</h5>
            <h6>Spørgsmål og svar</h6>
            <ButtonGroup className="mt-3 mb-3">
                {information.map((_data, index) => {
                    return (
                        <Button key={index}
                            variant="secondary"
                            onClick={() => setSelectedIndex(index)}
                            disabled={selectedIndex == index}
                            aria-expanded={selectedIndex == index}>
                            {index + 1}
                        </Button>
                    );
                })}
            </ButtonGroup>
            
            <div>
                {information.map((data, index) => {
                    return (
                        <Record key={index}
                            open={selectedIndex == index}
                            data={data}
                        />
                    );
                })}
            </div>
        </>
    )
};

export default Area;