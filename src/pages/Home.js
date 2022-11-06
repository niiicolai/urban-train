import { useEffect, useState } from "react";
import Record from '../components/home/Record';

const Home = (props) => {
    const [records, setRecords] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        if (props.data != null && props.data.record != null) {
            setData(props.data);
            setRecords(props.data.record);
        }
    });

    return (
        <>
            <h5 className="mt-3">Programmet arbejder med de {records.length} læringsmålsområder</h5>
            <div className="mt-3">
                {records.map((record, index) => {
                    return <Record key={index} 
                                   title={record.title}
                                   label={"Område " + (index + 1)} />
                })}
                <Record title={"Test område af webservice"} label={"Webservice"} />
            </div>

            <div className="mt-3">
                <strong>Mini projektet er udarbejdet af:</strong><br />
                <span>{data.author}</span><br />
                <span>{data.author_email}</span>
            </div>
            
            <div className="mt-3">
                <strong>Afleveringsdato:</strong><br />
                <span>{data.complete_date}</span>
            </div>
        </>
    );
  };
  
  export default Home;