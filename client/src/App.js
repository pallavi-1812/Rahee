import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './components/Form/Login/Login';
import Register from './components/Form/Register/Register';
import UserContext from './context/UserContext';
import axios from 'axios';
import Forum from './components/Forum/Forum';
import Quiz from './components/Quiz/Quiz';

const App = () => {

    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = await axios.post("http://localhost:5000/users/tokenIsValid/",
                null,
                { headers: { "x-auth-token": token } });
            console.log('tok');
            if (tokenRes.data) {
                const userRes = await axios.get("http://localhost:5000/users/", { headers: { "x-auth-token": token } });
                setUserData({
                    token,
                    user: userRes.data
                });
            }
        };
        checkLoggedIn();
    }, []);


    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/forum' exact component={Forum} />
                    <Route path='/quiz' exact component={Quiz} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </UserContext.Provider>
    );
}

export default App;