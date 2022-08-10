import React, {Component} from 'react';
import "./SomeTextAndImg.scss";
import image from '../../assets/Image/224156315c4832c739657b21da105660.jpg'

class SomeTextAndImg extends Component {
    render() {
        return (
            <div>
                <img src={image}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, odit.
                </p>
            </div>
        );
    }
}

export default SomeTextAndImg;