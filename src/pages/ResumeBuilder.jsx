import { Tempelate } from "../assets/asset";
import { useState } from "react";

const ResumeBuilder = () => {
  // Personal Information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");

  // Professional Information
  const [jobTitle, setJobTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [certifications, setCertifications] = useState("");
  const [languages, setLanguages] = useState("");

  // Education
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  // Experience
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentJob, setCurrentJob] = useState(false);
  const [responsibilities, setResponsibilities] = useState("");

  // Skills
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [softSkills, setSoftSkills] = useState("");

  // Projects
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [technologiesUsed, setTechnologiesUsed] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  // References
  const [referenceName, setReferenceName] = useState("");
  const [referencePosition, setReferencePosition] = useState("");
  const [referenceCompany, setReferenceCompany] = useState("");
  const [referenceContact, setReferenceContact] = useState("");

  const [isReview, setIsReview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-2 text-gray-900 mt-4">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        Resume Builder
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form
          onSubmit={handleSubmit}
          className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white rounded-lg shadow-md"
        >
          {/* Personal Information */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Personal Information
            </h2>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Portfolio/Website
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setPortfolio(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Professional Information
            </h2>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Summary
                  </label>
                  <textarea
                    name="summary"
                    className="w-full resize-none p-3 border border-gray-300 rounded-lg outline-none"
                    rows="4"
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Certifications
                  </label>
                  <textarea
                    name="certifications"
                    className="w-full resize-none p-3 border border-gray-300 rounded-lg outline-none"
                    rows="4"
                    onChange={(e) => setCertifications(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Languages
                  </label>
                  <input
                    type="text"
                    name="languages"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setLanguages(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Education
            </h2>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="institution"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setInstitution(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Degree
                  </label>
                  <input
                    type="text"
                    name="degree"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setDegree(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Graduation Date
                  </label>
                  <input
                    type="date"
                    name="graduationDate"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setGraduationDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Experience
            </h2>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      name="currentJob"
                      className="form-checkbox h-4 w-4 text-blue-600"
                      onChange={(e) => setCurrentJob(e.target.checked)}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I currently work here
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Responsibilities
              </label>
              <textarea
                name="responsibilities"
                className="w-full resize-none p-3 border border-gray-300 rounded-lg outline-none"
                rows="4"
                onChange={(e) => setResponsibilities(e.target.value)}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Skills</h2>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Technical Skills
                  </label>
                  <textarea
                    name="technicalSkills"
                    className="w-full resize-none p-3 border border-gray-300 rounded-lg outline-none"
                    rows="4"
                    onChange={(e) => setTechnicalSkills(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Soft Skills
                  </label>
                  <textarea
                    name="softSkills"
                    className="w-full resize-none p-3 border border-gray-300 rounded-lg outline-none"
                    rows="4"
                    onChange={(e) => setSoftSkills(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Projects
            </h2>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="projectDescription"
                    className="w-full resize-none p-3 border border-gray-300 rounded-lg outline-none"
                    rows="4"
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Technologies Used
                  </label>
                  <input
                    type="text"
                    name="technologiesUsed"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setTechnologiesUsed(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project URL
                  </label>
                  <input
                    type="url"
                    name="projectUrl"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setProjectUrl(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              References
            </h2>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reference Name
                  </label>
                  <input
                    type="text"
                    name="referenceName"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setReferenceName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reference Position
                  </label>
                  <input
                    type="text"
                    name="referencePosition"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setReferencePosition(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reference Company
                  </label>
                  <input
                    type="text"
                    name="referenceCompany"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setReferenceCompany(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reference Contact
                  </label>
                  <input
                    type="text"
                    name="referenceContact"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    onChange={(e) => setReferenceContact(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={() => setIsReview(!isReview)}
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-black/70 col-span-2"
          >
            Generate Resume
          </button>
        </form>
      </div>
      {/* Resume Preview */}
      {isReview && (
        <div className="p-2 absolute top-0 left-0 bg-black/70 w-full flex items-center justify-center">
          <div
            className="p-4 bg-white h-full rounded shadow-lg"
            style={{ width: "210mm" }}
          >
            <div className="h-full border p-4">
              {/* Header Section */}
              <div className="text-center border-b pb-4">
                <h1 className="text-2xl font-bold">{name || "Your Name"}</h1>
                <p className="text-sm">{jobTitle || "Job Title"}</p>
                <p className="text-xs">
                  {email} | {phone} | {linkedin}
                </p>
                <p className="text-xs">{address}</p>
              </div>

              {/* Summary Section */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Summary</h2>
                <p className="text-sm">
                  {summary || "A brief professional summary goes here."}
                </p>
              </div>

              {/* Education Section */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Education</h2>
                <p className="text-sm">
                  {degree} in {fieldOfStudy}
                </p>
                <p className="text-xs">
                  {institution} | {graduationDate}
                </p>
              </div>

              {/* Experience Section */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Experience</h2>
                <p className="text-sm font-bold">{companyName}</p>
                <p className="text-xs">
                  {startDate} - {currentJob ? "Present" : endDate}
                </p>
                <p className="text-sm">{responsibilities}</p>
              </div>

              {/* Skills Section */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Skills</h2>
                <p className="text-sm">{technicalSkills}</p>
                <p className="text-sm">{softSkills}</p>
              </div>

              {/* Projects Section */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Projects</h2>
                <p className="text-sm font-bold">{projectName}</p>
                <p className="text-sm">{projectDescription}</p>
                <p className="text-xs">Tech: {technologiesUsed}</p>
                <p className="text-xs">{projectUrl}</p>
              </div>

              {/* References Section */}
              <div className="mt-4 border-t pt-4">
                <h2 className="text-lg font-semibold">References</h2>
                <p className="text-sm font-bold">{referenceName}</p>
                <p className="text-xs">
                  {referencePosition} at {referenceCompany}
                </p>
                <p className="text-xs">{referenceContact}</p>
              </div>
            </div>
          </div>
          {/* close */}
          <div
            className="p-2 text-white rounded-full bg-red-600"
            onClick={() => setIsReview(!isReview)}
          >
            close
          </div>
          <br />
          <div className="p-2 text-white rounded-full bg-green-600 absolute left-10 top-10">
            Print
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
