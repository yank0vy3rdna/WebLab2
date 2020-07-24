package servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("")
public class ControllerServlet extends HttpServlet {
    Double parse(String str){
        return Double.parseDouble(str.replace(',','.'));
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        parse("1.2");
        getServletContext().getRequestDispatcher("/main_page.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            Double x = Double.parseDouble(req.getParameter("X"));
            Double y = Double.parseDouble(req.getParameter("Y"));
            Double r = Double.parseDouble(req.getParameter("R"));
            getServletContext().getRequestDispatcher("/areaCheckServlet").forward(req, resp);
        }catch (NumberFormatException | NullPointerException exception ){
            getServletContext().getRequestDispatcher("/main_page.jsp").forward(req, resp);
        }catch (Exception e){
            PrintWriter writer = resp.getWriter();
            writer.write("error");
            writer.close();
        }
    }
}
