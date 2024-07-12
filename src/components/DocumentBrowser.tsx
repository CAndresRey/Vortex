import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import DocumentTable from "./DocumentTable";

const DocumentBrowser = ({ documents }) => {
  return (
    <div>
      <h2 className="text-h2 font-bold ">Document Browser</h2>
      <div>Search and view uploaded documents.</div>
      <div className="grid gap-4">
        <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between">
          <input
            type="text"
            placeholder="Document author, title, or keyword"
            value="expense"
            className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
          />
          <Button variant="secondary">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>
        </div>

        <DocumentTable documents={documents} />
      </div>
    </div>
  );
};

export default DocumentBrowser;
