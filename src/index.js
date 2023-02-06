
import React from "react";
import { createRoot } from 'react-dom/client';

// import MyImage from './assets/tree.jpeg';
import './index.css';
import Routes from "./routes";

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  return (
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
  );
};

root.render(<App />);