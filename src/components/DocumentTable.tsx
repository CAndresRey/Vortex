import { DocumentIcon } from "@heroicons/react/20/solid";

const DocumentTable = ({ documents }: { documents: any[] }) => {
  return (
    <div className="overflow-auto border rounded-lg shadow-sm">
      <table className="w-full table-fixed text-left">
        <thead>
          <tr className="bg-dark">
            <th className="w-[400px] p-2 border-b">Filename</th>
            <th className="w-1/4 p-2 border-b">Author</th>
            <th className="w-1/4 p-2 border-b">Date Modified</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc: { filename: string; author: string; dateModified: string }, index: number) => (
            <tr
              key={index}
              className={`bg-primary ${index % 2 ? "bg-dark-accent" : ""}`}
            >
              <td className="p-2 border-b font-medium">
                <div className="flex items-center gap-2">
                  <DocumentIcon className="w-4 h-4 shrink-0" />
                  {doc.filename}
                </div>
              </td>
              <td className="p-2 border-b">{doc.author}</td>
              <td className="p-2 border-b">{doc.dateModified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;
