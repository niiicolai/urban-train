import axios from 'axios';

export function getNationality(name) {
    const url = "https://api.nationalize.io?name=" + name;

    return new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
            resolve(response.data);
        });
    });
};