import React from 'react';
import './Blogs.css';

const Blogs = () => {
   return (
      <div className="blogs-container">
         <div>
            <p><strong>প্রশ্ন. 1: Authorizetion & Authentication এর মধ্যে পার্থক্য কি?</strong></p>
            <p><small>উত্তর: Authorizetion হল কাউকে যাচাই করার প্রক্রিয়া, যেখানে User বা ব্যবহারকারীর কোন নির্দিষ্ট Application, ফাইল এবং ডেটাতে Access রয়েছে তা যাচাই করার প্রক্রিয়া।</small></p>
            <div className='table'>
               <div className='btn btn-outline-primary'>
                  <p>Authentication</p>
                  <p><small>1. Authentication verifies who the user is.</small></p>
                  <p><small>2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</small></p>
                  <p><small>3. Authentication is the first step of a good identity and access management process.</small></p>
               </div>
               <div className='btn btn-outline-primary'>
                  <p>Authorization</p>
                  <p><small>1. Authorization determines what resources a user can access.</small></p>
                  <p><small>2. Authorization works through settings that are implemented and maintained by the organization.</small></p>
                  <p><small>3. Authorization always takes place after authentication.
                  </small></p>
               </div>
            </div>
         </div>
         <hr className='mt-5 mb-5' />
         <div>
            <p><strong>
               প্রশ্ন. 2: Firebase কেন ব্যাবহার করা উচিত এবং Firebase ছাড়া Authentication এর জন্য অন্য কি অপশন ব্যাহার করা যায়? </strong></p>
            <p><small >উত্তর: Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.<strong> Back4app is a reliable Firebase alternative that works with an amalgamation of open-source technologies. The platform is straightforward to use and has a low learning curve. It offers features like a relational data model, scalable hosting, REST and GraphQL APIs, notifications, authentication, and storage. </strong> </small></p>
         </div>
         <hr className='mt-5 mb-5' />
         <div>
            <p><strong> প্রশ্ন. 3: Authentication ছাড়া firebase এ আর কি করা যায়? </strong></p>
            <p><small >উত্তর: Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.<strong> Firebase offers a number of services, including: Analytics, Authentication, Cloud messaging, Realtime database, Crashlytics, Performance, Test lab and many Others. </strong> </small></p>
         </div>
      </div>

   );
};

export default Blogs;