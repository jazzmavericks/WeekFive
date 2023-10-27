import './AirBB.css';
import airBB1 from '../../images/airBB1.jpg';
import airBB2 from '../../images/airBB2.jpg';
import airBB3 from '../../images/airBB3.jpg';
import airBB4 from '../../images/airBB4.jpg';

const AirBB = () => {
    return (
        <div className="airBB-parent">
            <div className="airBB-child">
                <div>
                    <img src={airBB1}></img>  
                </div>              
                <div className="BBC-h3">
                    <h3>Entire homes</h3>
                </div>
            </div>
            <div className="airBB-child">
                <div>
                    <img src={airBB2}></img>  
                </div>              
                <div className="BBC-h3">
                    <h3>Unique stays</h3>
                </div>
            </div>
            <div className="airBB-child">
                <div>
                    <img src={airBB3}></img>  
                </div>              
                <div className="BBC-h3">
                    <h3>Cabins and cottages</h3>
                </div>
            </div>
            <div className="airBB-child">
                <div>
                    <img src={airBB4}></img>  
                </div>              
                <div className="BBC-h3">
                    <h3>Pets allowed</h3>
                </div>
            </div>

        </div>
    );
};

export default AirBB;

