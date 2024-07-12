import {
  CheckIcon,
  DocumentTextIcon,
  DocumentArrowUpIcon,
} from "@heroicons/react/16/solid";
import Experts, { Expert } from "./Experts";

export type HowWorksProps = {
  expertsData: Expert[];
};
const HowWorks = ({expertsData}:HowWorksProps) => {
  return (
    <section
      id="how-it-works"
      className="py-12 md:py-20 lg:py-28 bg-secondary text-light"
    >
      <div className="mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="font-regular mb-8">
              Our platform connects university students and research newbies
              with expert academic writers who can provide guidance and support
              throughout the research process.
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
                  <DocumentArrowUpIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Submit Your Paper</h3>
                  <p className="font-regular">
                    Upload your research paper or document and let our experts
                    review it.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
                  <DocumentTextIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Get Expert Feedback
                  </h3>
                  <p className="font-regular">
                    Our expert writers will provide detailed feedback and
                    guidance to improve your research paper.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Refine and Resubmit
                  </h3>
                  <p className="font-regular">
                    Incorporate the feedback, refine your paper, and resubmit it
                    for further review and grading.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Experts expertsData={expertsData} />
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
