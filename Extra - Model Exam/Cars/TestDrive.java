import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class TestDrive extends HttpServlet{
    int hits;

    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException{
            PrintWriter out = response.getWriter();
            response.setContentType("text/html");

            HttpSession session = request.getSession(true); //existing session
            
            if(session.getAttribute("hits") != null){
                hits = (int) session.getAttribute("hits");
            } else {
                hits = 0;
            }

            hits++;
            session.setAttribute("hits", hits);

            String uname = request.getParameter("uname");
            String carmodel = request.getParameter("carmodel");
            String dor = request.getParameter("dor");
            Long phone = Long.parseLong(request.getParameter("phone"));

            out.println("<!DOCTYPE HTML>");
            out.println("<html><head><title>Register Form</title><link rel='stylesheet' href='index.css'></head>");
            out.println("<body><header><h1>Very Good Car Company</h1><h2>Welcome to Very Good Cars, where you get the best deals for quality cars!</h2><h2>Cars are available to be taken on a test drive.</h2><br>");
            out.println("<nav align='center'><ul><li><a href='index.html'>HOME</a></li><li><a href='sales.html'>SALES</a></li><li><a href='index.html'>SERVICE</a></li><li><a href='index.html'>MODELS</a></li><li><a href='form.html'>TEST DRIVE</a></li><li><a href='index.html'>CONTACT US</a></li></ul></nav></header><hr>");
            out.println("<h3>Test Drive Registration Form</h3><br><table align='center'>");
            out.println("<tr><th>Name</th><th>Car Model</th><th>Registration Date</th><th>Contact Number</th></tr>");
            out.println("<tr><td>" + uname + "</td><td>" + carmodel + "</td><td>" + dor + "</td><td>" + phone + "</td></tr>");
            out.println("</table>");
            out.println("<h4>No. of people visited for test drive:<span id='hits'>" + hits + "</span></h4>");
            out.println("<footer align='center'><address>Contact us at <a href='mailto:verygoodcars@cars.com'>Very Good Cars</a></address><span>&copy; Very Good Car Company</span></footer>");
            out.println("</body></html>");
        }
}