import './form.css';
import React, { useState } from 'react';
import Card from '../../assets/images/card.svg';
import PayPal from '../../assets/images/paypal.svg';
import GooglePay from '../../assets/images/google.svg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface Country {
  code: string;
  name: string;
}

const Form: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CN', name: 'China' },
    { code: 'IN', name: 'India' },
    { code: 'JP', name: 'Japan' },
    { code: 'DE', name: 'Germany' },
    { code: 'RU', name: 'Russia' },
    { code: 'BR', name: 'Brazil' },
    { code: 'FR', name: 'France' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'IT', name: 'Italy' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectCountry = (countryName: string) => {
    setSelectedCountry(countryName);
    setIsOpen(false);
  };

  return (
    <div className='form-container'>
      {/* Email Address */}
      <div className='email-address'>
        <label>Email address</label>
        <input type='email' placeholder='derbeneev@gmail.com' />
      </div>
      {/* Pay with */}
      <div className='pay-container'>
        <h3>Pay with</h3>
        <div className='pay-method-container'>
          <div className='pay-method'>
            <img src={Card} alt='Card Logo' width={21} height={19} />
            <h3>Card</h3>
          </div>
          <div className='pay-method'>
            <img src={PayPal} alt='Card Logo' width={22} height={24} />
            <h3>PayPal</h3>
          </div>
          <div className='pay-method'>
            <img src={GooglePay} alt='Card Logo' width={17} height={19} />
            <h3>Google Pay</h3>
          </div>
        </div>
        {/* Name on card */}
        <div className='card-details'>
          <div className='card-detail'>
            <h3>Name on card</h3>
            <div className='save-card' style={{ display: 'flex' }}>
              <label className="container">
                <input type="checkbox"/>
                <div className="checkmark"></div>
              </label>
              <h3>Save card</h3>
            </div>
          </div>
          <input type='text' placeholder='John Doe' className='card-name' />
        </div>
        {/* Card information */}
        <div className='card-information'>
          <label>Card information</label>
          <input type='text' placeholder='Card information' />
        </div>
      </div>
      {/* Contact information */}
      <div className='contact-information-container'>
        <h3>Contact information</h3>
        <div className='contact-information'>
          <div className='zip-code'>
            <label>Country</label>
            {/* Dropdown */}
            <div className='country-dropdown'>
              <div className='dropdown' onClick={toggleDropdown}>
                <h3>{selectedCountry}</h3>
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isOpen && (
                <div className='dropdown-options'>
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      className='option-dropdown'
                      onClick={() => handleSelectCountry(country.name)}
                    >
                      {country.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='zip-code'>
            <label>ZIP code</label>
            <input type='text' placeholder='ZIP code' />
          </div>
        </div>
      </div>
      {/* Pay Button */}
      <div className='pay-btn'>
        <button className='pay-button'>Pay</button>
      </div>
    </div>
  );
};

export default Form;
