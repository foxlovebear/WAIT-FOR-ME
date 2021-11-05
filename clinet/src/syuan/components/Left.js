
// import logo from './logo.svg';

// 引入

import '../components/css/Left.css';
import Carousell from './/Carousell';
import LftButton from './/LftButton';
import 'bootstrap/dist/css/bootstrap.min.css';


function Left() {

    return (
        <div id="indexleft">

            <section>
                <Carousell></Carousell>
            </section>
            <section className="up">
                <LftButton></LftButton>
            </section>
        </div>
    );
}



export default Left;