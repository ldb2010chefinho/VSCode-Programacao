package com.calculomovimento;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;

public class Servlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        out.println("""
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <ol>
                        <li>Primeiro
                            <ol>
                            <li>A</li>
                            <li>B</li>
                            </ol>
                        </li>
                        <li>Segundo
                            <ul>
                            <li>A</li>
                            <li>B</li>
                            </ul>
                        </li>
                        <li>Terceiro
                            <ol>
                                <li>A</li>
                            </ol>
                            <ul>
                                <li>B</li>
                            </ul>
                        </li>
                    </ol>
                </body>
                </html>
                """);
    }
}
