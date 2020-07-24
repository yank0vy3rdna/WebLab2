package servlets;

import models.Entry;
import models.EntryList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet
public class AreaCheckServlet extends HttpServlet {
    String getHTMLWithData(Entry entry) {
        return "<html>\n" +
                "  <head>\n" +
                "    <meta charset=\"utf-8\" /> " +
                "    <meta name=\"viewport\" content=\"width=device-width initial-scale=1\">\n" +
                "    <title>Web Lab 2</title>\n" +
                "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n" +
                "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\n" +
                "          integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\n" +
                "    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\n" +
                "            integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\n" +
                "            crossorigin=\"anonymous\"></script>\n" +
                "  </head>" +
                "<body>" +
                "<div class='container'>" +
                "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
                "\n" +
                "    <div class=\" mx-md-4\"></div>\n" +
                "    <a class=\"navbar-brand\" href=\"#\">Крюков Андрей Юрьевич, P3214, вариант 2521</a>\n" +
                "</nav>" +
                "<table class=\"table table-dark\">\n" +
                "  <thead>\n" +
                "    <tr>\n" +
                "      <th scope=\"col\">X</th>\n" +
                "      <th scope=\"col\">Y</th>\n" +
                "      <th scope=\"col\">R</th>\n" +
                "      <th scope=\"col\">Result</th>\n" +
                "    </tr>\n" +
                "  </thead>\n" +
                "  <tbody>\n" +
                "    <tr>\n" +
                "      <td>" + entry.getX() + "</td>\n" +
                "      <td>" + entry.getY() + "</td>\n" +
                "      <td>" + entry.getR() + "</td>\n" +
                "      <td>" + entry.isResult() + "</td>\n" +
                "    </tr>\n" +
                "   </tbody>\n" +
                "</table>" +
                "<form><button type=\"submit\" class=\"btn btn-dark\">Go back</button></form>" +
                "</div></body></html>";
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {

        HttpSession session = req.getSession();

        Double x = Double.parseDouble(req.getParameter("X"));
        Double y = Double.parseDouble(req.getParameter("Y"));
        Double r = Double.parseDouble(req.getParameter("R"));

        EntryList entryList = (EntryList) session.getAttribute("entryList");
        if (entryList == null) {
            entryList = new EntryList();
        }
        Entry entry = new Entry();
        entry.setR(r);
        entry.setX(x);
        entry.setY(y);
        entry.check();
        entryList.addEntry(entry);
        session.setAttribute("entryList", entryList);
        resp.setContentType("text/html; charset=UTF-8");
        PrintWriter out = resp.getWriter();
        out.write(getHTMLWithData(entry));

        out.close();
    }
}
