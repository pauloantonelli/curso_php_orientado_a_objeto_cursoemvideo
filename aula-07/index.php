<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>UEF</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <pre>
        <?php
            require_once 'lutadores.php';
            require_once 'luta.php';
            $l = [];
            //INSTANCIA DOS LUTADORES
            $l[0] = new Lutadores('Prety Boy', 'França', 31, 1.75, 68.9, 11, 3, 1);
            $l[1] = new Lutadores('Putscript', 'Brasil', 29, 1.68, 57.8, 14, 2, 3);
            $l[2] = new Lutadores('Snapshadow', 'EUA', 35, 1.65, 80.9, 12, 2, 1);
            $l[3] = new Lutadores('Dead Code', 'Austrália', 28, 1.93, 81.6, 13, 0, 2);
            $l[4] = new Lutadores('Ufocobol', 'Brasil', 37, 1.70, 119.3, 5, 4, 3);
            $l[5] = new Lutadores('Nerdard', 'EUA', 30, 1.81, 105.7, 12, 2, 4);

            //LUTAS
            $UEC1 = new Luta();
            $UEC1->marcarLuta($l[4], $l[5]);
            echo "<br/>";
            $UEC1->lutar();
        ?>
    </pre>
</body>
</html>