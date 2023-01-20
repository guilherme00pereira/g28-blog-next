import Image from './Image';
import ProfilePicture from '../public/static/images/perfil.webp';

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-around">
          <div className="">
            <Image src={ProfilePicture} alt="" width="120" height="120" className="w-32 rounded-full" />
          </div>
          <div className="">
            <small>Hi everyone!</small>
            <h3>My name is Guilherme Pereira</h3>
            <h4>I'm a full stack developer</h4>
          </div>
        </div>
    );
};

export default Hero;