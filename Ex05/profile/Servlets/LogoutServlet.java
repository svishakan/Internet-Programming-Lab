import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LogoutServlet extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws ServletException, IOException{
        PrintWriter out = res.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html><head><title>Profile Tracking</title><link rel='stylesheet' href='styles.css'></head><body>");

        try{
            HttpSession sesh = req.getSession();

            if(sesh.getAttribute("uname") != null){
                String uname = (String) sesh.getAttribute("uname");
                sesh.invalidate();  //Invalidate the HttpSession
                out.println("<h1 class='titleText'>" + uname + " was logged out successfully.</h1><hr><br>");
            }
        }

        catch(Exception e){
            e.printStackTrace();
            out.println(e);
        }

        out.println("<div class='login'><button id='home' class='btn' onclick='redirectToHome()'>Go To Home</button></div>");
        out.println("<script src='scripts/logout.js'></script>");
        out.println("<footer>&copy; Vishakan Subramanian 2021</footer></body></html>");
    }
}