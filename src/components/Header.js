// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Saksham Seth" />

            <div className='header__content'>
                <h1>Hi, I'm Saksham Seth</h1>
                <p>Smart Contract Auditor/Blockchain Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;