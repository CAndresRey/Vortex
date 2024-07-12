import Button from "../../components/Button";
import Layout from "../../components/Layout";

const GetReviewed = () => {
  return (
    <Layout>
      <section className="px-6 bg-secondary text-light md:py-20 lg:py-28 w-full min-h-svh">
        <div className="w-full max-w-md bg-dark mx-auto p-6 rounded-md">
          <div>
            <h3 className="text-h3 font-bold">Upload Research Paper</h3>
            <p>Submit your research paper in PDF format.</p>
          </div>
          <div>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  className="bg-secondary  rounded-md py-2 text-light border border-accent px-4 focus:outline-none w-full"
                  placeholder="Enter the title of your paper"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description">Description</label>
                <textarea
                  placeholder="Provide a brief description of your research"
                  className="p-2 bg-secondary  py-2 text-light border border-accent resize-none h-[120px] focus:outline-none rounded-md w-full"
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="file">Research Paper</label>
                <input
                  className="block w-full text-sm rounded-md cursor-pointer border border-accent bg-secondary text-light"
                  id="file"
                  type="file"
                  accept=".pdf"
                />
              </div>
              <div className="w-full items-center flex justify-center">
                <Button type="submit" variant="secondary">
                  Upload
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetReviewed;
