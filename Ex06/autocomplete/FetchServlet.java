import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class FetchServlet extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws ServletException, IOException{
        
        String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";
        String USER = "admin";
        String PASS = "password";

        PrintWriter out = res.getWriter();

        String queryString = req.getParameter("queryString");
        
        //setting content type to XML
        res.setContentType("text/xml;charset=UTF-8");
        
        //Writing a raw XML document
        out.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
        out.append("<country_list>");

        try{
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            String query = "SELECT name FROM country WHERE name REGEXP \"^" + queryString + "\"";
            Statement stmt = conn.createStatement();

            ResultSet rs = stmt.executeQuery(query);

            while(rs.next()){   //appending queried countries to the XML
                String country = rs.getString("name");
                out.append("<country>" + country + "</country>");
            }

            out.append("</country_list>");

            conn.close();   //must close connection here as we may make too many requests
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