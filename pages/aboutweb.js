import React from 'react'
import styles from "../styles/Home.module.css"

function aboutweb() {
    return (
        <>
            <h1>Introduction</h1>
            <p>
                In this course, you’ll learn all about becoming a web developer, from the responsibilities that a web developer performs on a day-to-day basis to the set of skills that you’d need to succeed in such a role. And, of course, you’ll also get your hands dirty with code: We’ll introduce you to the fundamental building blocks of the web and make sure you leave this course having developed your very first website!
            </p>
            <h1 className={styles.developer}>1. Who is a web developer?</h1>
            <p>A web developer is at heart an interactive artist. They’re someone driven by a deep desire to create things. A web developer’s canvas is a user’s web browser.
                <br /><br />
                Much like how a curious child takes pleasure in making toys by joining LEGO blocks—and then experiences a similar joy in taking things apart to see how they’re made, a web developer’s job is to use the basic building blocks of the web (like HTML, CSS and JavaScript) to create something complex like a webpage. Don’t sweat it! We’ll get into all of those terms soon.
                <br /><br />
                It is also the web developer’s job to diagnose problems in a website’s functionality, to understand how something works by reading the code behind it, and to make changes to fix any issues. That essentially makes web developers the physicians of the world wide web. When we talk about the world wide web, we’re mainly referring to websites and web applications. At this point, the curious aspiring developer in you might be wondering, “What’s the difference between the two?”
                <br /><br />
                Well, we’re glad you asked! A website is usually a simple page or a group of pages (the popular web comic site, <a href="https://xkcd.com/">xkcd</a> , <a href="https://docs.google.com/document/d/1B_PiTxn_iyiVmt4Cig9to0KDMu7DdC5DRCt4wkhi4KY/edit">for example</a> ). However, modern websites are much more than that. Take Google Docs, for example. It has a nice interface that, once opened, looks very much like a desktop software like Microsoft Office. Such complex websites are often termed web applications. A web developer today is expected to know how to create and work with web applications. Having said that, most people use the terms interchangeably, so don’t get too hung up on the terminology!
            </p>
            <br /><br />
            <h1>Types of web developers</h1>
            <p>There are different types of web developers who focus on different areas. These include:</p>
            <br /><br />
            <ul>Frontend developers: Frontend developers implement web page designs using HTML and CSS. They make sure the website looks pretty on different devices, and that the forms and buttons work.</ul>
            <br /><br />
            <ul>Backend developers: Backend developers create the backbone of the web application. They write code logic that handles a user’s input (for example, what should happen when you click the signup button after filling in a form).</ul>
            <br /><br />
            <ul>Full stack developers: Full stack developers do bits of both backend and frontend. Depending on the problem at hand, they can switch cape 🦸‍♀️🦸‍♂️ and move stacks. You can learn more about <a href="https://careerfoundry.com/en/blog/web-development/whats-the-difference-between-frontend-and-backend/">the differences between frontend and backend development in this guide.</a> </ul>
            <br /><br />
            <h1>2. What are the skills required to become a web developer?</h1>
            <p>What does it take to become a web developer? Essentially, just three things: HTML, CSS and JavaScript—the three pillars of the web, which we’ll be learning about over the next few days. Together, these three pillars make every website work, defining the content to be displayed (HTML), telling a browser how to display that content (CSS), and making the content interactive (JavaScript), respectively.</p>
            <br /><br />
            <p>A web developer is well versed in these three technologies. They can read other people’s code and make changes to it. They can find and debug bugs (shortcomings in existing code). A web developer might, at times, work on a new project (a new website) from scratch, or may have to work on an existing website and make it better. A typical day in the life of a web developer involves fixing bugs, developing new features (that is, enhancements) and webpages, and working with other developers to discuss ways to solve problems.</p>
            <br /><br />
            <p>Don’t be overwhelmed by all of these details. You’ll soon see that they’re all very connected, and learning one of these automatically makes you good at a few others!</p>
            <br /><br />
            <h1>What’s the job outlook like for web developers?</h1>
            <br /><br />
            <p>In short, very good. Employment of web developers is projected to grow 13 percent from 2018 to 2028, much faster than the average for all occupations. Demand will be driven by the growing popularity of mobile devices and ecommerce (Bureau of Labor Statistics). It is a great time to be a web developer as startups are flourishing, which results in above average salaries for web developers in most parts of the world.</p>
            <br /><br />
            <p>Also given the nature of the job, finding a remote job as a web developer is easier than many other domains. As a result, it opens up the entire world’s job market to everyone irrespective of where they’re physically located.</p>
            <br /><br />
            <h1>3. What we’ll be learning in the next five days</h1>
            <br />
            <p>No web development course is complete without a hands-on project. In this course, we’ll be using the three pillars of the web (HTML, CSS, and JavaScript) to build your first project, a personalized portfolio website. Once you have these under your belt, picking up other tools and languages is much easier. Pay extra attention to the basics, as a shaky foundation leads to loads of confusion later on. We’ll also give you the resources needed to put your website online so that you can share it with your friends and family.</p>
            <br /><br />
            <p>Today, we’ll start by getting a fish eye view of the web development world. We’ll talk about the tools we’ll use in this course, and we’ll also write some HTML.</p>
            <br /><br />
            <p>On the second day, we’ll write more HTML and HTML elements, and create the rough layout of our project website.</p>
            <br /><br />
            <p>On day three, we’ll write some CSS to make our website mobile responsive, which means that our website will be viewable on computers, tablets, and mobile phones.</p>
            <br /><br />
            <p>On the fourth day, we’ll dive into some advanced CSS and add cool effects to our page.</p>
            <br /><br />
            <p>On the fifth and final day, we’ll learn how to write basic JavaScript. We’ll also look at form validations and other common elements of JavaScript programming.</p>
            <br /><br />
            <p>To give you a tiny glimpse, this is roughly how your website will look like at the end of this course. Pretty cool, right?</p>
            <br /><br />
            <center>
                <img width={800} src="/a.gif" alt="" />
            </center>
            <br /><br />
            <p>Ready to get started? Let’s begin by setting up your developer environment.</p>
            <br /><br />
            <h1>Setting up your developer environment</h1>
            <br /><br />
            <p>For this course, we’ll need two tools that every web developer uses:</p>
            <br /><br />
            <ul>A text editor to write code</ul>
            <br /><br />
            <ul>A web browser to see what we’re building</ul>
            <br /><br />
            <p>While you can use any web browser or text editor, we recommend using Google Chrome and Sublime for this course.</p>
            <br /><br />
            <li>Google Chrome can be downloaded from https://www.google.com/chrome/</li>
            <br /><br />
            <li>Sublime Text can be downloaded from https://www.sublimetext.com/3.</li>
            <br /><br />
            <p>Like any good craftsperson, it’s important that you know and understand your tools. For that reason, let’s take a brief look at what we have so far.</p>
            <br /><br />
            <h1>Google Chrome</h1>
            <br /><br />
            <p>Google Chrome is a web browser. You may or may not already be using Google Chrome for browsing the web. A web browser allows us to view webpages (similar to the one you’re reading this very text on). We’ll use Google Chrome to view the results after writing and making changes to our code.</p>
            <br /><br />
            <h1>Sublime Text</h1>
            <br /><br />
            <p>Sublime Text is a popular text editor. A text editor is a very aptly named piece of software; it helps us edit text. It is similar to the default text editor that comes preinstalled on Mac or Windows, but has additional features like code highlighting to enhance our coding and debugging experience.</p>
            <br /><br />
            <p>⚠️ Watch out! Sublime Text is a paid software with an unlimited trial period. You’ll occasionally see a dialog box popping up prompting you to pay for the software license. You can pay for it if you wish, but you don’t need to just for this course.</p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/77540a4bb425b99f224fd82d70b026361421ffae/9d9e9/uploads/sublime-warning-image-popup.png" alt="" />
            <br /><br />
            <p>This course is OS independent, meaning that you can follow it on Windows, Mac OS or Linux.</p>
            <br /><br />
            <p>😎Pro tip: If you get stuck when installing Chrome or Sublime, or see any error messages, it is best to do a web search (try a Google or DuckDuckGo search) for the exact error message. It is likely that other people have had the same problem before us and a solution already exists.</p>
            <br /><br />
            <p>After downloading, install it according to the instructions you’ll find on those websites. Once you’re done installing, you’re ready to move to the next section.</p>
            <br /><br />
            <h1>4. Your turn: Creating your first webpage</h1>
            <br /><br />
            <p>We’ll now use the tools that we downloaded and installed in the previous section to do our first development work, creating our first text on a webpage. We’ll use HTML for this purpose. Let’s talk about HTML quickly before we start creating our first page.</p>
            <br /><br />
            <p>HTML stands for HyperText Markup Language. In a nutshell:</p>
            <li>Hypertext simply means text that can jump from one point to the other. If you have ever clicked a link on a page (try this: <a href="https://www.google.com/"> google.com</a>), you’ve used hypertext.</li>
            <br /><br />
            <li>Markup is simply a way to structure content so that we can distinguish between different blocks of text.</li>
            <br /><br />
            <li>Language means a, umm, language. Computer languages are similar to real world languages like English and German, just very strict in their syntax.</li>
            <br /><br />
            <p>HTML lets us structure our page and the data in it. Once we have a structure and data to work with, we can focus on style and functionality.</p>
            <br /><br />
            <p>Okay, that’s enough theory for now. Let’s get right into it by opening Sublime Text.</p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/c860d7ad85bf2d7d063206ba92053881b71d3c87/ad7c1/uploads/sublime-default.png" alt="" />
            <br /><br />
            <p>⚠️ Watch out! Students frequently get stuck at this step, so take it slow.</p>
            <br /><br />
            <p>Click File = Open Folder (or simply Open… if you are on MacOS). Notice that on MacOS, the toolbar is at the top of the screen (as shown in the screenshot below).</p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/63af09974422815a8ad360aba09eeded96812c26/ce62f/uploads/sublime-text-setup-step-one.jpg" alt="" />
            <br /><br />
            <p>Once you select File = Open / Open Folder, it will open a new window that will allow you to select an existing folder or create a new folder. Navigate to your ‘Desktop’ and create the folder there. Creating the folder on your Desktop makes it easy to find later on. </p>
            <br /><br />
            <p>Click on the little icon that allows you to create a new folder. It can look different on different operating systems.
            </p>
            <br /><br />
            <p>On MacOS, it will look like this:
            </p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/9f2cc8d46ce4d3b6250169201fc674b208ae21f7/25620/uploads/sublime-text-setup-step-two.jpg" alt="" />
            <br /><br />
            <p>While on Linux, it will look like this. If you click it, you’ll be able to create a folder by giving it a name.</p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/227ac557db0240328d19c60773fa8d46c022f769/c6943/uploads/sublime-folder-desktop.png" alt="" />
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/2b5ff1548b6ccbdf77c0d6a560d9ca27463a6e11/99b25/uploads/sublime-text-setup-step-three.jpg" alt="" />
            <br /><br />
            <p>We’ll name this folder portfolio because that’s what our project is, but feel free to choose a different name.</p>
            <br /><br />
            <p>⚠️Watch out! While it is not strictly required to follow the naming scheme that we use, we recommend you stick to our way for this course. This will make it easier to follow the course later on when we work with multiple files.</p>
            <br /><br />
            <p>If all goes well, you should see a screen like the following.</p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/c448757b379e59d26f7275580680c2b4bf75eb9c/dd572/uploads/sublime-folder-created.png" alt="" />
            <br /><br />
            <p>From here, right click on portfolio in the left sidebar, and click New File. You should see a new file labeled “untitled”. That’s okay, since we’ve not named it yet.</p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/4c0211c6cb0c1a90d7a2cbc8ea1d2e6553e18b3b/8eeb6/uploads/sublime-untitled.png" alt="" />
            <br /><br />
            <p>Let’s save the file. Click File = Save and you should get a window asking you to enter the file name. Here, enter index.html and click save.</p>
            <br /><br />
            <p>We name it specifically ‘index.html’ as per convention. By default, the entry point into a website is called the index page, hence the name.</p>
            <br /><br />
            <p>Also, make sure you save the file inside the portfolio folder. Here’s what you should see now.
            </p>
            <br /><br />
            <p>https://d33wubrfki0l68.cloudfront.net/6e7fdf9e47dfda338e52c4da6fb19e4fdd4fe858/4d10e/uploads/sublime-index-file.png</p>
            <br /><br />
            <p>Now it’s time to write our first few lines of code! For today, we’ll just get our page up and running. Tomorrow, we will dig into the meaning of each line, talk more about what HTML is, and put more structure into place.</p>
            <br /><br />
            <p>🙋 Just a heads up: The code snippets in the video might not match exactly with the code snippets in the tutorial text. That’s okay—in programming, there is usually more than one correct way of accomplishing the same result. Rest assured, you’re learning the same concepts!</p>
            <br /><br />
            <p>So let’s get started coding your first webpage. Type the following code as is into your index.html file</p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/69410405108c5678e2b3a89333b7a2625f28bba5/26658/uploads/sublime-first-webpage-code.png" alt="" />
            <br /><br />
            <p>Okay, good work! You just wrote some real HTML code. It’s time to see how it looks in a browser. This is called running the code and we’ll be doing it all the time in this course.</p>
            <br /><br />
            <p>To run your HTML, open the Google Chrome web browser that we installed previously. Once there, press Ctrl+O on Windows and Linux or Cmd+O on Mac to open the file explorer dialog box.
            </p>
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/c58b0ff6558d453c95a022eb6ff5592dd6b641c9/21db9/uploads/chrome-file-browser.png" alt="" />
            <br /><br />
            <p>Navigate to the Desktop and then portfolio folder and you should see the index.html file that we just wrote some code in. Open that file and you should see something like the following:</p>
            <br /><br />
            <img src="1.jpg" alt="" />
            <br /><br />
            <img src="https://d33wubrfki0l68.cloudfront.net/c2c7dd360f8c92690ae236b819aa2c2bcee52198/1143e/uploads/chrome-first-page-1.png" alt="" />
            <br /><br />
            <p>If you see the above page, give yourself a pat on the back. You just created your first functional webpage. Notice where the text “First Webpage” and “Hello World” appear.</p>
            <br /><br />
            <p>Let’s go back to Sublime Text and try to change the Hello World on line 7 to Hello World, check out my website! Save it and refresh the page in Chrome. You should see an updated version of the text.</p>
    <h1>buy buy🤑🤑🤑🤑🤑🤑🤑🤑😜😜</h1>
        </>
    )
}

export default aboutweb