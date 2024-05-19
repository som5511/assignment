import { CourseHeading } from "../components/CourseHeading";


export const CoursePage3 = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-green-900 text-white flex flex-col">
      <div className="p-4 text-lg font-bold"><a href = "http://localhost:5173/dashboard">IMARTICUS LEARNING</a></div>
        <div className="p-4 flex-grow overflow-y-auto">
          <div className="mb-4 font-semibold">Course</div>
          <ul>
          <li className="mb-2 cursor-pointer">
              <div className="font-semibold"><a href = "http://localhost:5173/course2">1. Introduction to Machine Learning</a></div>
              <div className="ml-4 text-sm">1 Lecture</div>
            </li>
            <li className="mb-2 cursor-pointer">
              <div className="font-semibold"><a href = "http://localhost:5173/course2">2. Concepts of Machine Learning</a></div>
              <div className="ml-4 text-sm">3 Lectures, 1 Quiz</div>
            </li>
            <li className="mb-2 cursor-pointer">
              <div className="font-semibold"><a href = "http://localhost:5173/course3">3. Application of Machine Learning</a></div>
              <div className="ml-4 text-sm">2 Lectures</div>
            </li>
            <li className="mb-2 cursor-pointer">
              <div className="font-semibold"><a href = "http://localhost:5173/course4">4. Neural Network and Deep Learning</a></div>
              <div className="ml-4 text-sm">5 Lectures</div>
            </li>
            <li className="mb-2 cursor-pointer">
              <div className="font-semibold"><a href = "http://localhost:5173/course5">5. Application of Deep Learning</a></div>
              <div className="ml-4 text-sm">1 Lecture</div>
            </li>
          </ul>
        </div>
        <div className="p-4 mt-auto">
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
            Get help
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <CourseHeading label = {"Application of Machine Learning"}></CourseHeading>
        </div>
        <div className="mb-4">
          <div className="bg-white p-4 rounded-lg shadow flex">
            <div className="w-1/3 items-center justify-center">
              <img
                src="https://cdn.eckovation.com/images/Introduction-to-Machine-Learning.png"
                alt="Introduction to Machine Learning"
                className="rounded-lg ml-20"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow mb-4">
        <button>
            <a href = "http://localhost:5173/course4">
              Next
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

