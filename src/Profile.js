import {Link} from 'react-router-dom';
import './App.css';
import logo from './image/logo.svg'
import visa from './image/visa.svg'

function Profile() {
    return(
        <div className='Profile'>
            <header className="App-header">
                <Link to="/app">
                    <img className='logo-main' src={logo} alt="logo" width={329} height={100}/>
                </Link>
                <input className='search'></input>
                <button className='cart'>Корзина</button>
                <button className='profile'>Личный кабинет</button>
            </header>
            <body>
                <h1 className='profile-h'>Личный кабинет</h1>
                <div className='profile-name-h'>
                    <h2 className='profile-name'>Имя</h2>
                    <button className='profile-name-change'>Изменить</button>
                </div>
                <div className='profile-phone'>
                    <h2 className='profile-phone-h'>Номер телефона</h2>
                    <button className='profile-phone-change'>Изменить</button>
                </div> 
                <div className='profile-notification'>
                    <h2 className='profile-notification-h'>Смс-рассылки</h2>
                    <button className='profile-notification-change'>хочу получать смс-рассылки с акциями и промокодами</button>
                </div> 
                <div className='profile-credit-cards'>
                    <h2 className='profile-credit-cards'>Привязанные карты</h2>
                    <ul className='profile-credit-cards-list'>
                        <li className='profile-credit-cards-list-item'>
                            <img className='credit-card-img' src={visa} alt='visa' width={57} height={31}/>
                            <p className='credit-card-number'>4279 **** **** 3685</p>
                            <button className='credit-card-delete'>X</button>
                        </li>
                    </ul>
                </div>
                <button className='profile-exit'>Выйти</button>
                <div className='orders'>
                    <h2>История заказов</h2>
                    <ul className='orders-list'>
                        <li className='orders-list-item'>
                            <p className='order-date'>13.11.2023</p>
                            <p className='order-price'>8300р</p>
                            <button className='order-details'>Детали</button>
                        </li>    
                    </ul>    
                </div>                
            </body>
            <footer>
                <ul className='footer-categories'>
                    <li className='footer-categories-item'>Недавние заказы</li>
                    <li className='footer-categories-item'>Популярные</li>
                    <li className='footer-categories-item'>Мясные</li>
                    <li className='footer-categories-item'>Вегетарианские</li>
                    <li className='footer-categories-item'>Малокалорийные</li>
                    <li className='footer-categories-item'>Сытные</li>
                </ul>
                <ul className='data'>
                    <li className='adress'>Малышева 32</li>
                    <li className='contacts'>Контакты: +7-000-000-00-00</li>
                    <li className='telegram'>Наш чат-бот в Телеграмм</li>
                </ul>
                <p className='copyright'>©  Pizz&duck</p>
            </footer>
        </div>
        
    )
}

export default Profile;