import { useState } from 'react';
import styles from './CardCredit.module.css'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { toast } from 'sonner';
import { useCartContext } from '../../../hooks/useCartContext';
import CartProduct from '../CartProduct/CardProduct';
import { CartProduct } from '../../../interface';

const CardCredit = () => {

  const { dispatch } = useCartContext();

  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: ''
  });
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name] : e.target.value
    })
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focused: e.target.name
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, cvc, number, expiry} = cardData;

    if (![name, cvc, number, expiry].every((field) => field && field.trim() !== "")) {
      toast.error('All fields are required');
      return;
    }

    setCardData({
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      focused: ''
    })

    dispatch({ type: 'CLEAR_CART', payload: {} as CartProduct})

  }

  

  const { name, cvc, number, expiry, focused} = cardData;


  return (
    <div className={styles.container}>
        <div>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused as any}
          />
        </div>

        <form onSubmit={handleSubmit} >
            <div className={styles.formControl}>
                <label htmlFor='number'>Card Number</label>
                <input 
                  type="text" 
                  name='number' 
                  id='number'
                  value={number}
                  onFocus={handleInputFocus}
                  onChange={handleInputChange}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor='name'>Card Name</label>
                <input 
                  type="text" 
                  name='name' 
                  id='name'
                  value={name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}

                />
            </div>
            <div className={styles.formInputGrup}>
              <div className={styles.formControl}>
                <label htmlFor="expiry">Expiry Card</label>
                <input 
                  type="text" 
                  name='expiry' 
                  id='expiry'
                  value={expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}

                />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="cvc">Card CVC</label>
                <input 
                  type="text" 
                  name='cvc' 
                  id='cvc'
                  value={cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}

                />
              </div>
            </div>
          <button type="submit" className={styles.buyButton} >Buy now</button>
        </form>
    </div>
  )
}

export default CardCredit