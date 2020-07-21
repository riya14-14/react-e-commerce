import React,{Component} from 'react';
import Card from './CardUI';
import img1 from '../logo/clothes.jpg';
import img2 from '../logo/dress.jpg';
import img3 from '../logo/zara.jpg';

class Cards extends Component{
  
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Outing"/>
                    </div>
                    <div className="col-md-4">
                         <Card imgsrc={img2} title="Stylish"/>  
                    </div>
                    <div className="col-md-4">
                         <Card imgsrc={img3} title="Fun"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;