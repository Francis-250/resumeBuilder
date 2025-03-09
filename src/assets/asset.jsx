import resumeBuilder from "./images/resume-builder-icon.svg";
import resumeTemplates from "./images/resume-templates-icon.svg";
import resumeChecker from "./images/resume-checker-icon.svg";
import fast from "./images/fast-and-easy-icon.svg";

import add from "./images/add-your-contact-info-illustration.svg";
import work from "./images/enter-your-work-exp-illustration.svg";
import education from "./images/fill-your-education-illustration.svg";

import empire from "./images/tempelates/empire.svg";
import flap from "./images/tempelates/flap.svg";
import fold from "./images/tempelates/fold.svg";
import hollywood from "./images/tempelates/hollywood.svg";
import revival from "./images/tempelates/revival.svg";
import blueprint from "./images/tempelates/blueprint.svg";

export const navLinks = [
  {
    title: `Home`,
    link: `/`,
  },
];

export const heroContent = [
  {
    title: `Create a standout resume in minutes with our easy to use builder.`,
    description: `Our resume builder helps you craft a professional resume that highlights your skills, experience, and accomplishments. Choose from a variety of templates and customize your resume to match your personal style.`,
  },
];

export const featuresContent = [
  {
    image: resumeBuilder,
    title: `Easy to Use`,
    description: `Our intuitive interface makes it simple to create a professional resume quickly.`,
  },
  {
    image: resumeTemplates,
    title: `Customizable Templates`,
    description: `Choose from a variety of templates and customize them to match your personal style.`,
  },
  {
    image: resumeChecker,
    title: `Highlight Your Strengths`,
    description: `Showcase your skills, experience, and accomplishments effectively.`,
  },
  {
    image: fast,
    title: `Download and Share`,
    description: `Easily download your resume as a PDF or Word document and share it with potential employers.`,
  },
];

export const stepFollow = [
  {
    image: add,
    title: "Choose your favorite template",
    subTitle:
      "Select the best template for your job search and input your name, phone number, professional email address and links to your networking profiles.",
  },
  {
    image: work,
    title: "Fill all the required sections",
    subTitle:
      "Enhance your resume quickly with job-specific suggestions as you add your summary, work experience, skills, and education.",
  },
  {
    image: education,
    title: "Review and download in all major formats",
    subTitle:
      "Create and save as many resume versions as you need and download them in popular file formats such as PDF and MS Word for easy sharing.",
  },
];

export const testimonialsContent = [
  {
    name: `John Doe`,
    title: `Software Engineer`,
    description: `I was able to create a professional resume in minutes with the help of this resume builder. I highly recommend it to anyone looking to create a standout resume.`,
  },
  {
    name: `Jane Doe`,
    title: `Graphic Designer`,
    description: `This resume builder is amazing! I was able to customize my resume to match my personal style and create a resume that truly stands out.`,
  },
  {
    name: `Alice Doe`,
    title: `Marketing Manager`,
    description: `I love this resume builder! It helped me highlight my skills, experience, and accomplishments in a way that truly showcases my professional background.`,
  },
  {
    name: `Bob Doe`,
    title: `Product Manager`,
    description: `This resume builder is a game-changer! I was able to create a professional resume that truly stands out and helps me land the job of my dreams.`,
  },
];

export const faqContent = {
  title: `Frequently Asked Questions`,
  questions: [
    {
      question: `How do I create a resume using this builder?`,
      answer: `Creating a resume using our builder is easy! Simply sign up for an account, choose a template that suits your style, and start customizing your resume with your skills, experience, and accomplishments.`,
    },
    {
      question: `Can I download my resume as a PDF or Word document?`,
      answer: `Yes! Once you've created your resume, you can download it as a PDF or Word document and share it with potential employers.`,
    },
    {
      question: `Do you offer customer support?`,
      answer: `Yes! We offer customer support to all of our users. If you have any questions or need assistance, please don't hesitate to contact us.`,
    },
    {
      question: `Can I cancel my subscription at any time?`,
      answer: `Yes! You can cancel your subscription at any time. Your account will remain active until the end of your billing cycle, and you will not be charged for the following month.`,
    },
  ],
};

export const Tempelate = [
  {
    id: 1,
    name: "Empire",
    thumbnail: empire,
    description:
      "This resume template places your name on the right margin without compromising your career highlights and information.",
  },
  {
    id: 2,
    name: "Revival",
    thumbnail: revival,
    description:
      "Communicate your skills and work experience with this two-column resume template.",
  },
  {
    id: 3,
    name: "Hollywood",
    thumbnail: hollywood,
    description:
      "Make a name for yourself with a one-page resume template that showcases your skills and qualifications.",
  },
  {
    id: 4,
    name: "Flapjack",
    thumbnail: flap,
    description:
      "Make a colorful statement with a unique resume template that’s perfect for less conservative jobs and companies.",
  },
  {
    id: 5,
    name: "Blueprint",
    thumbnail: blueprint,
    description:
      "This creative resume template features a fun banner with your initials, allowing you to stand out easily.",
  },
  {
    id: 6,
    name: "Fold",
    thumbnail: fold,
    description:
      "Give your existing resume a fresh look with this modern resume template that will catch the recruiter's attention.",
  },
];
