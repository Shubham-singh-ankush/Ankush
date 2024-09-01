// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Story from "../components/Story.vue";
import Consultation from "../components/Consultation.vue";
import Approach from "../components/Approach.vue";
import Fee from "../components/Fee.vue";
import Leader from "../components/Leader.vue";
import Contact from "../components/Contact.vue";
import Diagnosis from "../components/Diagnosis.vue";
import Depressions from "../components/Depressions.vue";
import Sleep from "../components/Sleep.vue";
import Tics from "../components/Tics.vue";
import Assessment from "../components/Assessment.vue";
import AdminLogin from "../components/login/AdminLogin.vue";
import AdminLayout from "../components/admin/AdminLayout.vue";
import AdminDashboard from "../components/admin/AdminDashboard.vue";
import { isLoggedIn } from "../services/auth";
import TreatmentConditions from "../components/TreatmentConditions.vue";
import Ocd from "../components/Ocd.vue";
import Autism from "../components/Autism.vue";
import Adhd from "../components/Adhd.vue";
import Anxiety from "../components/Anxiety.vue";
import Accrediation from "../components/Accrediation.vue";
import Portfolio from "../components/Portfolio.vue";
import Blogs from "../components/Blogs.vue";
import InnerBlogs from "../components/InnerBlogs.vue";
import ResetMailPassword from "../components/login/ResetMailPassword.vue";
import ResetPassword from "../components/login/ResetPassword.vue";
import AdminHeader from "../components/admin/Header.vue";
import AdminFooter from "../components/admin/Footer.vue";
import AdminHome from "../components/admin/Home.vue";
import AboutAdmin from "../components/admin/AboutAdmin.vue";
import AdminParent from "../components/admin/AdminParent.vue";
import AdminFee from "../components/admin/AdminFee.vue";
import AdminContact from "../components/admin/AdminContact.vue";
import TabSections from "../components/admin/TabSections.vue";
import SubTabSections from "../components/admin/SubTabSections.vue";
import DiagnosisAdmin from "../components/admin/DiagnosisAdmin.vue";
import TreatmentAdmin from "../components/admin/TreatmentAdmin.vue";
import ApproachAdmin from "../components/admin/ApproachAdmin.vue";
import ConsultantsAdmin from "../components/admin/ConsultantsAdmin.vue";
import LeadershipAdmin from "../components/admin/LeadershipAdmin.vue";
import AccreditationAdmin from "../components/admin/AccreditationAdmin.vue";
import ADAHAdmin from "../components/admin/ADAHAdmin.vue";
import AutismAdmin from "../components/admin/AutismAdmin.vue";
import AdminOcd from "../components/admin/AdminOcd.vue";
import AdminDepressions from "../components/admin/AdminDepressions.vue";
import AdminAnxiety from "../components/admin/AdminAnxiety.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/our-story",
    name: "Story",
    component: Story,
  },
  {
    path: "/our-consultation",
    name: "Consultation",
    component: Consultation,
  },
  {
    path: "/our-approach",
    name: "Approach",
    component: Approach,
  },
  {
    path: "/fee",
    name: "Fee",
    component: Fee,
  },

  {
    path: "/portfilio",
    name: "Portfilio",
    component: Portfolio,
  },

  {
    path: "/leader",
    name: "Leader",
    component: Leader,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/diagnosis",
    name: "Diagnosis",
    component: Diagnosis,
  },
  {
    path: "/depressions",
    name: "Depressions",
    component: Depressions,
  },
  {
    path: "/sleep-disorders",
    name: "Sleep",
    component: Sleep,
  },
  {
    path: "/treatment-conditions",
    name: "Treatment & Conditions",
    component: TreatmentConditions,
  },

  {
    path: "/ocd",
    name: "OCD",
    component: Ocd,
  },

  {
    path: "/autism",
    name: "Autism",
    component: Autism,
  },

  {
    path: "/tics",
    name: "Tics",
    component: Tics,
  },

  {
    path: "/adhd",
    name: "ADHD",
    component: Adhd,
  },

  {
    path: "/anxiety",
    name: "Anxiety",
    component: Anxiety,
  },

  {
    path: "/accrediation",
    name: "Accrediation",
    component: Accrediation,
  },
  {
    path: "/assessment",
    name: "Assessment",
    component: Assessment,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blogs,
  },

  {
    path: "/blogs/inner-blogs",
    name: "Inner Blog",
    component: InnerBlogs,
  },

  // Add more admin routes here as needed only
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
    meta: { requiresVisitor: true },
  },
  {
    path: "/admin/reset/",
    name: "ResetMailPassword",
    component: ResetMailPassword,
    meta: { requiresVisitor: true },
  },
  {
    path: "/admin/reset/password",
    name: "ResetPassword",
    component: ResetPassword,
    meta: { requiresVisitor: true },
  },
  {
    path: "/admin/dashboard",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "AdminDashboard",
        component: AdminDashboard,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/header",
        name: "Header",
        component: AdminHeader,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/footer",
        name: "Footer",
        component: AdminFooter,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/home",
        name: "AdminHome",
        component: AdminHome,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/admin-about",
        name: "AboutAdmin",
        component: AboutAdmin,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/admin-parent",
        name: "AdminParent",
        component: AdminParent,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/admin-fee",
        name: "AdminFee",
        component: AdminFee,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/admin-Contact",
        name: "AdminContact",
        component: AdminContact,
        meta: { requiresAuth: false },
      },
      { 
        path: "/admin/tab-sections",
        name: "Tab Sections",
        component: TabSections,
        meta: { requiresAuth: false },
      },
      { 
        path: "/admin/sub-tab-sections",
        name: "Sub Tab Sections",
        component: SubTabSections,
      },
      {
        path: "/admin/admin-diagnosis",
        name: "DiagnosisAdmin",
        component: DiagnosisAdmin,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/admin-diagnosis",
        name: "DiagnosisAdmin",
        component: DiagnosisAdmin,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/admin-treatment",
        name: "TreatmentAdmin",
        component: TreatmentAdmin,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/about-approach",
        name: "ApproachAdmin",
        component: ApproachAdmin,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/about-consultants",
        name: "ConsultantsAdmin",
        component: ConsultantsAdmin,
        meta: { requiresAuth: false },
      },
      {
        path: "/admin/about-leadership",
        name: "LeadershipAdmin",
        component: LeadershipAdmin,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/about-accreditation",
        name: "AccreditationAdmin",
        component: AccreditationAdmin,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/treatment-adah",
        name: "ADAHAdmin",
        component: ADAHAdmin,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/treatment-autism ",
        name: "AutismAdmin",
        component: AutismAdmin,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/treatment-ocdadmin",
        name: "AdminOcd",
        component: AdminOcd,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/treatment-depressions",
        name: "AdminDepressions",
        component: AdminDepressions,
        meta: { requiresAuth: false },
      },

      {
        path: "/admin/treatment-anxiety",
        name: "AdminAnxiety",
        component: AdminAnxiety,
        meta: { requiresAuth: false },
      },
      // Add more admin routes here as needed
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresVisitor = to.matched.some(
    (record) => record.meta.requiresVisitor
  );
  const loggedIn = localStorage.getItem("authToken") !== null; // Example implementation

  if (requiresAuth && !loggedIn) {
    next({ name: "AdminLogin" });
  } else if (requiresVisitor && loggedIn) {
    next({ name: "AdminDashboard" });
  } else {
    next();
  }
});

export default router;
