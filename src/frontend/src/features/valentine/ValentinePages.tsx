import { useState } from 'react';
import { ValentineButton } from './components/ValentineButton';
import { RoundedImage } from './components/RoundedImage';
import { EvasiveNoButton } from './components/EvasiveNoButton';
import { YesCelebrationDialog } from './components/YesCelebrationDialog';

interface PageProps {
  onNext?: () => void;
}

export function Page1({ onNext }: PageProps) {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-valentine-primary mb-6">
        Will You Be My Valentine? ❤️
      </h1>
      <p className="text-lg md:text-xl text-valentine-text max-w-2xl mx-auto mb-8">
        From the moment our paths crossed, everything felt different… magical. I have something special to ask you.
      </p>
      <ValentineButton onClick={onNext}>Next ➜</ValentineButton>
    </div>
  );
}

export function Page2({ onNext }: PageProps) {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-valentine-primary mb-6">
        I Love You ❤️
      </h1>
      <p className="text-lg md:text-xl text-valentine-text max-w-2xl mx-auto mb-8">
        Every day with you feels like a blessing. You make my world softer, brighter, and infinitely happier.
      </p>
      <RoundedImage src="/assets/images/photo1.jpg" alt="Our memory together" />
      <ValentineButton onClick={onNext} className="mt-8">
        Next ➜
      </ValentineButton>
    </div>
  );
}

export function Page3({ onNext }: PageProps) {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-valentine-primary mb-6">
        You Are Special 🌹
      </h1>
      <p className="text-lg md:text-xl text-valentine-text max-w-2xl mx-auto mb-8">
        Your smile, your voice, your presence — they mean more to me than you'll ever know. You make even the simplest moments unforgettable.
      </p>
      <RoundedImage src="/assets/images/photo2.jpg" alt="Special moment" />
      <ValentineButton onClick={onNext} className="mt-8">
        Next ➜
      </ValentineButton>
    </div>
  );
}

export function Page4({ onNext }: PageProps) {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-valentine-primary mb-6">
        My Heart Chooses You 💖
      </h1>
      <p className="text-lg md:text-xl text-valentine-text max-w-2xl mx-auto mb-8">
        I want to walk with you through every season of life. You're the one my heart feels safe with.
      </p>
      <RoundedImage src="/assets/images/photo3.jpg" alt="Together forever" />
      <ValentineButton onClick={onNext} className="mt-8">
        Next ➜
      </ValentineButton>
    </div>
  );
}

export function Page5() {
  const [showCelebration, setShowCelebration] = useState(false);

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-valentine-primary mb-6">
        So… Will You Be My Valentine? ❤️🌹
      </h1>
      <RoundedImage src="/assets/images/yourphoto.jpg" alt="You" />
      <p className="text-base md:text-lg text-valentine-text max-w-2xl mx-auto my-8 leading-relaxed">
        Your eyes hold a sparkle that lights up my world, and your smile brings me more joy than words can express. 
        The gentle way you care, the warmth you share — it's made me fall completely and deeply in love with you. 
        I cannot stop loving you, my dear... I need you in my life, and I'll do everything I can to make us work. 
        Together, we can build something beautiful. I love you so, so much! ❤️
        <br /><br />
        My love 🫣 Will you be mine forever ♾️?
        <br />
        Forever yours 😘
      </p>

      <div className="flex gap-4 justify-center items-center flex-wrap mt-8 relative min-h-[60px]">
        <ValentineButton onClick={() => setShowCelebration(true)}>
          Yes 💕
        </ValentineButton>
        <EvasiveNoButton />
      </div>

      <YesCelebrationDialog open={showCelebration} onOpenChange={setShowCelebration} />
    </div>
  );
}
