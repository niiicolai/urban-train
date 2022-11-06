import { parseString } from "react-native-xml2js";
import axios from 'axios';
import xml from '../dataset/data.xml';

export function getData() {
    return new Promise((resolve, reject) => {
        axios.get(xml).then((response) => {
            parseString(response.data, (err, result) => {
                resolve(result.dataset);
            });
        });
    });
};