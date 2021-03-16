import javax.servlet.http.*;
import javax.servlet.*;
import javax.servlet.ServletException;
import java.io.*;

/*
HTTP Session creates a unique session ID for each different user (browser)
*/

public class ServletOne extends HttpServlet {
    int hits;   //variable for tracking user hits

    public void doGet(HttpServletRequest request, HttpServletResponse response){
        try{
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            HttpSession session = request.getSession(true);   //existing session
            String u_name = request.getParameter("userName");
            session.setAttribute("uname", u_name);
            session.setMaxInactiveInterval(10);         //setting timeout of 10 seconds
            
            if(session.getAttribute("hits") != null){
                //not a new session, already started counting hits
                hits = (int) session.getAttribute("hits");
            }
            else{
                //new session, initiate hits to 0
                hits = 0;
            }

            hits++;                                 //incrementing the number of hits
            session.setAttribute("hits", hits);     //store the value in an attribute


            out.print("<h1>Welcome " + u_name + "!</h1><br>");
            out.println("<h2>Your Session ID: " + session.getId() + "</h2><br>");   //printing session ID
            out.println("<h2>Session Timeout: " + session.getMaxInactiveInterval() + " seconds</h2><br>");
            out.println("<h2>Your Hits: " + hits + "</h2><br>");
            out.close();
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
} 