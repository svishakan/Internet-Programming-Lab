import javax.servlet.http.*;
import javax.servlet.*;
import javax.servlet.ServletException;
import java.io.*;
    
public class Form extends HttpServlet{

    public double getNetPay(double basic){
        //to calculate the net pay of the employee
        double da, hra, pf, tax, gross, net;
        da = 0.30 * basic;
        hra = 0.15 * basic;
        pf = 0.05 * basic;
        tax = 0.10 * basic;
        gross = basic + da + hra;
        net = gross - pf - tax;
        
        return net;
    }

    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws ServletException,IOException{
            
		res.setContentType("text/html;charset=UTF-8");  //defining action for GET

        PrintWriter out = res.getWriter();              //get the stream to write the data

        try{
            String eid = req.getParameter("eid").trim();
            String ename = req.getParameter("ename").trim();
            String job = req.getParameter("job").trim();
            String dept = req.getParameter("dept").trim();
            double basic = Double.parseDouble(req.getParameter("basic").trim());
            String phone = req.getParameter("phone").trim();
            String addr = req.getParameter("addr").trim();
            String dob = req.getParameter("dob").trim();
            String gender = req.getParameter("gender").trim();
            String mstatus = req.getParameter("marital").trim();
            
            double net = getNetPay(basic);
            String netStr = String.format("%.2f", net);

            out.println("<!DOCTYPE html><html>");
            out.println("<head><title>Employee Details</title>");
            out.println("<link rel=\"stylesheet\" href=\"styles.css\"></head>");
            out.println("<body><h1 class=\"titleText\">Employee Details</h1><hr><br>");
            out.println("<table align=\"center\"><tr><th>Employee ID</th><td>" + eid + "</td></tr>");
            out.println("<tr><th>Employee Name</th><td>" + ename + "</td></tr>");
            out.println("<tr><th>Date of Birth</th><td>" + dob + "</td></tr>");
            out.println("<tr><th>Gender</th><td>" + gender + "</td></tr>");
            out.println("<tr><th>Marital Status</th><td>" + mstatus + "</td></tr>");
            out.println("<tr><th>Designation</th><td>" + job + "</td></tr>");
            out.println("<tr><th>Department</th><td>" + dept + "</td></tr>");
            out.println("<tr><th>Address</th><td>" + addr + "</td></tr>");
            out.println("<tr><th>Phone</th><td>" + phone + "</td></tr>");
            out.println("<tr><th>Basic Pay</th><td>" + basic + "</td></tr>");
            out.println("<tr><th>Net Pay</th><td>" + netStr + "</td></tr>");
            out.println("</table></body>");
            out.println("</html>");

        }
        
        catch(Exception e){
            out.println(e.getMessage());
        }

        finally{
            out.close();
        }
     }
} 
