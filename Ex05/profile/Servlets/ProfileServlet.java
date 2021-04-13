import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class ProfileServlet extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws ServletException, IOException{
        String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";
        String USER = "admin";
        String PASS = "password";

        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String uname = (String) sesh.getAttribute("uname");

        try{
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            String query = "SELECT * from Profile where uname = \"" + uname + "\"";
            Statement stmt = conn.createStatement();

            ResultSet rs = stmt.executeQuery(query);
            
            out.println("<!DOCTYPE html>");
            out.println("<html><head><title>Profile Tracking</title><link rel='stylesheet' href='styles.css'></head><body>");
            out.println("<h1 class='titleText'>" + uname + "'s Profile Page</h1><hr><br>");
            
            if(rs.next()){   //display the user's full profile details
                res.setContentType("text/html");
                String uid = rs.getString("uid");
                int age = rs.getInt("age");
                String name = rs.getString("name");
                String location = rs.getString("location");
            
                out.println("<table align='center'>");
                out.println("<tr><th>Username: </th><td>" + uname + "</td></tr>");
                out.println("<tr><th>User ID: </th><td>" + uid + "</td></tr>");
                out.println("<tr><th>Name: </th><td>" + name + "</td></tr>");
                out.println("<tr><th>Age: </th><td>" + age + "</td></tr>");
                out.println("<tr><th>Location: </th><td>" + location + "</td></tr>");
            }

            else{       //error in retrieval
                out.println("<h2 class='titleText'>Sorry, your records are not updated with us!</h2>");
            }

            out.println("</table>");
            out.println("<br><br><br><div class='login'><form id='logout' action='LogoutServlet'>");
            out.println("<input type='submit' value='Logout' id='submit' class='btn'>");
            out.println("</form></div>");
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