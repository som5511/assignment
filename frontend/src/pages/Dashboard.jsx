

export const Dashboard = () => {
  return (
    <div className="flex h-screen">
  <div className="w-1/4 bg-green-900 text-white flex flex-col">
  <img src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo.svg" alt="Imarticus Learning Logo" className="w-3/4 mx-auto" />
    <div className="p-4 flex-grow">
      <div className="mb-4 font-semibold">Course</div>
      <div className="mb-4 font-semibold">Discussion</div>
    </div>
    <div className="p-4 mt-auto">
      <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
        Get help
      </button>
    </div>
  </div>


  <div className="w-3/4 bg-gray-100 p-8 overflow-y-auto">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center"> 
      <img src="https://cdn.eckovation.com/images/Introduction-to-Machine-Learning.png" alt="Introduction to Machine Learning" className="w-50 h-40 mr-4" /> 
        <h1 className="text-2xl font-bold">Introduction to Machine Learning</h1> 
      </div>
    </div>
    <div className="mb-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Batch: Default_Batch_1625571974257_Introduction to Machine Learning</h2>
        <span className="text-green-600 font-semibold">0% Completed</span>
        <br/>
        <button className="mt-4 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
          <a href = "http://localhost:5173/course1">
            Start
          </a>
        </button>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-xl font-semibold mb-2"><a href = "http://localhost:5173/course1">1. Introduction to Machine Learning</a></h3>
      <p className="text-gray-600">1 Lecture</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-xl font-semibold mb-2"><a href = "http://localhost:5173/course2">2. Concepts of Machine Learning</a></h3>
      <p className="text-gray-600">3 Lectures, 1 Quiz</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-xl font-semibold mb-2"><a href = "http://localhost:5173/course3">3. Application of Machine Learning</a></h3>
      <p className="text-gray-600">2 Lectures</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2"><a href = "http://localhost:5173/course4">4. Neural Network and Deep Learning</a></h3>
    </div>
  </div>
</div>
);
};
