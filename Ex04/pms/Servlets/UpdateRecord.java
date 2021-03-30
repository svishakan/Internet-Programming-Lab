import java.io.*;
import java.sql.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class UpdateRecord extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException{
        
        //DB_URL: jdbc:mysql:location:port/DatabaseName?Parameters

        String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/Patient_Details?autoReconnect=true&useSSL=false";
        String USER = "admin";
        String PASS = "password";

        PrintWriter out = response.getWriter();

        String pid = request.getParameter("id");
        String addr = request.getParameter("addr");
        long phone = Long.parseLong(request.getParameter("phone"));

        try{
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            String updateCmd = "UPDATE Records SET addr = ?, phone = ? WHERE pid = ?";
            PreparedStatement stmt = conn.prepareStatement(updateCmd);
            stmt.setString(1, addr);
            stmt.setLong(2, phone);
            stmt.setString(3, pid);
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