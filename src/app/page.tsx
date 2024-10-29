/* import HomePage from "../components/HomePage.tsx";
import Videos from "../components/Videos.tsx"; */
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'


export default function MainPage() {
  return (
    
    <>
      <BackgroundGradientAnimation>
      <div id ="HeroTitle"  style={{fontSize: 'clamp(5rem, 15vw, 15rem)',lineHeight: '1',}} className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold pointer-events-none text-center">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          STDC
        </p>
      </div>
    </BackgroundGradientAnimation>
    </>
  );
}
