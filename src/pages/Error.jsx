import error from "../assets/error.png";

function Error() {
  return (
    <div className="flex justify-center">
      <img
        src={error}
        alt="Error"
        className="rounded-lg w-full max-w-md h-auto"
      />
    </div>
  );
}

export default Error;
