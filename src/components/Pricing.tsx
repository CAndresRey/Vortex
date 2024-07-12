import Card from "./Card";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-primary rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
      <p className="text-muted-foreground mb-8">
        Our pricing is designed to be affordable and accessible for students and
        researchers.
      </p>

      <div className="flex space-x-6 p-8">
        <Card display="basic" />
        <Card display="premium" />;
      </div>
    </section>
  );
};

export default Pricing;
