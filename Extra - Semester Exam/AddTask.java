import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class AddTask extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws IOException, ServletException{
            Connection conn;
            PreparedStatement ps;
            
            String task = request.getParameter("newTask");
            response.setContentType("text/html");
            PrintWriter pw = response.getWriter();

            String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
            String DB_URL = "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";
            String USER = "admin";
            String PASS = "password";

            try{
                Class.forName(JDBC_DRIVER);
                conn = DriverManager.getConnection(DB_URL, USER, PASS);
                String insertCmd = "INSERT INTO todo VALUES (?)";
                ps = conn.prepareStatement(insertCmd);
                ps.setString(1, task);
                ps.execute();
                pw.println("Succcessfully Inserted Task!");
                conn.close();
            }
            
            catch(SQLException se){
                se.printStackTrace();
                pw.println(se);
            }

            catch(Exception e){
                e.printStackTrace();
                pw.println(e);
            }

            finally{
                pw.close();
            }
        }
}