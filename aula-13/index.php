<pre>
    <?php
      require_once 'animal.php';
      require_once 'mamifero.php';
      require_once 'lobo.php';
      require_once 'cachorro.php';

      $x = new Cachorro();

      echo "<br/>";
      $x->reagirFrase("ola");
      echo "<br/>";
      $x->reagirFrase("Vai apanhar");
      echo "<br/>";
      $x->reagirHora(11,45);
      echo "<br/>";
      $x->reagirHora(21,00);
      echo "<br/>";
      $x->reagirDono(true);
      echo "<br/>";
      $x->reagirDono(false);
      echo "<br/>";
      $x->reagirIdade(2, 12.5);
      echo "<br/>";
      $x->reagirIdade(17, 4.5);
      echo "<br/>";
    ?>
</pre>