import Annotations from "../../components/Annotations";
import DocumentHeader from "../../components/DocumentHeader";
import Layout from "../../components/Layout";


const CheckReviews = () => {
  return (
    <Layout>
      <section className="px-6 bg-secondary text-light md:py-20 lg:py-28 w-full min-h-svh">
        <main className="flex-1 grid gap-6 p-6 md:p-10">
          <DocumentHeader
            title="Acme Product Roadmap 2023"
            description="This document outlines the product roadmap for Acme Inc. in 2023."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="bg-light rounded-lg p-4">
              <div className="h-[600px] w-full text-primary" >Document preview</div>
            </div>
            <div className="grid gap-4">
              <Annotations comments={commentsData} />
            </div>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default CheckReviews;

export type Commentary = {
  user: string;
  time: string;
  content: string;
};

const commentsData: Commentary[] = [
  {
    user: "@iamwillpursell",
    time: "5 months ago",
    content:
      "The roadmap looks great, I'm excited to see the new features in 2023.",
  },
  {
    user: "@HackSoft",
    time: "2 months ago",
    content:
      "I'd like to see more details on the timeline for the new features.",
  },
];

