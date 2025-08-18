import POST_STATUS from "../enums/POST_STATUS.js";

export default function PostButton({status}) {

  return (
    <button disabled={status !== POST_STATUS.FINISHED}>
      Publish Post
    </button>
  );
}