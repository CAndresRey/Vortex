const CommentForm = () => {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <textarea
          placeholder="Add your comment..."
          className="p-2 focus:outline-1 text-dark focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-full"
        ></textarea>
        <div className="flex justify-end mt-auto mb-0">
          <button className="text-sm font-semibold absolute bg-primary w-fit text-white py-2 rounded px-3">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
