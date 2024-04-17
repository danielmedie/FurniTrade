// // Importera React och nödvändiga komponenter från react-router-dom
// import * as React from 'react';
// import {
// 	createBrowserRouter,
// 	RouterProvider,
// 	Navigate,
// } from 'react-router-dom';

// // import SellPage from './/SellForm'
// import SellPage from '../pages/sell'
// import Product from '../pages/products'

// const router = createBrowserRouter([
// 	{
// 		// Indexruta, omdirigera till "/welcome"
// 		index: true,
// 		element: <Navigate to="/welcome" />,
// 	},
// 	{
// 		path: "/sell",
// 		element: <SellPage />,
// 	},
// 	{
// 		path: "/products",
// 		element: <Product />,
// 	},
	
// 	{
// 		// Hantera sidor som inte matchar någon av de definierade ruterna
// 		path: '*',
// 		element: <NoMatch />
// 	}
// ]);

// // Skapa komponenten Router som använder RouterProvider för att tillhandahålla routern till hela applikationen
// const Router = () => {
// 	return <RouterProvider
// 		router={router}
// 		fallbackElement={<div>Loading</div>}
// 	/>
// }

// // Exportera Router-komponenten
// export default Router;
