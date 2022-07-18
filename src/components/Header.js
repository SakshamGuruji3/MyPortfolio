// Import Assets
import profile from '../assets/profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Saksham Seth" />

            <div className='header__content'>
                <h1>Hi, I'm Saksham Seth</h1>
                <p>Smart Contract Security/Auditing</p>
                <a href="mailto:sakshamseth5@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;