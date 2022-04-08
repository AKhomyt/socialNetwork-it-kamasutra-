import s from './Sidebare.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Sidebar = () => {
  const myProfileID = useSelector(state => state.auth.id)
  const authID = useSelector(state => state.auth.id)
  return <aside id={s.sidebar}>
    {authID ? <NavLink to={`profile/${myProfileID}`}>Profile</NavLink> : <></>}
    <NavLink to={'users'}>users</NavLink>
  </aside>
}
