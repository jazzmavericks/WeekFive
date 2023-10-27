import './Netflix.css';
import net1 from '../../images/net1.jpg';
import net2 from '../../images/net2.jpg';
import net3 from '../../images/net3.jpg';
import net4 from '../../images/net4.jpg';
import net5 from '../../images/net5.jpg';

const Netflix = () => {
    return (
        <div className="netflix-parent">
            <div className="netflix-child">
                <img src={net1}></img>
            </div>
            <div className="netflix-child">
                <img src={net2}></img>
            </div>
            <div className="netflix-child">
                <img src={net3}></img>
            </div>
            <div className="netflix-child">
                <img src={net4}></img>
            </div>
            <div className="netflix-child">
                <img src={net5}></img>
            </div>

        </div>
    );
};

export default Netflix;