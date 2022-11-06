import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Area from './pages/Area';
import WebService from './pages/WebService';
import NoPage from './pages/NoPage';

import { getData } from './helpers/data';

import 'bootstrap/dist/css/bootstrap.css';

const Index = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		getData().then((result) => setData(result));
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout data={data} />}>
					<Route index element={<Home data={data} />} />
					<Route path="area/:id" element={<Area data={data} />} />
					<Route path="webservice" element={<WebService />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
