import React from 'react';

const Notes = () => {
  const chapters = [
    { title: 'Chapter 1: Arrays', link: 'https://www.ecs.csun.edu/~cputnam/Comp%20110/Lecture%20Notes/LectureNotes_Ch6.pdf' },
    { title: 'Chapter 2: Linked Lists', link: 'https://bmsce.ac.in/Content/CS/DS-UNIT-3.pdf' },
    { title: 'Chapter 3: Stacks and Queues', link: 'https://cse.iitkgp.ac.in/~ppd/course/pds/Lect-28-Stack-Queue.pdf' },
    { title: 'Chapter 4: Trees', link: 'https://bmsce.ac.in/Content/CS/DS-UNIT-45.pdf' },
    { title: 'Chapter 5: Graphs', link: 'https://www.lkouniv.ac.in/site/writereaddata/siteContent/202003242118236659shruti_saxena_Data%20Structure-GRAPHS.pdf' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">DSA Notes</h1>
        <ul className="space-y-6">
          {chapters.map((chapter, index) => (
            <li key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md">
              <span className="text-xl font-medium">{chapter.title}</span>
              <a
                href={chapter.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Notes
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
