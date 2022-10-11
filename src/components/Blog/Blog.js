import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-4/5 m-auto mt-10 bg-blue-500 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> How does context api work</h2>
                    <p className='text-lg text-white'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.Let us create a simple application to React to understand how the React Router works. </p>

                </div>
            </div>


            <div className="card w-4/5 m-auto mt-10 bg-blue-500 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> 2.How is context api work !!! ?</h2>
                    <p className='text-lg text-white'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </p>

                </div>
            </div>



            <div className="card w-4/5 m-auto mt-10 bg-blue-500 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> 3. What is usewrap !!! ?</h2>
                    <p className='text-lg text-white'>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. </p>

                </div>
            </div>

        </div>
    );
};

export default Blog;