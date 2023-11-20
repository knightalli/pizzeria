import {Link} from 'react-router-dom';
import './App.css';
import logo from './image/logo.svg'

function Cart() {
    return (
        <div className='Cart-div'>
            <header className="App-header">
                <Link to="/app">
                    <img className='logo-main' src={logo} alt="logo" width={329} height={100}/>
                </Link>
                <input className='search'></input>
                <button className='cart'>Корзина</button>
                <button className='profile'>Личный кабинет</button>
            </header>
            <body className='cart-body'>
            <h1 className='cart-h'>Оформление заказа</h1>
                <div className='cart-name-h'>
                    <h2 className='cart-name'>Имя</h2>
                    <button className='cart-name-change'>Изменить</button>
                </div>
                <div className='cart-phone'>
                    <h2 className='cart-phone-h'>Номер телефона</h2>
                    <button className='cart-phone-change'>Изменить</button>
                </div> 
                <div className='cart-adreess'>
                    <h2 className='cart-adreess-h'>Адрес доставки</h2>
                    <button className='cart-adreess-change'>Изменить</button>
                </div>
                <div className='cart-promocode'>
                    <h2 className='cart-promocode-h'>Промокод</h2>
                    <input className='cart-promocode-input'></input>
                    <button className='cart-promocode-send'></button>
                </div>
                <div className='cart-pay'>
                    <ul className='cart-pay-list'>
                        <li className='cart-pay-list-item'>
                            <button className='cart-pay-list-item-button'></button>
                            <p className='cart-pay-list-item-p'>4279 **** **** 3685</p>
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

export default Cart;