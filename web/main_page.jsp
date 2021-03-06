<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta charset="utf8">

    <meta name="viewport" content="width=device-width initial-scale=1">
    <title>Web Lab 2</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <nav class="navbar navbar-dark bg-dark m-3 col-xl-10 mx-auto">

            <a class="navbar-brand" href="#">Крюков Андрей Юрьевич, P3214, вариант 2521</a>
        </nav>
        <div id="chart" class="mx-auto col-xl-7">
            <canvas id="canvas" style="width: 100%; height: 40vh"></canvas>
        </div>
        <div class="col-xl-6 mx-auto">
            <form id="form" method="POST">
                <div class="form-group row">
                    <label for="x_inp" class="col-sm-2 col-form-label">X</label>
                    <div class="col-sm-10">
                        <select name="X" class="form-control" id="x_inp">
                            <option>-5</option>
                            <option>-4</option>
                            <option>-3</option>
                            <option>-2</option>
                            <option>-1</option>
                            <option selected>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="y_inp" class="col-sm-2 col-form-label">Y</label>
                    <div class="col-sm-10">
                        <input name="Y" type="text" class="form-control" id="y_inp" placeholder="Enter Y(-5 .. 3)">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="r_inp" class="col-sm-2 col-form-label">R</label>
                    <div class="col-sm-10">
                        <input name="R" type="text" class="form-control" id="r_inp" placeholder="Enter R(1 .. 4)">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10 col-form-label"></div>
                    <div class="col-sm-2">
                        <button type="submit" id="submit" class="btn btn-dark">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div id="table" class="col-xl-7 mx-auto">
            <table class="table table-dark">
                <thead>
                <tr>
                    <th scope="col">X</th>
                    <th scope="col">Y</th>
                    <th scope="col">R</th>
                    <th scope="col">Result</th>
                </tr>
                </thead>
                <tbody>
                <jsp:useBean id="entryList" scope="session" class="models.EntryList"/>
                <c:forEach var="entry"
                           items="${entryList.entryList}">
                    <tr>
                        <td> ${ entry.x}</td>
                        <td> ${entry.y}</td>
                        <td> ${entry.r}</td>
                        <td> ${entry.result} </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>
    </div>
</div>
<script src="js/form.js"></script>
<script src="js/draw.js"></script>
</body>
</html>