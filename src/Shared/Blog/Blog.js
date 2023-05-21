import React from 'react';
import useTitle from '../../Hook/UseTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 p-20 ">
                <div className="mb-10 border-t border-b divide-y">
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Books
                                </a>
                                <p className="text-gray-600">5 Jan 2020</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-xl font-extrabold leading-none sm:text-4xl xl:text-xl">
                                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Access tokens and refresh tokens are crucial components of modern authentication systems. They are used to ensure secure and efficient authentication and authorization processes.
                                An access token is a credential that grants a client such as a web or mobile application access to specific resources or APIs on the server. It contains information about the client and permissions, usually in the form of a digitally signed token. Access tokens have a limited lifespan and typically expire after a short period. They are sent with each request to authenticate the client and determine the resources it can access.
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Blog
                                </a>
                                <p className="text-gray-600">15 Sep 2023</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-xl font-extrabold leading-none sm:text-xl xl:text-xl">
                                        Compare SQL and NoSQL databases?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two broad categories of database systems, each with its own strengths and use cases.
                                SQL databases, such as MySQL and PostgreSQL, are based on a relational model and use structured tables with predefined schemas. They excel in handling complex relationships and transactions. SQL databases are known for their ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and reliability.
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Blog
                                </a>
                                <p className="text-gray-600">28 Dec 2023</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-xl font-extrabold leading-none sm:text-xl xl:text-xl">
                                    What is express js? What is Nest JS ?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                            Express.js is a popular minimalist web framework for Node.js. It provides a straightforward and flexible way to build web applications and APIs. Express.js simplifies routing, middleware handling, and request/response handling, making it a go-to choice for many Node.js developers. It has a vast ecosystem of plugins and extensions that enhance its capabilities.
Nest.js, on the other hand, is a progressive, opinionated framework for building efficient and scalable server-side applications. It leverages TypeScript and follows a modular and hierarchical architectural pattern. Nest.js is built on top of Express.js and provides additional features like dependency injection, decorators, and a powerful CLI. It aims to provide a structured and scalable approach to building server-side applications.
                            </p>
                        </div>
                        
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Blog
                                </a>
                                <p className="text-gray-600">28 Dec 2023</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-xl font-extrabold leading-none sm:text-xl xl:text-xl">
                                    What is MongoDB aggregate and how does it work
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                            The MongoDB Aggregate framework is a powerful tool for performing advanced data aggregation operations on MongoDB collections. It allows developers to perform complex queries, transformations, and analytics on data within the database.
Using the aggregation pipeline, developers can apply multiple stages to process and transform data. Each stage performs a specific operation, such as
                            </p>
                        </div>
                       
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default Blog;