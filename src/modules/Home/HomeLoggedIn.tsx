import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

const HomeLoggedIn = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className=" px-6 bg-secondary text-light md:py-20 lg:py-28 w-full min-h-svh">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Get Expert Review and Support for Your Research Paper
            </h1>
            <p className="text-muted-foreground mb-8">
              Our team of experienced academic writers will help you refine your
              research paper, improve your writing, and ensure it meets the
              highest standards.
            </p>
            <div className="flex gap-4">
              <Button
                variant="secondary"
                onClick={() => navigate("/get-reviewed")}
              >
                Submit Paper
              </Button>
              <Link
                to="/review-others"
                className="text-primary hover:underline"
              >
                Browse Writers
              </Link>
            </div>
          </div>
          <div>
            <div className="p-6 bg-dark">
              <h2 className="text-2xl font-bold">How it Works?</h2>
              <div className="mt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center px-4 justify-center">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Paper Submitted</h3>
                    <p>
                      Your research paper has been successfully uploaded and is
                      now in the review process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center  justify-center px-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Awaiting Writer Assignment</h3>
                    <p>
                      Our team is reviewing your paper and will assign an expert
                      writer to provide feedback and editing assistance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center px-4 justify-center">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Review in Progress</h3>
                    <p>
                      Your assigned writer is currently reviewing your paper and
                      will provide detailed feedback to help you improve your
                      work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center px-4 justify-center">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Receive Graded Paper</h3>
                    <p>
                      Once the review is complete, you will receive your paper
                      with detailed feedback and a grade to help you understand
                      your strengths and areas for improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeLoggedIn;
