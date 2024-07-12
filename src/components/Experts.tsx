export type Expert = {
  name: string;
  degree: string;
  image: string;
};

export type ExpertsProps ={
  expertsData: Expert[];
}

const Experts: React.FC<ExpertsProps> = ({ expertsData }) => {
return (
  <section id="experts" className="rounded-lg p-8 shadow-lg bg-tertiary">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Experts</h2>
    <p className="font-regular mb-8">
      Our team of expert academic writers are here to guide you through your
      research journey.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {expertsData.map((expert) => (
        <div className="flex flex-col items-center" key={expert.name}>
          <picture className="w-16 h-16 ">
            <img
              className="rounded-full"
              src={expert.image}
              alt={expert.name}
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
          <div className="text-center">
            <h3 className="text-lg font-bold">{expert.name}</h3>
            <p className="font-regular text-sm">{expert.degree}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
};

export default Experts;
