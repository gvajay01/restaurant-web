import React, { Component } from 'react';

class Delipay extends Component {
    state = {  }
    render() { 
        return ( 
    <div className="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 order-1 order-md-2">
            <div className="text-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
                class="delivery-and-payment-section-img"
                alt=" "
              />
            </div>
          </div>
          <div className="col-12 col-md-7 order-2 order-md-1">
            <h1 className="delivery-and-payment-section-heading">
              Delivery and Payment
            </h1>
            <p className="delivery-and-payment-section-description">
              Enjoy hassle-free payment with the plenitude of payment options
              available for you. Get live tracking and locate your food on a
              live map. It's quite a sight to see your food arrive to your door.
              Plus, you get a 5% discount on every order every time you pay
              online.
            </p>
            <button className="custom-button">Order Now</button>
            <div  className="mt-3">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                className="payment-card-img"
                alt=" "
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                className="payment-card-img"
                alt=" "
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                className="payment-card-img"
                alt=" "
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
                className="payment-card-img"
                alt=" "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
         );
    }
}
 
export default Delipay;