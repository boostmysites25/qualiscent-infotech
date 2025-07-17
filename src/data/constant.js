import logo from "../assets/logo/logo.png";

// services icons (website)
import { ReactComponent as icon1 } from "../assets/svg/services/App-Development.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/Web-Development.svg";
import { ReactComponent as icon3 } from "../assets/svg/services/cloudcomputing.svg";
import { ReactComponent as icon4 } from "../assets/svg/services/AI-Development.svg";
import { ReactComponent as icon5 } from "../assets/svg/services/dataanalytics.svg";
import { ReactComponent as icon6 } from "../assets/svg/services/iot.svg";
import { ReactComponent as icon7 } from "../assets/svg/services/vrar.svg";
import { ReactComponent as icon8 } from "../assets/svg/services/blockchain.svg";
import { ReactComponent as icon9 } from "../assets/svg/services/game.svg";
import { ReactComponent as icon10 } from "../assets/svg/services/Chatbots.svg";
import { ReactComponent as icon11 } from "../assets/svg/services/aicalling.svg";
import { ReactComponent as icon12 } from "../assets/svg/services/UIUX-Design.svg";
import { ReactComponent as icon13 } from "../assets/svg/services/qa.svg";

// app development services icons
import { ReactComponent as appIcon1 } from "../assets/svg/services/iOS-App-Development.svg";
import { ReactComponent as appIcon2 } from "../assets/svg/services/Android.svg";
import { ReactComponent as appIcon3 } from "../assets/svg/services/Flutter.svg";
import { ReactComponent as appIcon4 } from "../assets/svg/services/Hybrid-App-Development.svg";
import { ReactComponent as appIcon5 } from "../assets/svg/services/healthapp.svg";
import { ReactComponent as appIcon6 } from "../assets/svg/services/e-comapp.svg";
import { ReactComponent as appIcon7 } from "../assets/svg/services/realestateapp.svg";
import { ReactComponent as appIcon8 } from "../assets/svg/services/fintechapp.svg";

// web development services icons
import { ReactComponent as webIcon1 } from "../assets/svg/services/E-Commerce-Development.svg";
import { ReactComponent as webIcon5 } from "../assets/svg/services/health.svg";
import { ReactComponent as webIcon3 } from "../assets/svg/services/Web-Development.svg";
import { ReactComponent as webIcon4 } from "../assets/svg/services/UIUX-Design.svg";
import { ReactComponent as webIcon6 } from "../assets/svg/services/realestate.svg";
import { ReactComponent as webIcon7 } from "../assets/svg/services/fintech.svg";
import { FaGlobe } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold-creekcap.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think-reality.png";
import AkashMegaMart from "../assets/web-development-portfolio/Akash-Mega-Mart.png";
import MidwamImmersive from "../assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "../assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.png";
import AkashMegaMartApp from "../assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.png";
import FeelItMobileApp from "../assets/app-development-portfolio/FeelIt-Mobile-App.png";
import KlikomicsMobileApp from "../assets/app-development-portfolio/Klikomics-Mobile-App.png";
import AutoSnapMobileApp from "../assets/app-development-portfolio/AutoSnap-Mobile-App.png";

export { logo };

export const companyDetails = {
  name: "Qualiscent Infotech",
  email: "info@qualiscentinfotech.com",
  phone: "+91-6354010408",
  // phone2: "+91-9870840408",
  address: "C-503, Harmain 33, TP85 Road, Sarkhej, Ahmedabad - 380055",
  linkedin: "https://www.linkedin.com/company/qualiscent-infotech",
  instagram: "https://www.instagram.com/qualiscent_infotech/",
  facebook: "https://www.facebook.com/profile.php?id=61574663503825",
};

