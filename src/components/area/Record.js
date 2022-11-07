import { useEffect, useState } from "react";

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

function Record(props) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        if (props.data.question != null) {
            setQuestion(props.data.question);
        }

        if (props.data.answer != null) {
            let answer = props.data.answer[0];
            answer = answer.replace(/\n/g, "</br>");
            answer = answer.replace(/#strong#/g, "<strong>");
            answer = answer.replace(/#\/strong#/g, "</strong>");
            answer = answer.replace(/#h5#/g, "<h5>");
            answer = answer.replace(/#\/h5#/g, "</h5>");
            answer = answer.replace(/#hr#/g, "<hr />");

            setAnswer(answer);
        }
    }, [props]);

    return (
        <Collapse in={props.open} timeout={0}>
            <Card>
                <Card.Header>{question}</Card.Header>
                <Card.Body>
                    <div dangerouslySetInnerHTML={{ __html: answer }} />
                </Card.Body>
            </Card>
        </Collapse>
    );
}

export default Record;
