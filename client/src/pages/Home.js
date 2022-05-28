//HOME PAGE
import '../App.css';
import { Button } from 'react-bootstrap';


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Hi Peroni!</p>
                <p>
                    <Button href="/">Add Poop</Button>
                </p>
            </header>
        </div>
    );
}

export default Home;