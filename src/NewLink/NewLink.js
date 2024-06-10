import React, {useState} from "react";
import './NewLink.css'

const NewLink = () => {

    const [currentLink, setCurrentLink] = useState('');
    return (
        <div className='about-page-container container'>
            <div>
                <form action="" method="get" className="form">
                    <div className="form">
                        <label htmlFor="link">Введите URL: </label>
                        <input type="text" required onInput={(el) => {
                            setCurrentLink(el.currentTarget.value)
                        }}/>
                    </div>
                </form>
            </div>
            <div>
                <button className='button' type="submit" onClick={() => {
                    window.location.href=currentLink

                }}>Перейти по ссылке
                </button>
            </div>
        </div>
    )
};

export default NewLink;
