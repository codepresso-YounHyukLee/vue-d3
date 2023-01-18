import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dev from "../views/Dev.vue";
import Layout from "../views/layout/index";
import Account from "../views/account/index";
import Upload from "../views/upload/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dev",
    component: Layout.Default,
    children: [
      {
        path: "/",
        name: "Home",
        component: Dev,
      },
    ],
  },
  {
    // path: "/",
    // component: Layout.Default,
    // children: [
    //   {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      navTransparent: true,
    },
  },
  //   ],
  // },
  {
    path: "/account",
    component: Layout.Default,
    children: [
      //임시 회원가입 페이지 라우트
      {
        path: "temp_signup",
        name: "temp_signup",
        component: Account.TemporarySignUp,
        meta: {
          navTransparent: true,
        },
      },
      {
        path: "login",
        name: "login",
        component: Account.Login,
        meta: {
          navTransparent: true,
        },
      },
      {
        path: "social",
        name: "social",
        component: Account.AuthUserSocial
      },
      {
        path: "my-page",
        redirect: { name: "my-page-works" },
        component: Account.MyPage,
        children: [
          {
            path: "works",
            name: "my-page-works",
            component: Account.MyPageWorks,
          },
          {
            path: "payments",
            name: "my-page-payments",
            component: Account.MyPagePayments,
          },
          {
            path: "payments/:id",
            name: "my-page-payment",
            component: Account.MyPagePayment,
          },
          {
            path: "info",
            name: "my-page-info",
            component: Account.MyPageInfo,
          },
        ],
      },
    ],
  },
  {
    path: "/account",
    component: Layout.Account,
    children: [
        //진짜 회원가입 페이지 라우트
      {
        path: "signup",
        name: "signup",
        component: Account.SignUp,
        meta: {
          navTransparent: true,
        },
      },
      {
        path: "find-account",
        name: "find-account",
        component: Account.FindAccount,
        meta: {
          navTransparent: true,
        },
      },
      {
        path: "result-id",
        name: "result-id",
        component: Account.ResultId,
        meta: {
          navTransparent: true,
        },
      },
      {
        path: "notice-id",
        name: "notice-id",
        component: Account.NoticeId,
        meta: {
          navTransparent: true,
        },
      },
      {
        path: "notice-password",
        name: "notice-password",
        component: Account.NoticePassword,
        meta: {
          navTransparent: true,
        },
      },
    ],
  },
  {
    path: "/upload",
    component: Layout.Default,
    children: [
      {
        path: "video",
        name: "upload-video",
        component: Upload.VideoUpload,
        meta: {
          navTransparent: true,
        },
      },
      {
        path: "work-progress",
        name: "work-progress",
        component: Upload.WorkProgress,
      },
      {
        path: "work-completed",
        name: "work-completed",
        component: Upload.WorkCompleted,
      },
      {
        path: "request-detail",
        name: "request-detail",
        component: Upload.RequestDetail,
      },
      {
        path: "working",
        name: "working",
        component: Upload.Working,
        meta: {
          navTransparent: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
