import Button from "./Button";

export type HeroProps = {
    title: string;
    text: string;
    buttontext: string;
}

const Hero = ({ title, text, buttontext }: HeroProps) => {
    return (
      <section className="mt-14 bg-primary py-12 md:py-20 lg:py-28 w-full">
        <div className="px-4 md:px-6 text-center text-light flex-col font-regular">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">{text}</p>
          <div className="w-20 mx-auto">
            <Button  variant="primary" >{buttontext}</Button>
          </div>
        </div>
      </section>
    );
};

export default Hero;
