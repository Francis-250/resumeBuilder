import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-12 my-2 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Graphic */}
        <div className="flex justify-center">
          <span className="text-9xl font-bold text-gray-400 opacity-50">
            404
          </span>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
          <p className="text-gray-600 leading-relaxed">
            Oops! It seems like you've wandered off the path. The page you're
            looking for doesn't exist or might have been moved.
          </p>
        </div>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-black/80 transition-colors duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
