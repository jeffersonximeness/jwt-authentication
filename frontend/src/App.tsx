import React, { useEffect, useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login  from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Home from './components/Home'
import BoardUser from './components/BoardUser'
import BoardModerator from './components/BoardModerator'
import BoardAdmin from './components/BoardAdmin'
import IUser from './types/user.type'
import EventBus from './common/EventBus'

import * as AuthService from './services/auth.service'

import { Route, Switch, Link } from 'react-router-dom'


const App: React.FC = () => {
  
  const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false)
  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      setShowModeratorBoard(user.roles.includes('ROLES_MODERATOR'))
      setShowAdminBoard(user.roles.includes('ROLES_ADMIN'))
    }

    EventBus.on('logout', logOut)

    return () => {
      EventBus.remove('logout', logOut)
    }

  }, [])
  
  const logOut = () => {
    AuthService.logout()
    setShowAdminBoard(false)
    setShowModeratorBoard(false)
    setCurrentUser(undefined)
  }

  console.log(currentUser)

  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <Link className='navbar-brand' to={'/'}>
          Application
        </Link>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to={'/home'}>
              Home
            </Link>
          </li>
          {showModeratorBoard && (
            <li className='nav-item'>
              <Link className='nav-link' to={'/mod'}>
                Moderator Board
              </Link>
            </li>
          )}
          {showAdminBoard && (
            <li className='nav-item'>
              <Link className='nav-link' to={'/admin'}>
                Admin Board
              </Link>
            </li>
          )}
          {currentUser && (
            <li className='nav-item'>
              <Link className='nav-link' to={'/user'}>
                User
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to={'/profile'}>
                {currentUser.username}
              </Link>
            </li>
            <li className='nav-item'>
              <a href="/login" className='nav-link' onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to={'/login'}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/register'}>
                SignUp
              </Link>
            </li>
          </div>
        )}
      </nav>
      <div>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile} />
          <Route path='/user' component={BoardUser} />
          <Route path='/mod' component={BoardModerator} />
          <Route path='/admin' component={BoardAdmin} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
