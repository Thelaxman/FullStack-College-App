//import Cards from "../components/Cards";

const details = {
  department: "SD",
  programs: [
    {
      program_type: "diploma",
      duration: "2 years",
      courses: [
        {
          course_code: "DIP101",
          course_name: "Fundamentals of Software Development",
          starting_date: "2024-09-01",
          ending_date: "2026-09-01",
          fees: "$5000",
          description:
            "Introduction to basic concepts in software development.",
        },
        {
          course_code: "DIP201",
          course_name: "Advanced Programming Techniques",
          starting_date: "2025-01-15",
          ending_date: "2027-01-15",
          fees: "$6000",
          description: "In-depth study of advanced programming methodologies.",
        },
      ],
    },
    {
      program_type: "post diploma",
      duration: "1 year",
      courses: [
        {
          course_code: "PDIP301",
          course_name: "Software Project Management",
          starting_date: "2026-03-10",
          ending_date: "2027-03-10",
          fees: "$5500",
          description:
            "Practical applications of project management in software development.",
        },
      ],
    },
    {
      program_type: "certificate",
      duration_options: ["3 months", "6 months"],
      courses: [
        {
          course_code: "CERT401",
          course_name: "Web Development Basics",
          starting_date: "2023-06-01",
          ending_date: "2023-09-01",
          fees: "$2000",
          description: "Introduction to web development essentials.",
        },
        {
          course_code: "CERT402",
          course_name: "Database Management Fundamentals",
          starting_date: "2023-09-15",
          ending_date: "2023-12-15",
          fees: "$2200",
          description: "Exploration of database management principles.",
        },
      ],
    },
  ],
};

export default function Courses() {
  return (
    <div className="bg-black text white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] text-center pt-6 pb-5 transition duration-300 ease-in-out hover:scale-110">
        {" "}
        Program Details
      </h1>
      <div className="lg: col-span-2 flex justify-between mt-6 text-white">
        {details.programs.map((program) => (
          <div key={program.program_type}>
            <h2 className="text-[#00df9a]  ml-4 font-bold">
              Program Type: {program.program_type}
            </h2>
            <p className="font-medium text-gray-400 ml-4">
              Duration: {program.duration}
            </p>
            <ul>
              {program.courses.map((course) => (
                <li key={course.course_code}>
                  <h3 className="py-2 text-m text-[#00df9a] mt-4 ml-4 font-bold">
                    Course Name: {course.course_name}
                  </h3>
                  <p className="py-2 text-sm ml-4 text-white">
                    Course Code: {course.course_code}
                  </p>
                  <p className="py-2 text-sm ml-4 text-white">
                    Starting Date: {course.starting_date}
                  </p>
                  <p className="py-2 text-sm ml-4 text-white">
                    Ending Date: {course.ending_date}
                  </p>
                  <p className="py-2 text-sm ml-4 text-white">
                    Fees: {course.fees}
                  </p>
                  <p className="py-2 text-sm ml-4">
                    Description: {course.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
