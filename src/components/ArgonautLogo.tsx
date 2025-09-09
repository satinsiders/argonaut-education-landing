import argonautLogo from 'figma:asset/088b4adc9f1bf2e036da0c6359abaed6013a1ab6.png';

export function ArgonautLogo() {
  return (
    <div className="flex items-center">
      <img 
        src={argonautLogo} 
        alt="Argonaut Education" 
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}