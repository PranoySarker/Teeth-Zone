import React from 'react';

const Blog = () => {
    return (
        <div className='container'>

            <div className='bg-light mt-5'>
                <h5> Difference between authorization and authentication.</h5>
                <p>Authorization and Authentication are sound similar but they are different from each other.Authentication is a way to provide access permission to resources and Authentication is a verify the way of someones identity.</p>
                <p>Authorization usually works with authentication before accessing some private resource need to authenticate because the system could know who accessing the information.On the other hand authentication does not ensure what data user can access or not.it mostly identify who the person actually.</p>
            </div>
            <div className='mt-5 bg-light'>
                <h5>Why using firebase?What other options do you have to implement authentication?</h5>
                <p>Reason for using firebase, it's a google product which helps to build , manage app easily and more secure way.Firebase provides No-sql cloud database so it can manage real time data in the database.it can easily and quickly access data to and from database.
                </p>
                <p>Other options to implement authentication</p>
                <ul>
                    <li>Back4App</li>
                    <li>Parse</li>
                    <li>AWS Amplify</li>
                    <li>Backendless</li>
                    <li>Supabase</li>
                </ul>
            </div>
            <div className='mt-5 bg-light mb-2'>
                <h5>What other services does firebase provide other than authentication?</h5>
                <p>Firebase service list without authentication</p>
                <ul>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Google Analytics</li>
                    <li>Remote Config</li>
                    <li>Hosting</li>

                </ul>
            </div>
        </div>
    );
};

export default Blog;