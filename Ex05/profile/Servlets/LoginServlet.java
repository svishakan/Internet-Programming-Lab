import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class LoginServlet extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws ServletException, IOException{
        String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";
        String USER = "admin";
        String PASS = "password";

        PrintWriter out = res.getWriter();
        String uname = req.getParameter("uname");
        String pass = req.getParameter("pass");

        try{
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            String query = "SELECT pass from Profile where uname = \"" + uname + "\"";
            Statement stmt = conn.createStatement();

            ResultSet rs = stmt.executeQuery(query);
            
            out.println("<!DOCTYPE html>");
            out.println("<html><head><title>Profile Tracking</title><link rel='stylesheet' href='styles.css'></head><body>");

            if(rs.next()){
                res.setContentType("text/html");
                String dbpass = rs.getString("pass");

                if(dbpass.equals(pass)){    //validate to profile page
                    HttpSession sesh = req.getSession();
                    sesh.setAttribute("uname", uname);
                    out.println("<h1 class='titleText'>Welcome " + uname + "!</h1>");
                    out.println("<div class='login'><form id='profileform' action='ProfileServlet'>");
                    out.println("<input type='submit' id='submit' class='btn' value='View Your Profile'></form></div>");
                }

                else{   //redirect back to the homepage
                    out.println("<h1 class='titleText'>Invalid Password!</h1>");
                    out.println("<div class='login'><button id='home' class='btn' onclick='redirectToHome()'>Go To Home</button></div>");
                    out.println("<script src='scripts/logout.js'></script>");
                }
            }

            else{   //redirect back to the homepage
                out.println("<h1 class='titleText'>Invalid Username!</h1>");
                out.println("<div class='login'><button id='home' class='btn' onclick='redirectToHome()'>Go To Home</button></div>");
                out.println("<script src='scripts/logout.js'></script>");
            }
            
            out.println("<footer>&copy; Vishakan Subramanian 2021</footer></body></html>");

            stmt.close();
            conn.close();
        }

        catch(SQLException se){
            se.printStackTrace();
            out.println(se);
        }

        catch(Exception e){
            e.printStackTrace();
            out.println(e);
        }
    }
}