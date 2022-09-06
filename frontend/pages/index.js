import Head from 'next/head'
import Image from 'next/image'
import logo from '../imgs/04.png'
import top from '../imgs/10.png'
import mid from '../imgs/08.png'
import low from '../imgs/09.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PESTO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        
        <div className='title-container'>
          <div className='title'>
            PESTO
          </div>
        </div>

        <div className='nav-container'>
          <div className='nav-text'>
            FILM          
          </div>
          <div className='nav-text'>
            LITERATURE          
          </div>
          <div className='nav-text'>
            MUSIC          
          </div>
          <div className='nav-text'>
            FINE ARTS         
          </div>
          <div className='nav-text'>
            FRAGRANCE     
          </div>          
        </div>

        <div className='logo-container'>
          <div className='logo-img'>
            <Image src={logo} alt='pesto logo'/>
          </div>
          <div className='logo-title1'>
            PESTO
          </div>
          <div className='logo-desc'>
            your personal museum
          </div>
        </div>

        <div className='central'>
          <div className='central-top'>
            <Image src={top} alt='top logo'/>
          </div>
          <div className='central-mid'>
            <Image src={mid} alt='mid logo'/>
          </div>
          <div className='central-low'>
            <Image src={low} alt='low logo'/>
          </div>
        </div>
        
        <div className='right-nav'>
          <div className='login'>
            LOGIN
          </div>
          <div className='signup'>
            SIGNUP
          </div>
          <div className='help'>
            HELP
          </div>
          <div className='terms'>
            TERMS
          </div>
          <div className='privacy'>
            PRIVACY
          </div>
        </div>
        
      </body>

      <style jsx>{`
  
        .title-container {
          box-sizing: border-box;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px;
          gap: 10px;

          position: absolute;
          width: 423px;
          height: 144px;
          left: 0px;
          top: 0px;

          border-width: 0px 1px 1px 0px;
          border-style: solid;
          border-color: #000000;
        }

        .title {                
          width: 282px;
          height: 116px;

          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 98px;
          line-height: 116px;

          color: #000000;

          flex: none;
          order: 0;
          flex-grow: 0;
        }

        .nav-container {          
          box-sizing: border-box;
          
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 10px;
          gap: 10px;

          position: absolute;
          width: 423px;
          height: 414px;
          left: 0px;
          top: 144px;

          border-width: 0px 1px 1px 0px;
          border-style: solid;
          border-color: #000000;
        }    
        .nav-text {
          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 36px;     
          line-height: 70px; 

          color: #000000;

          flex: none;
          order: 0;
          flex-grow: 0;
        }
        .logo-container {
          box-sizing: border-box;

          position: absolute;
          width: 423px;
          height: 424px;
          left: 0px;
          top: 558px;

          border-right: 1px solid #000000;
        }  
        .logo-img {
          position: absolute;
          width: 412.45px;
          height: 270px;
          left: 5px;
          top: 0px;

          background: url(04.png);
        }
        .logo-desc {
          position: absolute;
          width: 422px;
          height: 47px;
          left: 0px;
          top: 352px;

          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          text-align: center;

          color: #000000;
        }        
        .logo-title1 {
          position: absolute;
          width: 422px;
          height: 92px;
          left: 0px;
          top: 274px;

          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 62px;
          line-height: 73px;
          text-align: center;

          color: #000000;
        }
        .central {
          position: absolute;
          width: 948px;
          height: 401px;
          left: 422px;
          top: 0px;
        }
        .central-top {
          position: absolute;
          width: 947px;
          height: 982px;
          left: 1px;
          top: 0px;

          background: url(10.png);
        }
        .central-mid {
          position: absolute;
          width: 410px;
          height: 183px;
          left: 270px;
          top: 218px;

          background: url(08.png);
        }
        .central-low {        
          width: 948px;
          height: 269px;
          left: 948px;
          top: 269px;
          
          background: url(09.png);                    
        }
        .settings {
          box-sizing: border-box;

          position: absolute;
          width: 142px;
          height: 982px;
          left: 1370px;
          top: 0px;

          border-left: 1px solid #000000;
        }
        .right-nav {
          box-sizing: border-box;

          position: absolute;
          width: 142px;
          height: 982px;
          left: 1370px;
          top: 0px;

          border-left: 1px solid #000000;
        }

        .login {
          position: absolute;
          width: 142px;
          height: 101px;
          left: 0px;
          top: 334px;

          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 29px;
          line-height: 100px;
          /* or 345% */
          text-align: center;

          color: #000000;
        }

        .signup {
          position: absolute;
          width: 142px;
          height: 101px;
          left: 0px;
          top: 434px;

          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 29px;
          line-height: 100px;
          /* or 345% */
          text-align: center;

          color: #000000;
        }

        .help{
          position: absolute;
          width: 142px;
          height: 101px;
          left: 0px;
          top: 535px;

          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 29px;
          line-height: 100px;
          /* or 345% */
          text-align: center;

          color: #000000;
        }

        .terms{
          position: absolute;
          width: 142px;
          height: 101px;
          left: 0px;
          top: 636px;

          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 29px;
          line-height: 100px;
          /* or 345% */
          text-align: center;

          color: #000000;
        }

        .privacy {
          position: absolute;
          width: 142px;
          height: 101px;
          left: 0px;
          top: 736px;

          font-family: 'Abhaya Libre';
          font-style: normal;
          font-weight: 700;
          font-size: 29px;
          line-height: 100px;
          /* or 345% */
          text-align: center;

          color: #000000;

        }

      `}</style>
    </div>
  )
}
