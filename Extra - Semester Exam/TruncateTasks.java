import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class TruncateTasks extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws IOException, ServletException{
            Connection conn;
            PreparedStatement ps;
            
            response.setContentType("text/html");
            PrintWriter pw = response.getWriter();

            String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
            String DB_URL = "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";
            String USER = "admin";
            String PASS = "password";

            try{
                Class.forName(JDBC_DRIVER);
                conn = DriverManager.getConnection(DB_URL, USER, PASS);
                String truncateCmd = "TRUNCATE TABLE todo";
                ps = conn.prepareStatement(truncateCmd);
                ps.execute();
                pw.println("Succcessfully Cleared All Tasks!");
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