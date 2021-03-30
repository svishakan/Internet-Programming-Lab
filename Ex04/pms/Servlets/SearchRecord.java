import java.io.*;
import java.sql.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SearchRecord extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException{
        
        //DB_URL: jdbc:mysql:location:port/DatabaseName?Parameters

        String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/Patient_Details?autoReconnect=true&useSSL=false";
        String USER = "admin";
        String PASS = "password";

        PrintWriter out = response.getWriter();
        response.setContentType("text/html");

        String pid = request.getParameter("pid");
        
        try{
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            String searchCmd = "SELECT * FROM Records WHERE pid = \"" + pid + "\"";
            Statement stmt = conn.createStatement();
            
            ResultSet rs = stmt.executeQuery(searchCmd);

            if(rs.next()){
                pid = rs.getString("pid");
                String pname = rs.getString("pname");
                int age = rs.getInt("age");
                String gender = rs.getString("gender");

                switch(gender){
                    case "M":
                        gender = "Male";
                        break;
                    case "F":
                        gender = "Female";
                        break;
                    case "O":
                        gender = "Other";
                        break;
                    default:
                        gender = "Null";
                }

                String mstatus = rs.getString("mstatus");
                String addr = rs.getString("addr");
                long phone = rs.getLong("phone");
                String dov = rs.getString("dov");

                out.println("<!DOCYTYPE HTML>");
                out.println("<html><head><title>Patient Details</title><link rel='stylesheet' href='css/pages.css'></head>");
                out.println("<body><h1 class='titleText'>Patient Details</h1><hr><br><table align='center'>");
                out.println("<tr><th>Patient ID</th><th>Name</th><th>Age</th><th>Gender</th>" +
                "<th>Marital Status</th><th>Address</th><th>Phone</th><th>Date of Visit</th></tr>");

                out.println("<tr><td>" + pid + "</td><td>" + pname + "</td><td>" + age + "</td><td>" + gender +
                "</td><td>" + mstatus + "</td><td>" + addr + "</td><td>" + phone + "</td><td>" + dov + "</td></tr>");

                out.println("</body></html>");      

            }

            else{
                out.println("<!DOCYTYPE HTML>");
                out.println("<html><head><link rel='stylesheet' href='css/pages.css'></head>");
                out.println("<body><h1 class='titleText'>Record with the ID: " + pid + " does not exist.</h1><br>");
                out.println("</body></html>");           
            }

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