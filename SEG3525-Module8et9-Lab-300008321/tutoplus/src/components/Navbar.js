import Welcome from './Welcome';
import About from './About';
import ServicesTable from './ServicesTable';
import Team from './Team';
import Tutors from './Tutors';
import Appointments from './Appointment';

const Navbar = () => {
    const navbarStyle={
        background: 'rgba(26, 117, 255, 1)',
        position: 'sticky'
    };
    const pageTopStyle={
        'font-weight': 'bold',
        'font-size': '50px',
    }
    return (
        <div className= "container-lg" id="page-top">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
            <nav class="navbar navbar-expand-lg navbar-warning fixed-top bg-gradient" id="mainNav" style={navbarStyle}>
                <div className="container">
                    <h1>
                        <a class="navbar-brand js-scroll-trigger" href="#page-top" style={{'font-weight':'bold', 'font-size': '40px', 'font-family':'Verdana, sans-serif', 'color':'rgba(0, 0, 153, 1)'}}>Tuto+</a>
                    </h1>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#about-us" style={{'font-size':'17px', 'color':'rgba(0, 0, 153, 1)'}}>À propos de nous</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services" style={{'font-size':'17px', 'color':'rgba(0, 0, 153, 1)'}}>Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#team" style={{'font-size':'17px', 'color':'rgba(0, 0, 153, 1)'}}>Équipe</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#appointment" style={{'font-size':'17px', 'color':'rgba(0, 0, 153, 1)'}}>Prenez un rendez-vous</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#reviews" style={{'font-size':'17px', 'color':'rgba(0, 0, 153, 1)'}}>Revues</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Welcome />
            <About />
            <ServicesTable />
            <Team />
            <Tutors />
            <Appointments />
        </div>
    );
}
 
export default Navbar;
