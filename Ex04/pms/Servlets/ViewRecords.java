import java.io.*;
import java.sql.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ViewRecords extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException{
        
        //DB_URL: jdbc:mysql:location:port/DatabaseName?Parameters

        String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/Patient_Details?autoReconnect=true&useSSL=false";
        String USER = "admin";
        String PASS = "password";

        PrintWriter out = response.getWriter();
        response.setContentType("text/html");
        
        try{
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            String viewCmd = "SELECT * FROM Records";
            //to navigate forwards and backwards, and also to make the result set read-only
            Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY);
            
            ResultSet rs = stmt.executeQuery(viewCmd);

            if(rs.first()){     //to check if the database has any rows

                rs.beforeFirst();   //to set the cursor back before the first row

                out.println("<!DOCYTYPE HTML>");
                out.println("<html><head><title>Patient Details</title><link rel='stylesheet' href='css/pages.css'></head>");
                out.println("<body><h1 class='titleText'>Patient Details</h1><hr><br><table align='center'>");
                out.println("<tr><th>Patient ID</th><th>Name</th><th>Age</th><th>Gender</th>" +
                "<th>Marital Status</th><th>Address</th><th>Phone</th><th>Date of Visit</th></tr>");

                while(rs.next()){
                    String pid = rs.getString("pid");
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

                    out.println("<tr><td>" + pid + "</td><td>" + pname + "</td><td>" + age + "</td><td>" + gender +
                    "</td><td>" + mstatus + "</td><td>" + addr + "</td><td>" + phone + "</td><td>" + dov + "</td></tr>");

                }

                out.println("</table></body></html>");

            }

            else{
                out.println("The database is empty.<br>");
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