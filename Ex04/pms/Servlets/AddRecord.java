import java.io.*;
import java.sql.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AddRecord extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException{
        
        //DB_URL: jdbc:mysql:location:port/DatabaseName?Parameters

        String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/Patient_Details?autoReconnect=true&useSSL=false";
        String USER = "admin";
        String PASS = "password";

        PrintWriter out = response.getWriter();

        String pid = request.getParameter("id");
        String name = request.getParameter("pname");
        int age = Integer.parseInt(request.getParameter("age"));
        String gdr = request.getParameter("gender");

        switch(gdr){
            case "Male":
                gdr = "M";
                break;
            case "Female":
                gdr = "F";
                break;
            case "Other":
                gdr = "O";
                break;
            default:
                gdr = null;
        }

        String mstatus = request.getParameter("marital");
        String addr = request.getParameter("addr");
        long phone = Long.parseLong(request.getParameter("phone"));
        String dov = request.getParameter("dov");

        try{
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            String insertCmd = "INSERT INTO Records VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(insertCmd);
            stmt.setString(1, pid);
            stmt.setString(2, name);
            stmt.setInt(3, age);
            stmt.setString(4, gdr);
            stmt.setString(5, mstatus);
            stmt.setString(6, addr);
            stmt.setLong(7, phone);
            stmt.setString(8, dov);

            stmt.executeUpdate();   //execute the PreparedStatement

            //To open the view.html page after adding the record
            RequestDispatcher rd = request.getRequestDispatcher("/view.html");
            rd.forward(request, response);

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