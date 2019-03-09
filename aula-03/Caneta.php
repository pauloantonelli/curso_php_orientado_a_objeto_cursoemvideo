<?php

class caneta{
    public $modelo;
    public $cor;
    private $ponta;
    protected $carga;
    protected $tampada;
    
    public function rabiscar(){
        if($this->tampada == true){
            echo "<p>Ops.. Caneta tampada</p>";
        }else{
            echo "<p>Estou rabiscando...</p>";
        }
    }
    public function tampar(){
        $this->tampada = true;
        $this->ponta = 0.5;
    }
    public function destampar(){
        $this->tampada = false;
    }
}

?>