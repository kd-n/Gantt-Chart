﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GanttChart.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            Session["LoggedIn"] = null;
            return View();
        }

        public ActionResult Register()
        {
            Session["LoggedIn"] = 2;
            return View();
        }
        
        [HttpPost]
        public ActionResult Validate()
        {
            string user = Request.Form["username"];
            string pass = Request.Form["password"];

            if((user == "admin") && (pass == "admin"))
            {
                Session["LoggedIn"] = 1;
                Session["Username"] = user;

                return Redirect("/Dashboard/Index");
            }
            else
            {
                return Redirect("/Login/Index");
            }
            
        }

        public ActionResult Logout()
        {
            Session["LoggedIn"] = null;
            Session["Username"] = "User";
            return View("Index");
        }
    }
}