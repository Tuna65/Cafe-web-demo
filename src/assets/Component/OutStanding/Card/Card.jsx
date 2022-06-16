import { render } from '@testing-library/react';
import Layout from '../../Layout/Layout';

import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
function Card({ img, icon, urlImg, urlVideo }) {
    const a = useRef();

    return (
        <div className="o__card" ref={a}>
            <div className="o__img">
                <img src={img} alt="" />
                <span className="o__icon">
                    <FontAwesomeIcon
                        icon={icon}
                        onClick={() => {
                            render(<Layout urlImg={urlImg} urlVideo={urlVideo} />, a.current);
                        }}
                    />
                </span>
            </div>

            <h3>Healthy & Tasty</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <span>READ MORE</span>
        </div>
    );
}

export default Card;
