import React, {lazy, Suspense, useEffect} from 'react'
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersPage from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/appReducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import Page from "./components/Common/Page/Page";
import {AppDispatch, AppStateType} from "./redux/store";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = lazy(() => import('./components/ChatPage/ChatPage'));

const App: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    const initialized = useSelector((state: AppStateType) => state.app.initialized);

    if (!initialized)
        return <Preloader/>

    return (
        <BrowserRouter basename="/Social-Network">
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path='/Social-Network' element={<Page title="Profile"><ProfileContainer/></Page>}/>
                            <Route path='/' element={<Page title="Profile"><ProfileContainer/></Page>}/>
                            <Route path='/profile' element={<Page title="Profile"><ProfileContainer/></Page>}/>
                            <Route path='/profile/:userID' element={<Page title="Profile"><ProfileContainer/></Page>}/>
                            <Route path='/news' element={<Page title="News"><News/></Page>}/>
                            <Route path='/dialogs/*' element={<Page title="Dialogs"><DialogsContainer/></Page>}/>
                            <Route path='/chat' element={<Page title="Chat"><ChatPage/></Page>}/>
                            <Route path='/users' element={<Page title="Users"><UsersPage/></Page>}/>
                            <Route path='/music' element={<Page title="Music"><Music/></Page>}/>
                            <Route path='/settings' element={<Page title="Settings"><Settings/></Page>}/>
                            <Route path='/login' element={<Page title="Login"><Login/></Page>}/>
                            <Route path='*' element={<Page title="Not Found">
                                <div style={{color: "white", fontSize: 72}}>404 NOT FOUND</div>
                            </Page>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
