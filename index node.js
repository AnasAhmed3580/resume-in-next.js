// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{
      margin: '40px 100px',
      backgroundColor: 'lightgrey',
      border: '15px solid rgb(10, 74, 86)',
      padding: '50px'
    }}>
      <hr />
      <h1>Anas Ahmed</h1>
      <hr />
      <figure>
        <p></p>
        <Image
          src="/my-picture.jpg" // Place your image in the "public" folder and update the path as needed.
          alt="Picture"
          width={200}
          height={150}
        />
        <p></p>
      </figure>
      <hr />
      <p><b>Address:</b> <i>House # 426, Sector 5A, Saeedabad Baldia town Karachi,</i></p>
      <p><b>Contact:</b> <a href="tel:+923483016523">+923483016523</a><br /></p>
      <p><b>Alternative Contact:</b> <a href="tel:+923127553580">+923127553580</a><br /></p>
      <p><b>Email:</b> <a href="mailto:anas.ahmed3580@gmail.com">anas.ahmed3580@gmail.com</a></p>
      <hr />
      <h2>Objective:</h2>
      <p><i>
        “My eventual career goal is to assume responsibility for the analysis and implementation of all data and actively contribute to the overall success of any business I work for. As a BSCS student, I’m dedicated to mastering the art of computer science. I excel in programming and problem-solving, with a keen interest in emerging technologies. Eager to apply my skills and passion to contribute to innovative projects and make a meaningful impact.”
      </i></p>
      <hr />
      <h2>Education</h2>
      <p>
        Bachelors of Science (Computer Science) <br />
        Batch: 2019-2023 <br />
        CGPA: 3.09/4.00 <br />
        Institute: Dawood University of Science and Technology
      </p>
      <hr />
      <p>
        Intermediate: Pre-Engineering <br />
        Batch: 2017 <br />
        Grade: B (65.18%) <br />
        Institute: D.J. Sindh Government Science College, Karachi
      </p>
      <hr />
      <p>
        Matriculation: Science <br />
        Batch: 2016 <br />
        Grade: A one (84.47%) <br />
        Institute: Crescent Group of Public School, Karachi.
      </p>
      <hr />
      <h2>Field Experience</h2>
      <p><i>• Teaching Assistant: (Computer Science and Physics) Hawks Inn Secondary School, Karachi. (September 2021 – 2023)</i></p>
      <hr />
      <h2>Projects</h2>
      <p><i>• Facial recognition Systems for student Attendance (Final Year Project) <br /> (December-2023) Dawood University of Engineering and Technology</i></p>
      <hr />
      <h2>Skills</h2>
      <p><i>
        • Programming Languages: Proficiency in languages such as Python, Java, C++, and more. <br />
        • Data Structures and Algorithms: Understanding and application of fundamental data structures and algorithms. <br />
        • Software Development: Knowledge of software development methodologies, version control, and coding practices. <br />
        • Database Management: Skills in designing and working with databases using SQL technologies. <br />
        • Web Development: Front-end and back-end development, knowledge of HTML, CSS, JavaScript, and web frameworks. <br />
        • Operating Systems: Understanding of operating system concepts and functionality. Networking: Basic understanding of networking principles and protocols.
      </i></p>
    </div>
  );
}
