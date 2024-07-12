import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/16/solid';

interface CardProps {
  display: 'basic' | 'premium';
}

const displayConfig = {
  basic: {
    title: 'Basic',
    price: '$20',
    description: 'For research newbies',
    features: [
      { name: 'Review and feedback', available: true },
      { name: 'Personalized guidance', available: true },
      { name: 'Grading and scoring', available: false },
    ],
  },
  premium: {
    title: 'Premium',
    price: '$40',
    description: 'For university students',
    features: [
      { name: 'Review and feedback', available: true },
      { name: 'Personalized guidance', available: true },
      { name: 'Grading and scoring', available: true },
    ],
  },
};


const Card = ({ display }: CardProps) => {
  const { title, price, description, features } = displayConfig[display];

  return (
    <div className="card bg-secondary text-light p-6 rounded-md flex flex-col w-80 mb-8 mx-[-1rem]">
      <div className="header flex flex-col">
        <span className="title text-2xl font-bold leading-8 text-light">
          {title}
        </span>
        <span className="price text-6xl font-bold leading-none text-accent">
          {price}
        </span>
      </div>
      <p className="desc mt-3 mb-3 text-tertiary leading-relaxed">
        {description}
      </p>
      <ul className="lists mb-6 flex-1">
        {features.map((feature, index) => (
          <li
            className={`list mb-2 flex items-center ${
              feature.available ? "text-light" : "text-gray-600"
            }`}
            key={index}
          >
            {feature.available ? (
              <CheckCircleIcon className="h-6 w-6 flex-shrink-0 mr-2 text-accent" />
            ) : (
              <XCircleIcon className="h-6 w-6 flex-shrink-0 mr-2 text-gray-600" />
            )}
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="action bg-primary text-secondary py-3 px-5 rounded-md font-semibold tracking-wide"
      >
        Get Started
      </button>
    </div>
  );
};

export default Card;