export const testimonials = [
  {
    name: "Sarah M.",
    designation: "Product Manager, RetailTech",
    // image: require("../assets/images/testimonial/1.jpg"),
    review:
      "Our collaboration with Qualiscent Infotech LLP  to develop our mobile app has been nothing short of transformative. The team understood our goals and turned our vision into a fully functioning app. Whether on iOS or Android, the app runs seamlessly, and our user engagement has surged since launch. They’ve been incredibly supportive every step of the way, and the results speak for themselves.",
  },
  {
    name: "John D.",
    designation: "CEO, FinancePro Solutions",
    // // image: require("../assets/images/testimonial/2.jpg"),
    review:
      "We were looking for a custom-built web application that could handle complex workflows and scale with our business needs. Qualiscent Infotech LLP  delivered exactly what we needed. Their expertise in both front-end and back-end development resulted in a smooth, responsive, and intuitive platform. Our team can now work more efficiently, and our clients enjoy a much-improved experience.",
  },
  {
    name: "Amanda L.",
    designation: "CTO, HealthTech Innovations",
    // // image: require("../assets/images/testimonial/3.jpg"),
    review:
      "Migrating our entire infrastructure to the cloud seemed like a massive undertaking, but Qualiscent Infotech LLP  made it a seamless process. They handled every detail of the migration, optimizing our cloud environment for security and scalability. Since the move, we've experienced better performance, reduced operational costs, and more flexibility in managing our resources.",
  },
  {
    name: "David K.",
    designation: "Marketing Director, E-Commerce Inc.",
    // // image: require("../assets/images/testimonial/4.jpg"),
    review:
      "The AI solutions implemented by Qualiscent Infotech LLP  have completely transformed our approach to customer engagement. Their machine learning models now predict customer behavior, allowing us to tailor our marketing strategies and increase conversion rates. This has been a major boost to our business, and we’re already exploring new opportunities for AI integration.",
  },
  {
    name: "Emily S.",
    designation: "VP of Operations, GlobalTech Solutions",
    // // image: require("../assets/images/testimonial/5.jpg"),
    review:
      "The team at Qualiscent Infotech LLP  helped us unlock the full potential of our data. They designed a custom dashboard that provides real-time insights into our KPIs, helping us make smarter decisions faster. Thanks to their data analytics and BI expertise, we now have a deeper understanding of our market trends, and our decision-making is more data-driven than ever before.",
  },
  {
    name: "Michael B.",
    designation: "Operations Manager, SmartFactory Co.",
    // // image: require("../assets/images/testimonial/6.jpg"),
    review:
      "We needed an IoT solution that would connect all our devices and provide actionable data in real time. Qualiscent Infotech LLP  delivered exactly that. Their solution allowed us to monitor, analyze, and optimize operations across multiple facilities. It’s already helping us save time, improve efficiency, and increase safety on the ground.",
  },
  {
    name: "Lily W.",
    designation: "Head of Training & Development, TechInnovate Solutions",
    // // image: require("../assets/images/testimonial/7.jpg"),
    review:
      "The VR training programs developed by Qualiscent Infotech LLP  have been a game-changer for us. They created a highly immersive experience that allows employees to train in a safe, simulated environment. The AR features they've developed for our retail experience have also revolutionized customer interaction, resulting in higher engagement and increased sales.",
  },
  {
    name: "Richard T.",
    designation: "CEO, FinChain Technologies",
    // // image: require("../assets/images/testimonial/8.jpg"),
    review:
      "Blockchain has the potential to streamline and secure our processes, and Qualiscent Infotech LLP  helped us tap into that potential. Their team delivered a robust blockchain solution that ensures transparency and security across our transactions. The platform has been crucial in enhancing trust and reliability with our partners and clients.",
  },
  {
    name: "Lucas H.",
    designation: "Game Developer, HyperX Studios",
    // // image: require("../assets/images/testimonial/9.jpg"),
    review:
      "Collaborating with Qualiscent Infotech LLP  to develop our game was a fantastic experience. The team’s creativity and technical skills brought our vision to life in a way we couldn’t have imagined. The game has been well received by users, and we’ve seen great feedback regarding the design, interactivity, and overall gameplay experience. We're excited to partner on future projects!",
  },
  {
    name: "Jessica P.",
    designation: "Customer Experience Manager, RetailWorld",
    // // image: require("../assets/images/testimonial/10.jpg"),
    review:
      "Since integrating the chatbot developed by Qualiscent Infotech LLP  into our customer support system, we've seen a significant improvement in response times and customer satisfaction. The AI-powered bot is capable of handling a variety of inquiries, which has freed up our support team to focus on more complex issues. It's been a true asset to our business.",
  },
  {
    name: "Tom R.",
    designation: "Operations Director, SmartCall Solutions",
    // // image: require("../assets/images/testimonial/11.jpg"),
    review:
      "The AI calling solution from Qualiscent Infotech LLP  has significantly improved how we engage with potential leads and schedule appointments. The automated calling system is efficient, effective, and has saved us a lot of time. It's an excellent way to streamline our communication processes, and the feedback from our customers has been overwhelmingly positive.",
  },
  {
    name: "Sophie L.",
    designation: "Product Designer, WebTech Innovators",
    // // image: require("../assets/images/testimonial/12.jpg"),
    review:
      "The UI/UX design team at Qualiscent Infotech LLP  completely transformed our platform. They understood our user needs and designed an interface that is intuitive, clean, and visually appealing. The improvements they made have led to increased engagement and user satisfaction. The attention to detail they put into the user experience really shows.",
  },
  {
    name: "Kevin D.",
    designation: "Chief Product Officer, Software Solutions Ltd.",
    // // image: require("../assets/images/testimonial/13.jpg"),
    review:
      "When it comes to delivering flawless software, we trust Qualiscent Infotech LLP  for all our quality assurance needs. Their thorough testing process ensures our products perform at the highest level and meet user expectations. We’ve worked with them on multiple projects, and they always deliver results that make us confident in the products we launch.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webIcon1,
    desc: "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth.",
  },
  {
    id: 2,
    title: "Landing Websites",
    icon: webIcon3,
    desc: "Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 3,
    title: "Custom Websites",
    icon: webIcon4,
    desc: "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
  {
    id: 4,
    title: "Healthcare Websites",
    icon: webIcon5,
    desc: "Building secure and user-friendly healthcare websites that streamline patient interactions, enhance care delivery, and comply with medical standards.",
  },
  {
    id: 5,
    title: "Real Estate Websites",
    icon: webIcon6,
    desc: "Showcase property listings with visually appealing, easy-to-navigate real estate websites that boost leads and simplify client engagement.",
  },
  {
    id: 6,
    title: "FinTech Websites",
    icon: webIcon7,
    desc: "Developing robust, compliant, and innovative fintech websites to support digital finance solutions, ensuring trust, performance, and security.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appIcon1,
    desc: "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appIcon2,
    desc: "We design and develop tailor-made Android apps that align with your vision and business goals. Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appIcon3,
    desc: "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appIcon4,
    desc: "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
  {
    id: 5,
    title: "Healthcare App Development",
    icon: appIcon5,
    desc: "We create secure, HIPAA-compliant healthcare apps that support patient engagement, telemedicine, appointment booking, and more, all while ensuring usability and privacy.",
  },
  {
    id: 6,
    title: "E-commerce App Development",
    icon: appIcon6,
    desc: "Build scalable and engaging e-commerce apps with features like easy product browsing, secure payments, and real-time order tracking to drive your online sales.",
  },
  {
    id: 7,
    title: "Real Estate App Development",
    icon: appIcon7,
    desc: "Custom real estate apps that make it easy for users to browse listings, view properties, schedule visits, and connect with agents — all in a seamless interface.",
  },
  {
    id: 8,
    title: "FinTech App Development",
    icon: appIcon8,
    desc: "We design and develop secure and scalable fintech apps for banking, payments, budgeting, and investments — focused on performance, compliance, and user trust.",
  },
];

// portfolio links
export const portfolio = {
  appDevelopment: {
    icon: <AiFillAppstore size={30} />,
    list: [
      {
        id: 1,
        img: AkashMegaMartApp,
        title: "Akash Mega Mart Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
      },
      {
        id: 2,
        img: FeelItMobileApp,
        title: "FeelIt Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
      },
      {
        id: 3,
        img: KlikomicsMobileApp,
        title: "Klikomics Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      },
      {
        id: 4,
        img: AutoSnapMobileApp,
        title: "AutoSnap Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      },
      {
        id: 8,
        img: RentopBikeAndCarImgapp,
        title: "Rentop Bike and Car",
        link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      },
    ],
  },
  webDevelopment: {
    icon: <FaGlobe size={30} />,
    list: [
      {
        id: 1,
        img: FiveGHomesImg,
        title: "5g Homes",
        link: "https://5ghighspeedinternet.co",
      },
      {
        id: 3,
        img: ColdCreekcapImg,
        title: "Cold Creekcap",
        link: "https://www.coldcreekcap.com",
      },
      {
        id: 9,
        img: ThinkRealityImg,
        title: "Think Reality",
        link: "https://thinkrealty.ae",
      },
      {
        id: 90,
        img: AkashMegaMart,
        title: "Akash Mega Mart",
        link: "https://akashmegamart.com/",
      },
      {
        id: 91,
        img: MidwamImmersive,
        title: "Midwam – Immersive Experience Design Company",
        link: "https://www.midwam.com/en/about",
      },
    ],
  },
};

// complete service and details

export const services = [
  {
    id: 1,
    title: "Mobile App Development",
    link: "mobile-app-development",
    icon: icon1,
    desc: "Transform your business with our cutting-edge mobile applications. We develop high-performance, user-friendly apps for iOS and Android that engage customers and drive growth.",
    detailsPage: {
      banner: require("../assets/images/banners/app-development.png"),
      img1: require("../assets/images/service-details/app-dev-1.webp"),
      img2: require("../assets/images/service-details/app-dev-2.webp"),
      img3: require("../assets/images/service-details/app-dev-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Innovative Mobile Solutions for Modern Businesses
            </h2>
            <p>
              In today's mobile-first world, having a powerful app is crucial for business success. We create custom mobile applications that deliver exceptional user experiences while meeting your specific business objectives.
            </p>
            <p>
              Our team specializes in native and cross-platform development, ensuring your app performs flawlessly across all devices and platforms.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Mobile App Development Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cross-Platform Compatibility</h3>
                <p>
                  We build apps that work seamlessly on both iOS and Android platforms, maximizing your reach and reducing development costs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">User-Centric Design</h3>
                <p>
                  Our apps feature intuitive interfaces and engaging experiences that keep users coming back.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Performance Optimization</h3>
                <p>
                  We optimize every aspect of your app to ensure fast loading times and smooth operation.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Security First Approach</h3>
                <p>
                  We implement robust security measures to protect user data and prevent vulnerabilities.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Mobile Development Expertise
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Native App Development</h3>
                <p>
                  High-performance apps built specifically for iOS or Android platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Hybrid App Development</h3>
                <p>
                  Cost-effective solutions that work across multiple platforms with single codebase.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Progressive Web Apps</h3>
                <p>
                  Web applications that deliver app-like experiences without installation.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">App Maintenance & Support</h3>
                <p>
                  Ongoing updates and improvements to keep your app current and competitive.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 2,
    title: "Web Development (Full stack)",
    link: "web-development",
    icon: icon2,
    desc: "Comprehensive full-stack web development services that deliver robust, scalable, and high-performance web applications tailored to your business needs.",
    detailsPage: {
      banner: require("../assets/images/banners/web-development.webp"),
      img1: require("../assets/images/service-details/web-dev-1.webp"),
      img2: require("../assets/images/service-details/web-dev-2.webp"),
      img3: require("../assets/images/service-details/web-dev-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              End-to-End Web Solutions for Your Business
            </h2>
            <p>
              Our full-stack development services cover every aspect of web application development, from front-end interfaces to back-end systems and database integration.
            </p>
            <p>
              We create responsive, secure, and scalable web applications that drive business growth and enhance user engagement.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of Our Full-Stack Development Approach
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Seamless Integration</h3>
                <p>
                  Unified development process ensures all components work together perfectly.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Faster Development</h3>
                <p>
                  Single-team responsibility for entire project reduces communication overhead.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Efficiency</h3>
                <p>
                  Comprehensive service reduces need for multiple specialists and vendors.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Future-Proof Solutions</h3>
                <p>
                  Architecture designed for easy updates and scalability as your needs evolve.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Full-Stack Technology Stack
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Front-End Technologies</h3>
                <p>
                  React, Angular, Vue.js, HTML5, CSS3, JavaScript/TypeScript
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Back-End Technologies</h3>
                <p>
                  Node.js, Python (Django, Flask), Ruby on Rails, PHP (Laravel)
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Database Solutions</h3>
                <p>
                  PostgreSQL, MySQL, MongoDB, Firebase, AWS DynamoDB
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">DevOps & Deployment</h3>
                <p>
                  Docker, Kubernetes, AWS, Azure, CI/CD pipelines
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 3,
    title: "Cloud Computing Services",
    link: "cloud-computing-services",
    icon: icon3,
    desc: "Scalable, secure, and reliable cloud solutions that empower your business with flexibility, cost-efficiency, and enterprise-grade performance.",
    detailsPage: {
      banner: require("../assets/images/banners/cloud-computing.jpg"),
      img1: require("../assets/images/service-details/cloud-1.jpg"),
      img2: require("../assets/images/service-details/cloud-2.jpg"),
      img3: require("../assets/images/service-details/cloud-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Transform Your Business with Cloud Technology
            </h2>
            <p>
              Our cloud computing services help businesses of all sizes leverage the power of cloud technology to improve efficiency, reduce costs, and scale operations effortlessly.
            </p>
            <p>
              From migration to ongoing management, we provide comprehensive cloud solutions tailored to your specific business requirements.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Advantages of Our Cloud Services
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cost Reduction</h3>
                <p>
                  Eliminate capital expenses with pay-as-you-go cloud services and reduced IT maintenance costs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalability</h3>
                <p>
                  Easily scale resources up or down based on demand, ensuring optimal performance at all times.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Business Continuity</h3>
                <p>
                  Robust disaster recovery solutions ensure your business remains operational under any circumstances.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Security & Compliance</h3>
                <p>
                  Enterprise-grade security measures and compliance with industry regulations.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Cloud Service Offerings
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Cloud Migration</h3>
                <p>
                  Seamless transition of your applications and data to the cloud with minimal downtime.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cloud Infrastructure Setup</h3>
                <p>
                  Custom-designed cloud environments optimized for your specific workloads.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Managed Cloud Services</h3>
                <p>
                  Ongoing management, monitoring, and optimization of your cloud resources.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Hybrid & Multi-Cloud Solutions</h3>
                <p>
                  Strategic combinations of public and private cloud services for optimal performance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 4,
    title: "Artificial Intelligence Development",
    link: "artificial-intelligence-development",
    icon: icon4,
    desc: "Cutting-edge AI solutions that automate processes, enhance decision-making, and create intelligent systems to give your business a competitive edge.",
    detailsPage: {
      banner: require("../assets/images/banners/ai-development.webp"),
      img1: require("../assets/images/service-details/ai-1.jpeg"),
      img2: require("../assets/images/service-details/ai-2.webp"),
      img3: require("../assets/images/service-details/ai-3.jpeg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Harness the Power of Artificial Intelligence
            </h2>
            <p>
              Our AI development services help businesses leverage machine learning, deep learning, and cognitive computing to solve complex problems and create new opportunities.
            </p>
            <p>
              We build custom AI solutions that learn, adapt, and deliver measurable business value across industries and applications.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of AI for Your Business
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Process Automation</h3>
                <p>
                  Automate repetitive tasks and workflows to improve efficiency and reduce costs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Enhanced Decision Making</h3>
                <p>
                  Data-driven insights and predictive analytics for smarter business decisions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Personalized Experiences</h3>
                <p>
                  Deliver customized products, services, and interactions to your customers.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Competitive Advantage</h3>
                <p>
                  Stay ahead of competitors with innovative AI-powered solutions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our AI Development Expertise
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Machine Learning</h3>
                <p>
                  Custom algorithms that learn from data and improve over time.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Natural Language Processing</h3>
                <p>
                  Systems that understand, interpret, and generate human language.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Computer Vision</h3>
                <p>
                  Image and video analysis for recognition, classification, and interpretation.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Predictive Analytics</h3>
                <p>
                  Forecast future trends and behaviors based on historical data patterns.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 5,
    title: "Data Analytics and Business Intelligence",
    link: "data-analytics-and-business-intelligence",
    icon: icon5,
    desc: "Turn your data into actionable insights with our advanced analytics and BI solutions that drive informed decision-making and business growth.",
    detailsPage: {
      banner: require("../assets/images/banners/data-analytics.jpg"),
      img1: require("../assets/images/service-details/data-1.jpg"),
      img2: require("../assets/images/service-details/data-2.jpg"),
      img3: require("../assets/images/service-details/data-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Data-Driven Decision Making for Business Success
            </h2>
            <p>
              Our data analytics and business intelligence services transform raw data into meaningful insights that drive strategic decisions and operational improvements.
            </p>
            <p>
              We help businesses uncover hidden patterns, market trends, and customer insights that lead to competitive advantages and growth opportunities.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Value of Data Analytics for Your Business
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Improved Decision Making</h3>
                <p>
                  Base strategic decisions on data rather than intuition or guesswork.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Operational Efficiency</h3>
                <p>
                  Identify inefficiencies and optimize business processes.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Customer Insights</h3>
                <p>
                  Understand customer behavior and preferences to enhance experiences.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Risk Management</h3>
                <p>
                  Identify and mitigate potential risks before they impact your business.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Data Analytics Services
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Business Intelligence</h3>
                <p>
                  Dashboards and reporting tools for real-time business monitoring.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Advanced Analytics</h3>
                <p>
                  Predictive modeling, machine learning, and statistical analysis.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data Visualization</h3>
                <p>
                  Interactive visual representations of complex data sets.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Big Data Solutions</h3>
                <p>
                  Processing and analysis of large, complex data sets.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 6,
    title: "Internet of Things (IoT) Development",
    link: "internet-of-things",
    icon: icon6,
    desc: "Innovative IoT solutions that connect devices, collect data, and enable smart automation to transform your business operations and customer experiences.",
    detailsPage: {
      banner: require("../assets/images/banners/iot-dev.jpg"),
      img1: require("../assets/images/service-details/iot-1.jpg"),
      img2: require("../assets/images/service-details/iot-2.jpg"),
      img3: require("../assets/images/service-details/iot-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Connecting the Physical and Digital Worlds
            </h2>
            <p>
              Our IoT development services help businesses leverage connected devices and smart technology to improve operations, gather valuable data, and create innovative products and services.
            </p>
            <p>
              From industrial IoT to consumer smart devices, we build secure, scalable solutions that deliver real business value.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of IoT for Your Business
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Operational Efficiency</h3>
                <p>
                  Automate processes and monitor equipment in real-time to reduce downtime.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data-Driven Insights</h3>
                <p>
                  Collect and analyze data from connected devices to optimize performance.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">New Revenue Streams</h3>
                <p>
                  Create innovative products and services enabled by IoT technology.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Enhanced Customer Experience</h3>
                <p>
                  Deliver personalized, connected experiences to your customers.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our IoT Development Capabilities
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">IoT Hardware Development</h3>
                <p>
                  Custom sensor and device design for your specific use cases.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">IoT Platform Development</h3>
                <p>
                  Centralized platforms to manage and analyze IoT device networks.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Edge Computing</h3>
                <p>
                  Process data closer to the source for faster response times.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">IoT Security</h3>
                <p>
                  Comprehensive security solutions for connected devices and networks.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 7,
    title: "Virtual Reality (VR) and Augmented Reality (AR) Development",
    link: "vr-ar-development",
    icon: icon7,
    desc: "Immersive VR and AR experiences that engage customers, enhance training, and create innovative solutions for retail, education, healthcare, and more.",
    detailsPage: {
      banner: require("../assets/images/banners/vr-ar.jpg"),
      img1: require("../assets/images/service-details/vr-1.jpg"),
      img2: require("../assets/images/service-details/vr-2.jpg"),
      img3: require("../assets/images/service-details/vr-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Transforming Experiences with Immersive Technology
            </h2>
            <p>
              Our VR and AR development services create engaging, interactive experiences that bridge the gap between digital and physical worlds.
            </p>
            <p>
              From product visualization to virtual training simulations, we develop custom solutions that captivate audiences and deliver measurable business results.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Business Applications of VR/AR
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Retail & E-Commerce</h3>
                <p>
                  Virtual try-ons, product visualization, and interactive shopping experiences.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Training & Education</h3>
                <p>
                  Immersive simulations for hands-on learning in safe environments.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Real Estate</h3>
                <p>
                  Virtual property tours and architectural visualizations.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Healthcare</h3>
                <p>
                  Medical training simulations and patient education tools.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our VR/AR Development Services
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Virtual Reality Development</h3>
                <p>
                  Fully immersive 3D environments for various applications.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Augmented Reality Development</h3>
                <p>
                  Digital overlays on the physical world through mobile or wearable devices.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Mixed Reality Solutions</h3>
                <p>
                  Blended experiences that combine real and virtual worlds.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">360° Video Production</h3>
                <p>
                  Immersive video content for marketing and training purposes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 8,
    title: "Blockchain Development",
    link: "blockchain-development",
    icon: icon8,
    desc: "Secure, transparent, and decentralized blockchain solutions that revolutionize industries through smart contracts, cryptocurrency, and distributed ledger technology.",
    detailsPage: {
      banner: require("../assets/images/banners/blockchain.jpg"),
      img1: require("../assets/images/service-details/blockchain-1.jpg"),
      img2: require("../assets/images/service-details/blockchain-2.jpg"),
      img3: require("../assets/images/service-details/blockchain-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Building Trust Through Blockchain Technology
            </h2>
            <p>
              Our blockchain development services help businesses leverage decentralized technology to create secure, transparent, and efficient systems.
            </p>
            <p>
              From cryptocurrency to supply chain management, we develop custom blockchain solutions that address real business challenges and create new opportunities.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Blockchain for Your Business?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Enhanced Security</h3>
                <p>
                  Cryptographic protection and decentralized storage make data tamper-proof.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Transparency</h3>
                <p>
                  All participants have access to the same immutable records.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Process Efficiency</h3>
                <p>
                  Smart contracts automate processes and reduce intermediaries.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">New Business Models</h3>
                <p>
                  Enable decentralized applications and token-based ecosystems.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Blockchain Solutions
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Smart Contract Development</h3>
                <p>
                  Self-executing contracts with terms written into code.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cryptocurrency & Token Development</h3>
                <p>
                  Creation of digital currencies and utility tokens.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">DApp Development</h3>
                <p>
                  Decentralized applications that run on blockchain networks.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Private Blockchain Solutions</h3>
                <p>
                  Permissioned networks for enterprise use cases.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 9,
    title: "Game Development",
    link: "game-development",
    icon: icon9,
    desc: "Engaging, high-quality game development services that create immersive experiences across mobile, console, PC, and VR platforms.",
    detailsPage: {
      banner: require("../assets/images/banners/game-dev.jpg"),
      img1: require("../assets/images/service-details/game-1.jpg"),
      img2: require("../assets/images/service-details/game-2.jpg"),
      img3: require("../assets/images/service-details/game-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Creating Captivating Gaming Experiences
            </h2>
            <p>
              Our game development services bring creative visions to life with stunning visuals, engaging gameplay, and immersive storytelling.
            </p>
            <p>
              From casual mobile games to complex multiplayer experiences, we combine technical expertise with artistic creativity to deliver games that players love.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Game Development Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cross-Platform Development</h3>
                <p>
                  Games that work seamlessly across multiple devices and platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Engaging Gameplay</h3>
                <p>
                  Carefully designed mechanics that keep players coming back.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Stunning Visuals</h3>
                <p>
                  High-quality graphics and animations that bring your game world to life.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Monetization Strategies</h3>
                <p>
                  Effective revenue models tailored to your target audience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Game Development Expertise
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Mobile Game Development</h3>
                <p>
                  Engaging games for iOS and Android platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">PC & Console Games</h3>
                <p>
                  High-performance games for desktop and gaming consoles.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">VR/AR Games</h3>
                <p>
                  Immersive gaming experiences using virtual and augmented reality.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Game Porting</h3>
                <p>
                  Adapt existing games for new platforms and devices.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 10,
    title: "Chatbot Development",
    link: "chatbot-development",
    icon: icon10,
    desc: "Intelligent chatbot solutions that enhance customer service, automate interactions, and provide 24/7 support across multiple platforms and languages.",
    detailsPage: {
      banner: require("../assets/images/banners/chatbot.jpg"),
      img1: require("../assets/images/service-details/chatbot-1.jpg"),
      img2: require("../assets/images/service-details/chatbot-2.jpg"),
      img3: require("../assets/images/service-details/chatbot-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Revolutionizing Customer Interactions with AI Chatbots
            </h2>
            <p>
              Our chatbot development services create intelligent virtual assistants that understand natural language, learn from interactions, and provide human-like responses.
            </p>
            <p>
              From customer support to lead generation, our chatbots deliver 24/7 service while reducing operational costs and improving customer satisfaction.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of Chatbots for Your Business
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">24/7 Availability</h3>
                <p>
                  Instant responses to customer inquiries at any time of day.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Reduction</h3>
                <p>
                  Handle routine inquiries without human intervention.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Improved Customer Experience</h3>
                <p>
                  Quick, accurate responses to common questions and issues.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalability</h3>
                <p>
                  Handle thousands of conversations simultaneously without additional costs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Chatbot Solutions
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">AI-Powered Chatbots</h3>
                <p>
                  Natural language processing and machine learning for human-like conversations.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Rule-Based Chatbots</h3>
                <p>
                  Simple, efficient bots for structured interactions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Omnichannel Bots</h3>
                <p>
                  Consistent experiences across websites, apps, and social media platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Voice Assistants</h3>
                <p>
                  Voice-enabled bots for hands-free interactions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 11,
    title: "AI Calling Agency",
    link: "ai-calling-agency",
    icon: icon11,
    desc: "Intelligent AI-powered calling solutions that automate customer outreach, lead generation, and support services with natural, human-like interactions.",
    detailsPage: {
      banner: require("../assets/images/banners/ai-calling.jpg"),
      img1: require("../assets/images/service-details/ai-call-1.jpg"),
      img2: require("../assets/images/service-details/ai-call-2.jpg"),
      img3: require("../assets/images/service-details/ai-call-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Transforming Customer Communication with AI Calling
            </h2>
            <p>
              Our AI calling solutions revolutionize outbound and inbound communications with intelligent voice agents that sound natural and handle complex conversations.
            </p>
            <p>
              From sales calls to customer support, our AI calling technology delivers personalized, scalable, and cost-effective communication solutions.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of AI Calling for Your Business
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cost Reduction</h3>
                <p>
                  Reduce operational costs by automating routine outbound calls and customer interactions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Enhanced Customer Experience</h3>
                <p>
                  Deliver personalized, human-like interactions that improve customer satisfaction and engagement.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Improved Efficiency</h3>
                <p>
                  Streamline communications with automated lead generation, appointment scheduling, and support services.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalability</h3>
                <p>
                  Handle a high volume of calls simultaneously without additional human resources.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our AI Calling Solutions
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Automated Calling</h3>
                <p>
                  Implement AI systems to automate outbound calls for marketing, sales, and support.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Intelligent Call Routing</h3>
                <p>
                  Use AI to direct calls to the appropriate departments or agents, ensuring efficient service and reducing wait times.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Voice Recognition</h3>
                <p>
                  Leverage advanced voice recognition technology to create seamless, personalized interactions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 12,
    title: "UI/UX Design",
    link: "ui-ux-design",
    icon: icon12,
    desc: "Beautiful, intuitive user interfaces and experiences that engage users, enhance usability, and drive conversions for your digital products.",
    detailsPage: {
      banner: require("../assets/images/banners/ui-ux.jpg"),
      img1: require("../assets/images/service-details/uiux-1.jpg"),
      img2: require("../assets/images/service-details/uiux-2.jpg"),
      img3: require("../assets/images/service-details/uiux-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Crafting Exceptional Digital Experiences
            </h2>
            <p>
              Our UI/UX design services focus on creating visually stunning and highly functional interfaces that delight users and achieve business objectives.
            </p>
            <p>
              Through user research, thoughtful design, and rigorous testing, we create digital products that are both beautiful and easy to use.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of Professional UI/UX Design
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Improved User Engagement</h3>
                <p>
                  Intuitive interfaces keep users engaged and coming back.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Higher Conversion Rates</h3>
                <p>
                  Thoughtful user flows guide visitors toward desired actions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Reduced Development Costs</h3>
                <p>
                  Clear design specifications prevent costly rework during development.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Competitive Advantage</h3>
                <p>
                  Superior user experience sets your product apart in the market.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our UI/UX Design Process
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">User Research</h3>
                <p>
                  Understand your audience through interviews, surveys, and analytics.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Information Architecture</h3>
                <p>
                  Organize content and features for optimal usability.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Wireframing & Prototyping</h3>
                <p>
                  Create interactive prototypes to test and refine concepts.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Visual Design</h3>
                <p>
                  Apply brand-consistent aesthetics with pixel-perfect precision.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 13,
    title: "QA Services",
    link: "qa-services",
    icon: icon13,
    desc: "Comprehensive quality assurance and testing services that ensure your software is bug-free, performs optimally, and delivers exceptional user experiences.",
    detailsPage: {
      banner: require("../assets/images/banners/qa-services.jpg"),
      img1: require("../assets/images/service-details/qa-1.jpg"),
      img2: require("../assets/images/service-details/qa-2.jpg"),
      img3: require("../assets/images/service-details/qa-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Delivering Flawless Software Through Rigorous Testing
            </h2>
            <p>
              Our QA services ensure your applications meet the highest standards of quality, performance, and reliability before they reach your users.
            </p>
            <p>
              From functional testing to performance optimization, we identify and resolve issues early in the development cycle, saving time and reducing costs.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Invest in Professional QA Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Improved Product Quality</h3>
                <p>
                  Identify and fix defects before they impact users.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Savings</h3>
                <p>
                  Catch issues early when they're less expensive to fix.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Enhanced Security</h3>
                <p>
                  Uncover vulnerabilities before they can be exploited.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Better User Experience</h3>
                <p>
                  Ensure smooth, frustration-free interactions for your customers.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our QA Testing Services
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Functional Testing</h3>
                <p>
                  Verify all features work as intended across devices and platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Performance Testing</h3>
                <p>
                  Ensure your application performs well under various loads.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Security Testing</h3>
                <p>
                  Identify vulnerabilities and protect against potential threats.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Automated Testing</h3>
                <p>
                  Implement continuous testing pipelines for faster releases.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
];

export const serviceslist1 = [
  { title: "Mobile App Development", link: "mobile-app-development" },
  { title: "Web Development (Full stack)", link: "web-development" },
  { title: "Cloud Computing Services", link: "cloud-computing-services" },
  {
    title: "Artificial Intelligence Development",
    link: "artificial-intelligence-development",
  },
  {
    title: "Data Analytics and Business Intelligence",
    link: "data-analytics-and-business-intelligence",
  },
  { title: "IoT Development", link: "internet-of-things" },
];
export const serviceslist2 = [
  {
    title: "VR and AR Development",
    link: "vr-ar-development",
  },
  { title: "Blockchain Development", link: "blockchain-development" },
  { title: "Game Development", link: "game-development" },
  { title: "Chatbot Development", link: "chatbot-development" },
  { title: "AI Calling Agency", link: "ai-calling-agency" },
  { title: "UI/UX Design", link: "ui-ux-design" },
  { title: "QA Services", link: "qa-services" },
];
