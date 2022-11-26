import './Header.css'
const Header = () => {
  return (
    <div>
    <div>
      <img id='cover'
        src="https://scontent.fcai20-1.fna.fbcdn.net/v/t1.15752-9/311513670_809733640113552_1136591171528903036_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8mAhGYW5PuoAX83dldq&_nc_ht=scontent.fcai20-1.fna&oh=03_AdTGGEaOOgKAydGNpVYizmpc3BlMKHQWaEhpu7zRrhtaSQ&oe=63A460AA"
        alt="background"
      ></img>
    </div>
    <div className='profile__container'>
      <img id='profile__pic' src='https://scontent.fcai20-1.fna.fbcdn.net/v/t1.15752-9/312235054_864125197932987_920771998456999887_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rB1_ZYSjleUAX9imwWT&_nc_ht=scontent.fcai20-1.fna&oh=03_AdSkcQtYTJF9L3jYxjZVfg2EXb6EfDdaCFcm2MveMqBV-w&oe=63A45DF6' alt='profile pic'></img>
    <div className='word__container'>
    <p >Ahmed</p>
    <p id='secondChild__p'>Mohamed</p>
    </div>
    </div>
    <div className='profile__data'>
    <div className='header__data'>
        <p>Suggested</p>
        <p>Plans</p>
        <p>For Later</p>
    </div>
    <div className='data'>
    <p>5</p>
    <p>7</p>
    <p>2</p>
    </div>
    </div>


    </div>
  );
};
export default Header;
