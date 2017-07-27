﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GanttChart.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            if(Convert.ToInt32(Session["LoggedIn"]) == 1)
            {
                return View();
            }
            else
            {
                return Redirect("/Login/Index");
            }
        }
    }
}