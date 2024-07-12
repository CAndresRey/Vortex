import DocumentBrowser from "../../components/DocumentBrowser";
import Layout from "../../components/Layout"

const documentsData = [
  {
    filename: "Expense Report Q4 2023",
    author: "Miles Davis",
    dateModified: "2 days ago",
  },
];
const ReviewOthers = () => {
  return (
    <Layout>
      <div className="px-6 bg-secondary text-light md:py-20 lg:py-28 w-full min-h-svh">
        <DocumentBrowser documents={documentsData} />
      </div>
    </Layout>
  );
};

export default ReviewOthers;
