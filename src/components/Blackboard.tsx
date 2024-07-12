import {
  EyeIcon,
  HandThumbUpIcon,
  PencilIcon,
} from "@heroicons/react/16/solid";
import Pricing from "./Pricing";

const Blackboard = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-tertiary text-light">
      <div className="p-8 mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Blackboard
            </h2>
            <p className="font-regular mb-8">
              Our dedicated 'Blackboard' allows expert writers to review your
              submitted papers, add comments, and provide personalized feedback
              to help you improve your research and writing.
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-4 font-regular">
                <div className="bg-primary text-secondary rounded-full w-10 h-10 flex items-center justify-center">
                  <EyeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Review and Feedback
                  </h3>
                  <p className="font-regular">
                    Our expert writers will carefully review your paper and
                    provide detailed feedback to help you improve.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-secondary rounded-full w-10 h-10 flex items-center justify-center">
                  <PencilIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Personalized Guidance
                  </h3>
                  <p className="font-regular">
                    Get personalized guidance and support from our experts to
                    refine your research and writing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-secondary rounded-full w-10 h-10 flex items-center justify-center">
                  <HandThumbUpIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Confidence in Your Work
                  </h3>
                  <p className="font-regular">
                    With our expert guidance, you can have confidence in your
                    research and writing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Pricing />
        </div>
      </div>
    </section>
  );
};

export default Blackboard;
