import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' exact element={<DashBoard />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
