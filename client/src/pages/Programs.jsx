import { useContext } from "react";
import { UserContext } from "../../context/usercontext";

export default function Footer() {
  const { user } = useContext(UserContext);
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
      <div className="lg: col-span-2 flex justify-between mt-6">
        <div className="px-12">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] max-w-xs transition duration-300 ease-in-out hover:scale-110">
            Program Areas
          </h1>
          <ul>
            <li className="py-2 text-sm">Academic Services</li>
            <li className="py-2 text-sm">Finances</li>
            <li className="py-2 text-sm">New Student Orientation</li>
            <li className="py-2 text-sm">Office of the registrar</li>
            <li className="py-2 text-sm">Get Working</li>
            <li className="py-2 text-sm">Living in Calgary</li>

            <li className="py-2 text-sm">Learner Success Services</li>

            <li className="py-2 text-sm">Student Associaton</li>
          </ul>
        </div>
        <div className="px-12">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] max-w-xs transition duration-300 ease-in-out hover:scale-110">
            Upgrading & English Language Learning
          </h1>
          <ul>
            <li className="py-2 text-sm">Center of Entertainment Arts</li>
            <li className="py-2 text-sm">Chiu School of Business</li>
            <li className="py-2 text-sm">School Of Techonology</li>
            <li className="py-2 text-sm">School of Health and Wellness</li>
          </ul>
        </div>
        <div className="px-12">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] max-w-xs transition duration-300 ease-in-out hover:scale-110">
            Professional Development
          </h1>

          <ul>
            <li className="py-2 text-sm">Alumni</li>
            <li className="py-2 text-sm">Careers at Bow Valley College</li>
            <li className="py-2 text-sm">Faculty and Staff</li>
            <li className="py-2 text-sm">Teaching & Research</li>
          </ul>
        </div>
        <div className="px-12">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] max-w-xs transition duration-300 ease-in-out hover:scale-110">
            Applying & Admissions
          </h1>

          <ul>
            <li className="py-2 text-sm">Calgary</li>
            <li className="py-2 text-sm">Regional Campuses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
