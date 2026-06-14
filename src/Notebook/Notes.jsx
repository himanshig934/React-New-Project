import React, { useState } from 'react'
import notebookImage from '../images/notebook1.jpg';

const Notes = () => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [task, setTask] = useState([]);

  const formsubmit = (e) => {
    e.preventDefault();

    const copytask = [...task];
    copytask.push({ title, desc });
    setTask(copytask);
    setTitle('');
    setDesc('');

  }

const closebtn = (index) => {
  const updatedTasks = task.filter((_, i) => i !== index);
  setTask(updatedTasks);
};


  return (
    <>

      <div className="min-h-screen flex items-center justify-center bg-black top-0">
        <div className="w-full bg-white rounded-3xl">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Side - Form */}
            <div className="p-8 flex flex-col justify-center bg-black text-white">
              <h3 className="text-[20px] font-bold mb-6">Create Note</h3>

              <form className="space-y-5" onSubmit={formsubmit}>
                {/* Title Field */}
                <div>
                  <label className="block text-white/80 font-medium mb-2">Title</label>

                  <input type="text" placeholder="Enter note title"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 bg-black"
                    value={title} onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>

                {/* Textarea */}
                <div>
                  <label className="block text-white/80 font-medium mb-2">
                    Description
                  </label>

                  <textarea rows="6"placeholder="Write your note here..." className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500 bg-black"
                    value={desc} onChange={(e) => {
                      setDesc(e.target.value);
                    }} >

                  </textarea>
                </div>

                {/* Button */}
                <button type="submit"
                  className="w-full bg-white py-3 rounded-xl transition text-gray-900 hover:scale-95">
                  Save Note
                </button>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="bg-black border-l-[1px] p-10 overflow-hidden">
              <h3 className="text-[20px] font-bold mb-6 text-white">Your Note</h3>
              <div className='flex flex-wrap gap-6'>

               {task.map((items, i) => {
                return (
                  <div key={i} className="h-52 w-40 rounded-3xl px-6 justify-center py-4 text-center bg-cover bg-center flex flex-col overflow-hidden relative"
                    style={{ backgroundImage: `url(${notebookImage})` }}>

                    <button type="button" className='bg-red-800 text-white rounded-full h-6 w-6 justidy-center items-center absolute top-[1rem] left-[7rem]'
                    onClick={() => closebtn(i)}>&times;</button>

                    <h3 className="text-lg font-bold text-black break-words">
                      {items.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-700 break-words overflow-y-auto">
                      {items.desc}
                    </p>
                  </div>
                );

              })}
                
              </div>
            </div>

          </div>
        </div>
      </div>

    </>

  )
}


export default Notes





