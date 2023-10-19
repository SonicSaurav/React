import React from 'react';
import{Link,NavLink} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        I'm Saurav Sharma, an enthusiastic web developer with a passion for honing my coding skills.
                        </h2>
                        <p className="mt-6 text-gray-600">
                        In my quest to master web development, I've delved into various facets of the field, including React, React Router, and GitHub API integration. These explorations have allowed me to navigate the intricate world of web application development, routing, and data retrieval. My journey has been marked by both challenges and enlightening moments, as I continually work to enhance my proficiency in crafting dynamic and responsive web applications.

With a problem-solving mindset, I've immersed myself in React's routing capabilities, harnessed the power of APIs to extract and manipulate data, and deepened my knowledge of front-end development. I see these experiences as valuable stepping stones on my path to becoming a well-rounded web developer. Moreover, my aim is not only to develop my own skills but also to contribute to the larger community of developers by sharing insights and knowledge.

As Saurav Sharma, I'm dedicated to expanding my expertise, offering solutions to real-world web development challenges, and remaining committed to the ever-evolving world of technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}