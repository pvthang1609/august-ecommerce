import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './cart.scss';

import { remove_cart } from './cartSlice';

export default function CartPage() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { listCart } = cart

    const sum = (listCart) => {
        if(listCart.length !== 0) {
            let sum = 0;
            listCart.forEach(item => sum = sum + (item.price*item.quantity));
            return sum;
        }
        return 0
    }

    const removeItem = (index) => {
        dispatch(remove_cart(index))
    }
    return(
        <div className="row">
            <div className="col l-12"><h2>Giỏ Hàng</h2></div>
            <div className="col l-12">
                <div className="row">
                    <div className="col l-1"><div className="heading__title heading__title--id">STT</div></div>
                    <div className="col l-1"><div className="heading__title heading__title--image">Ảnh</div></div>
                    <div className="col l-4"><div className="heading__title heading__title--name">Tên Sản Phẩm</div></div>
                    <div className="col l-1"><div className="heading__title heading__title--quantity">Số Lượng</div></div>
                    <div className="col l-2"><div className="heading__title heading__title--price">Đơn giá</div></div>
                    <div className="col l-2"><div className="heading__title heading__title--totalPrice">Tổng giá</div></div>
                </div>
            </div>
            { listCart.map((item, index) => {
                return(
                    <div className="col l-12 list" key={index}>
                        <div className="row list__item ">
                            <div className="col l-1 item__content item__content--id">{index + 1}</div>
                            <div className="col l-1 item__content item__content--image">
                                <img src={item.mainImg} alt="none"/>
                            </div>
                            <div className="col l-4 item__content item__content--name">{item.name}</div>
                            <div className="col l-1 item__content item__content--quantity">{item.quantity}</div>
                            <div className="col l-2 item__content item__content--price">{item.price}</div>
                            <div className="col l-2 item__content item__content--totalPrice">{item.quantity * item.price}</div>
                            <div className="col l-1 item__content item__content--btn"><button className="btn" onClick={() => removeItem(index)}>X</button></div>
                        </div>
                    </div>
                )
            })}
            <div className="col l-12">
                <div className="row">
                    <div className="col l-9"><div className="footer__title">Thành tiền</div></div>
                    <div className="col l-3"><div className="footer__title">{sum(listCart)}</div></div>
                </div>
            </div>
        </div>
    )
}